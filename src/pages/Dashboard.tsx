import * as React from "react";
import LevelsRegistering from "../components/Dashboard/LevelsRegistering";
import Alert from "react-bootstrap/Alert";
import { useQuery, useMutation } from "@apollo/client";
import { GET_LEVELS_REGISTERING, SAVE_LEVELS_REGISTERING } from "../queries";

const Dashboard: React.FC = () => {
  const [savingLevels, setSavingLevels] = React.useState(false);
  const [levelsSaved, setLevelsSaved] = React.useState(false);
  const query = useQuery(GET_LEVELS_REGISTERING);
  const [saveLevels] = useMutation(SAVE_LEVELS_REGISTERING, {
    onCompleted: () => {
      setSavingLevels(false);
      setLevelsSaved(true);
    },
    onError: (err) => console.log(err),
  });
  const handleSave = (levels: number[]) => {
    setSavingLevels(true);
    setLevelsSaved(false);
    saveLevels({
      variables: { levels },
    });
  };
  if (query.loading) return <div>Cargando...</div>;
  if (query.error) return <div>{JSON.stringify(query.error)}</div>;
  return (
    <div>
      <h1>Settings</h1>
      <LevelsRegistering
        registering={query.data.registeringLevels}
        handleSave={handleSave}
      />
      {savingLevels ? <Alert>Saving levels...</Alert> : null}
      {levelsSaved ? <Alert>Levels saved successfully!</Alert> : null}
    </div>
  );
};

export default Dashboard;
