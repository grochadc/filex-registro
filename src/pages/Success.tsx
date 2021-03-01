import { MutationResponse } from "../types";

const Success = (props: { mutationResponse: MutationResponse | undefined }) => {
  const { nombre, schedule } = props.mutationResponse;
  return (
    <div>
      <p>
        <strong>Felicidades {nombre}!</strong>
      </p>
      <p>
        Ya estas inscrito en el grupo {schedule.group} con el teacher{" "}
        {schedule.teacher}.
      </p>
      <div>
        Aqui tienes todos los links que necesitas para entrar a la clase:
        <p>Chat: {schedule.chat}</p>
        <p>Classroom: {schedule.classroom}</p>
        <p>Sesiones: {schedule.sesiones}</p>
      </div>
    </div>
  );
};

export default Success;
