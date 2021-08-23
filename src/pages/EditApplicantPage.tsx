import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { Loading, Error } from "../components/utils";
import {
  useGetApplicantForEditQuery,
  useModifyApplicantMutation,
} from "../__generated__/grapqhl-types";
import { ApplicantEditor } from "../components/ApplicantEditor";

export const GET_APPLICANT_FOR_EDIT = gql`
  query getApplicantForEdit($codigo: ID!) {
    applicant(codigo: $codigo) {
      codigo
      nombre
      apellido_paterno
      apellido_materno
      genero
      ciclo
      carrera
      telefono
      email
      externo
      desertor
      nivel
      curso
    }
  }
`;

export const SAVE_APPLICANT_TO_DB = gql`
  mutation modifyApplicant($codigo: String!, $input: ApplicantInput!) {
    saveApplicant(codigo: $codigo, input: $input) {
      codigo
      nombre
      apellido_paterno
      apellido_materno
      genero
      ciclo
      carrera
      telefono
      email
      externo
      desertor
      nivel
      curso
    }
  }
`;

const EditApplicantPage = () => {
  const params: { code: string } = useParams();
  const { data, loading, error } = useGetApplicantForEditQuery({
    variables: { codigo: params.code },
  });
  const [modifyApplicant] = useModifyApplicantMutation();
  const handleSubmit = (applicant) => {
    const externo = Boolean(applicant.externo === "true");
    const desertor = Boolean(applicant.desertor === "true");
    const composedApplicant = { ...applicant, externo, desertor };
    modifyApplicant({
      variables: { codigo: params.code, input: composedApplicant },
    });
  };
  if (loading) return <Loading />;
  if (error) return <Error err={error} />;
  return (
    <ApplicantEditor initialValues={data?.applicant} onSubmit={handleSubmit} />
  );
};

export default EditApplicantPage;
