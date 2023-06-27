import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux";

test("renders menu items", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const homeMenuElement = screen.getByText(/Home/i);
  expect(homeMenuElement).toBeInTheDocument();
  const tipsMenuElement = screen.getByText(/Tips/i);
  expect(tipsMenuElement).toBeInTheDocument();
});
