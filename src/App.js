import React, { Fragment, useState } from "react";
import Selection from "./pages/Selection";
import Home from "./pages/Home";
import Success from "./pages/Success";
import { postToDB } from "./lib";

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
  const [info, setInfo] = useState({});

  return (
    <Router currentRoute={currentRoute}>
      <Router.View route="home">
        <Home
          handleSubmit={code => {
            setCode(code);
            setCurrentRoute("selection");
          }}
        />
      </Router.View>
      <Router.View route="selection">
        <Selection
          code={code}
          handleSubmit={studentInfo => {
            setInfo(studentInfo);
            postToDB(
              `/registered/${studentInfo.schedule}/${studentInfo.code}`,
              {
                level: studentInfo.prev_level + 1,
                ...studentInfo
              }
            )
              .then(() => console.log("posting to db successful"))
              .catch(() => console.log("Error posting to db"));
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
