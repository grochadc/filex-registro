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
        <p>
          Chat: <a href={schedule.chat}>{schedule.chat}</a>
        </p>
        <p>
          Classroom:{" "}
          {/(http).+/.test(schedule.classroom) ? (
            <a href={schedule.classroom}>{schedule.classroom}</a>
          ) : (
            schedule.classroom
          )}
        </p>
        <p>
          Sesiones: <a href={schedule.sesiones}>{schedule.sesiones}</a>
        </p>
      </div>
    </div>
  );
};

export default Success;
