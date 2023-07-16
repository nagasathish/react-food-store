import { render } from "@testing-library/react";
import Header from "../Header";
import store from "../../utils/store";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";

test("Logo should be load on rendering", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo");
  //Check if logo is loaded
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Cart should have 0 items on render", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 0");
});

test("should check online status", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId("onlinestatus");
  // console.log(onlineStatus);
  expect(onlineStatus.innerHTML).toBe("<b>Online</b>");
});
