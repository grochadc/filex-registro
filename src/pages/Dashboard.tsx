import * as React from "react";
import LevelsRegistering from "../components/Dashboard/LevelsRegistering";
import Alert from "react-bootstrap/Alert";
import { useQuery, useMutation, gql } from "@apollo/client";
import { SAVE_LEVELS_REGISTERING } from "../queries";
import {
  GetLevelsRegisteringQuery,
  SaveLevelsMutationVariables,
} from "../types/graphql-server";

const GET_LEVELS_REGISTERING = gql`
  {
    english: registeringLevels(course: "en")
    french: registeringLevels(course: "fr")
  }
`;

const Dashboard: React.FC = () => {
  const [savingLevels, setSavingLevels] = React.useState(false);
  const [levelsSaved, setLevelsSaved] = React.useState(false);
  const query = useQuery(GET_LEVELS_REGISTERING);
  const { data }: { data: GetLevelsRegisteringQuery } = query;
  const [saveLevels] = useMutation(SAVE_LEVELS_REGISTERING, {
    onCompleted: () => {
      setSavingLevels(false);
      setLevelsSaved(true);
    },
    onError: (err) => console.log(err),
  });
  const handleSave = (levels: string[], course: "en" | "fr") => {
    setSavingLevels(true);
    setLevelsSaved(false);
    const variables: SaveLevelsMutationVariables = { levels, course };
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
        registering={data.english}
        course="en"
        handleSave={handleSave}
      />
      <LevelsRegistering
        registering={data.french}
        course="fr"
        handleSave={handleSave}
      />
      {savingLevels ? <Alert>Saving levels...</Alert> : null}
      {levelsSaved ? <Alert>Levels saved successfully!</Alert> : null}
    </div>
  );
};

export default Dashboard;
