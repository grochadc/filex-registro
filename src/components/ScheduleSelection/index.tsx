import React, { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";

const Container = styled.div`
  margin-top: 2em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: ;
`;
const ScheduleContainer = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  width: 200px;
  cursor: pointer;
  text-align: center;
  padding: 1em;
  margin: 1.5em;
  ${(props) =>
    props.selected
      ? `
    color: white;
    background-color: rgb(50,57,63);
  `
      : null}
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

type ScheduleSelectionProps = {
  schedules: { teacher: string; group: string }[];
  onScheduleSelect: (index: any) => void;
};
const ScheduleSelection = (props: ScheduleSelectionProps) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  return (
    <>
      <h1>Selecciona el grupo de tu preferencia:</h1>
      <Container>
        {props.schedules.map((schedule, index) => (
          <ScheduleContainer
            key={schedule.teacher + schedule.group}
            selected={selectedOptionIndex === index}
            onClick={() => setSelectedOptionIndex(index)}
          >
            <h3>{schedule.group}</h3>
            <p>Teacher {schedule.teacher}</p>
          </ScheduleContainer>
        ))}
      </Container>
      <ButtonContainer>
        <Button
          onClick={() => props.onScheduleSelect(selectedOptionIndex)}
          disabled={selectedOptionIndex < 0}
        >
          Enviar
        </Button>
      </ButtonContainer>
    </>
  );
};

export default ScheduleSelection;
