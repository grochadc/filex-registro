import { renderWithGql, screen, act } from "../testutils";
import Selection from "./Selection";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

test("Selection", async () => {
  const history = createMemoryHistory();
  history.push("/selection/1234567890");
  const { asFragment } = renderWithGql(
    <Router history={history}>
      <Route path="/selection/:code">
        <Selection setMutationResponse={console.log} />
      </Route>
    </Router>
  );
  await act(async () => await new Promise((resolve) => setTimeout(resolve, 0)));

  expect(asFragment()).toMatchSnapshot();
});
