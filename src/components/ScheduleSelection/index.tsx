import React, { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { GetApplicantQueryResult } from "../../generated/grapqhl-types";

const Container = styled.div`
  margin-top: 2em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: ;
`;
const ScheduleContainer = styled.div<{ selected: boolean }>`
  border: 1px solid gray;
  border-radius: 15px;
  width: 200px;
  cursor: pointer;
  text-align: center;
  padding: 1em;
  margin: 1.5em;
  ${(props) =>
    //@ts-ignore
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

type GroupProp = {
  id: string;
  ciclo: string;
  name: string;
  time: string;
  aula: string;
  teacher: string;
} | undefined | null;
type ScheduleSelectionProps = {
  schedules: GroupProp[];
  onScheduleSelect: (index: any) => void;
};
const ScheduleSelection = (props: ScheduleSelectionProps) => {
  console.log('schedle component props', props)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  if (!props.schedules.length) return null;
  return (
    <>
      <h1>Selecciona el grupo de tu preferencia:</h1>
      <Container>
        {props.schedules.map((schedule, index) => (
          <ScheduleContainer
            key={schedule?.teacher ? schedule.teacher + schedule?.name : schedule?.name}
            selected={selectedOptionIndex === index}
            onClick={() => setSelectedOptionIndex(index)}
          >
            <h3>{schedule?.name}</h3>
            <p>Teacher {schedule?.teacher}</p>
            <p>Aula {schedule?.aula}</p>
            <p>{schedule?.time}</p>
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
