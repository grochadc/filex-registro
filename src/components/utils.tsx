import * as React from "react";
import Alert from "react-bootstrap/Alert";
import { useQuery, gql } from "@apollo/client";

export const GET_SCHEDULE = gql`
  query getSchedule($id: String!) {
    schedule(id: $id) {
      group
      teacher
      entry
    }
  }
`;

export const Loading = () => <div>Cargando...</div>;

export const Error = (props: any) => {
  switch (props.err.graphQLErrors[0].extensions.code) {
    case "APPLICANT_NOT_FOUND":
      return <Alert>No encontramos ningún alumno con ese código.</Alert>;
    case "ALREADY_REGISTERED":
      return <Schedule group={props.err.graphQLErrors[0].message} />;
    default:
      return <div>{JSON.stringify(props.err)}</div>;
  }
};

type ScheduleProps = {
  group: string;
};
export const Schedule = (props: ScheduleProps) => {
  const { data, loading } = useQuery(GET_SCHEDULE, {
    variables: { id: props.group },
  });
  if (loading) return <Loading />;
  return (
    <div>
      <p>
        Ya estas inscrito en el grupo {data.schedule.group} con el teacher{" "}
        {data.schedule.teacher}.
      </p>
      <div>
        Aqui tienes todos los links que necesitas para entrar a la clase:
        <p>
          Chat: <a href={data.schedule.chat}>{data.schedule.chat}</a>
        </p>
        <p>
          Classroom:{" "}
          {/(http).+/.test(data.schedule.classroom) ? (
            <a href={data.schedule.classroom}>{data.schedule.classroom}</a>
          ) : (
            data.schedule.classroom
          )}
        </p>
        <p>
          Sesiones:{" "}
          <a href={data.schedule.sesiones}>{data.schedule.sesiones}</a>
        </p>
      </div>
    </div>
  );
};
