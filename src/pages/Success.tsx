import { MutationResponse } from "../types";

const Success = (props: { mutationResponse: MutationResponse | undefined }) => {
  return (
    <div>
      <p>
        <strong>Felicidades {props.mutationResponse.nombre}!</strong>
      </p>
      <p>
        Ya estas inscrito en el grupo {props.mutationResponse.schedule.group}
      </p>
      <p>
        La clase es con el teacher {props.mutationResponse.schedule.teacher}.
      </p>
    </div>
  );
};

export default Success;
