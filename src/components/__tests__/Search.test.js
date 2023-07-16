import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import Body from "../Body";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: Promise.resolve(RESTAURANT_DATA),
  });
});

test("Search results on home page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  console.log(body);
});
