import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Loading, Error } from "../../components/utils";
import { useParams, useHistory } from "react-router-dom";
import { gql } from "@apollo/client";
import {
  UnenrolledStudent,
  useGetApplicantQuery,
  GetApplicantQuery,
} from "../../generated/grapqhl-types";
import { calculateCicloActual } from "../../utils";

import ApplicantEditor from "../../components/ApplicantEditor";
import ScheduleSelection from "../../components/ScheduleSelection";

export const GetApplicant = gql`
query GetApplicant($codigo: ID!, $cicloActual:String!) {
  unenrolledStudent(codigo: $codigo, cicloActual: $cicloActual) {
    codigo
    nombre
    apellido_materno
    apellido_paterno
    genero
    carrera
    cicloIngreso
    telefono
    email
    institucionalEmail
    nivel
    curso
    externo
    registering
    desertor
    registeredGroup {
      ciclo
      name
      time
      aula
      teacher
    }
    groups {
      id
      ciclo
      name
      time
      aula
      teacher
    }
  }
}
`;

type SelectionProps = {
  submitSelection: (studentWithSchedule: any) => void;
  onAlreadyRegistered: (info: { nombre: string; group: any }) => void;
};
const Selection = (props: SelectionProps) => {
  const [student, setStudent] = useState<
    GetApplicantQuery["unenrolledStudent"]
  >();

  const [groups, setGroups] = useState<
    GetApplicantQuery["unenrolledStudent"]["groups"]
  >([]);

  const [groupSelection, setGroupSelection] = useState("");

  //@ts-ignore
  const params: { code: string } = useParams();
  //const history = useHistory();
  const query = useGetApplicantQuery({
    variables: { codigo: params.code, cicloActual: calculateCicloActual(new Date()) },
    onCompleted: (data) => {
      if (data?.unenrolledStudent !== undefined) {
        setStudent(data.unenrolledStudent);
        setGroups(data.unenrolledStudent.groups);
      }
    },
  });
  const { data } = query;

  const [showScheduleSelection, setShowScheduleSelection] = useState(false);
  useEffect(() => { }, [showScheduleSelection]);

  const handleApplicantEditorSubmit = (values: any) => {
    setStudent({ ...student, ...values });
    setShowScheduleSelection(true);
  };

  const handleScheduleSelect = (index: number) => {
    const selectedGroup = groups[index];

    if (selectedGroup !== null && selectedGroup !== undefined) {
      props.submitSelection({
        codigo: student?.codigo,
        nivel: student?.nivel,
        curso: student?.curso,
        group: selectedGroup.name,
        groupId: selectedGroup.id,
      });
    }
  };
  const isInvalidCode = /^[0-9]+$/.test(params.code) ? false : true;

  useEffect(() => {
    if (data?.unenrolledStudent.registeredGroup) {
      console.log(
        "found alreadyRegistered",
        data.unenrolledStudent.registeredGroup
      );
      props.onAlreadyRegistered({
        nombre: data.unenrolledStudent.nombre,
        group: data.unenrolledStudent.registeredGroup,
      });
    }
  }, [data, props]);

  if (query.loading) return <Loading />;
  if(query.error) console.log(query.error);
  if (query.error) {
    return <Error err={query.error} />;
  }
  if (isInvalidCode)
    return <Alert variant="danger">Ese no es un codigo valido.</Alert>;
  if (data && !data.unenrolledStudent.registering)
    return (
      <Alert variant="warning">
        Hoy no es dia de registro para nivel {data.unenrolledStudent.nivel}. Por
        favor vuelve el dia indicado.
      </Alert>
    );
  if (data && data.unenrolledStudent.groups.length === 0)
    return (
      <Alert variant="warning">
        Lo sentimos, todos los grupos para nivel {data?.unenrolledStudent.nivel}{" "}
        estan llenos.
      </Alert>
    );
  if (student)
    return (
      <div>
        {student.desertor ? (
          <Alert variant="warning">
            Notamos que dertaste el ciclo anterior. Recuerda que solo puedes
            desertar dos veces!
          </Alert>
        ) : null}
        {showScheduleSelection ? (
          <ScheduleSelection
            schedules={groups}
            onScheduleSelect={handleScheduleSelect}
          />
        ) : (
          <ApplicantEditor
            type="edit"
            admin={false}
            heading="Revisa tus datos:"
            initialValues={student}
            onSubmit={handleApplicantEditorSubmit}
          />
        )}
      </div>
    );
  return <>No DATA</>;
};

export default Selection;
