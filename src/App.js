import React, { Fragment, useState } from "react";
import Selection from "./pages/Selection";
import Home from "./pages/Home";
import Success from "./pages/Success";
import { database, postToDB } from "./lib";

const Router = ({ currentRoute, children }) => {
  return React.Children.map(children, child =>
    React.cloneElement(child, { currentRoute })
  );
};

Router.View = ({ route, currentRoute, children }) => (
  <div>{currentRoute === route ? <Fragment>{children}</Fragment> : null}</div>
);

export default function App() {
  const [currentRoute, setCurrentRoute] = useState("home");
  const [code, setCode] = useState("");
  const [ubicacion, setUbicacion] = useState(false);
  const [info, setInfo] = useState({});

  return (
    <Router currentRoute={currentRoute}>
      <Router.View route="home">
        <Home
          handleSubmit={({ code, ubicacion }) => {
            setCode(code);
            setUbicacion(ubicacion);
            setCurrentRoute("selection");
          }}
        />
      </Router.View>
      <Router.View route="selection">
        <Selection
          code={code}
          ubicacion={ubicacion}
          handleSubmit={async studentInfo => {
            console.log("Submitted info", studentInfo);
            setInfo(studentInfo);
            await postToDB(
              `/registered/${studentInfo.schedule}/${studentInfo.code}`,
              studentInfo
            );
            const current_schedule_string = studentInfo.schedule[0];
            console.log("schedule", typeof current_schedule_string);
            const current_level = current_schedule_string.substring(1, 2);
            const current_schedule_index =
              current_schedule_string.substring(3) - 1;
            const registered_count_snapshot = await database
              .ref(
                `schedules/level${current_level}/${current_schedule_index}/registered`
              )
              .once("value");
            const registered_count = registered_count_snapshot.val();
            await database
              .ref(`schedules/level${current_level}/${current_schedule_index}`)
              .update({ registered: registered_count + 1 });
            setCurrentRoute("success");
            console.log("info from Selection", studentInfo);
          }}
          handleRouteChange={setCurrentRoute}
        />
      </Router.View>
      <Router.View route="success">
        <Success info={info} />
      </Router.View>
    </Router>
  );
}
