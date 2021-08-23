import * as React from "react";
import LevelsRegistering from "../components/Dashboard/LevelsRegistering";
import { ApplicantSelectionForm } from "../components/ApplicantEditor";
import { useHistory } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { gql } from "@apollo/client";
import {
  useGetLevelsRegisteringQuery,
  useSaveLevelsMutation,
} from "../__generated__/grapqhl-types";

export const SAVE_LEVELS_REGISTERING = gql`
  mutation saveLevels($levels: [String!]!, $course: String!) {
    saveRegisteringLevels(levels: $levels, course: $course)
  }
`;

export const GET_LEVELS_REGISTERING = gql`
  query getLevelsRegistering {
    english: registeringLevels(course: "en")
    french: registeringLevels(course: "fr")
  }
`;

const Dashboard: React.FC = () => {
  const [savingLevels, setSavingLevels] = React.useState(false);
  const [levelsSaved, setLevelsSaved] = React.useState(false);
  const history = useHistory();
  const query = useGetLevelsRegisteringQuery();
  const { data } = query;
  const [saveLevels] = useSaveLevelsMutation({
    onCompleted: () => {
      setSavingLevels(false);
      setLevelsSaved(true);
    },
    onError: (err) => console.log(err),
  });
  const handleSave = (levels: string[], course: "en" | "fr") => {
    setSavingLevels(true);
    setLevelsSaved(false);
    const variables = { levels, course };
    saveLevels({
      variables,
    });
  };
  if (query.loading) return <div>Cargando...</div>;
  if (query.error) return <div>{JSON.stringify(query.error)}</div>;
  return (
    <div>
      <h1>Settings</h1>
      <LevelsRegistering
        registering={data?.english!}
        course="en"
        handleSave={handleSave}
      />
      <LevelsRegistering
        registering={data?.french!}
        course="fr"
        handleSave={handleSave}
      />
      {savingLevels ? <Alert>Saving levels...</Alert> : null}
      {levelsSaved ? <Alert>Levels saved successfully!</Alert> : null}
      <h2>Edit Applicant:</h2>
      <ApplicantSelectionForm
        onSubmit={(codigo) => history.push(`/editApplicant/${codigo}`)}
      />
    </div>
  );
};

export default Dashboard;
