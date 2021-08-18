import * as React from "react";
import { Action } from "../../types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

type LevelProps = {
  index: number;
  checked: boolean;
  onChange: (index: number, checked: boolean) => void;
};
const Level: React.FC<LevelProps> = (props) => (
  <Form.Group>
    <input
      type="checkbox"
      onChange={({ target }) => props.onChange(props.index, target.checked)}
      checked={props.checked}
    />
    <label>Level {props.index + 1}</label>
  </Form.Group>
);

export type LevelsFormProps = {
  course: "en" | "fr";
  registering: number[];
  handleSave: (newRegistering: string[], course: "en" | "fr") => void;
};
const LevelsForm: React.FC<LevelsFormProps> = (props) => {
  const handleSave = props.handleSave;
  const CHECK_LEVEL = "CHECK_LEVEL";
  const reducer = (state: any[], action: Action) => {
    switch (action.type) {
      case CHECK_LEVEL:
        return [
          ...state.slice(0, action.payload.index),
          action.payload.checked,
          ...state.slice(action.payload.index + 1),
        ];
      default:
        return state;
    }
  };
  const elements = new Array(6).fill(false);
  const getInitialState = (blank: boolean[], payload: number[]): boolean[] => {
    return blank.map((checked, index) => payload.includes(index + 1));
  };
  const initialState = getInitialState(elements, props.registering);
  const [checkedControl, dispatch] = React.useReducer(reducer, initialState);
  const checkLevel = (index: number, checked: boolean): Action => {
    return { type: CHECK_LEVEL, payload: { index, checked } };
  };
  const newRegistering = checkedControl
    .map((el, index) => el && (index + 1).toString())
    .filter((el) => el);
  return (
    <div>
      <h3>
        Registering Levels ({props.course === "en" ? "English" : "French"}):
      </h3>
      {elements.map((el, index) => (
        <Level
          key={index}
          index={index}
          checked={checkedControl ? checkedControl[index] : false}
          onChange={(index: number, checked: boolean) =>
            dispatch(checkLevel(index, checked))
          }
        />
      ))}
      <Button onClick={() => handleSave(newRegistering, props.course)}>
        Save
      </Button>
    </div>
  );
};

export default LevelsForm;
