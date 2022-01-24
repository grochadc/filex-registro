//import { RegisterMutation } from "../__generated__/grapqhl-types";
import { MutationResponse } from "../types";

const response = {
  data: {
    registerStudent: {
      nombre: "RegisterResponse-nombre",
      schedule: {
        group: "Schedule-group",
        teacher: "Schedule-teacher",
        entry: "Schedule-entry",
        __typename: "Schedule",
      },
      __typename: "RegisterResponse",
    },
  },
};
const Success = (props: { mutationResponse: MutationResponse | undefined }) => {
  return (
    <div>
      <p>
        <strong>Felicidades {props.mutationResponse?.nombre}!</strong>
      </p>
      <p>
        Ya estas inscrito en el grupo {props.mutationResponse?.schedule.group}{" "}
        con el teacher {props.mutationResponse?.schedule.teacher}.
      </p>
      <div>
        Aqui tienes el link para contactar a tu maestro:
        <p>
          <a href={props.mutationResponse?.schedule.entry}>
            {props.mutationResponse?.schedule.entry}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Success;
