import { RegisterMutation } from "../__generated__/grapqhl-types";

const Success = (props: {
  mutationResponse: RegisterMutation["registerStudent"] | undefined;
}) => {
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
        Aqui tienes el link para contactar a tu maestro:
        <p>
          <a href={schedule.entry}>{schedule.entry}</a>
        </p>
      </div>
    </div>
  );
};

export default Success;
