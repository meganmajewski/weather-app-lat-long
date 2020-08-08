import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test("renders home page", () => {
  const { getByText } = render(<App />);
  const me = getByText(/Megan Majewski/i);
  expect(me).toBeInTheDocument();
});

test("the app renders and navigation is possible", () => {
  const history = createMemoryHistory();
  const { container, getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  const me = getByText(/Megan Majewski/i);
  expect(me).toBeInTheDocument();

  fireEvent.click(getByText(/current weather/i));

  // check that the content changed to the new page
  expect(container.innerHTML).toMatch("Today's weather is:");
  fireEvent.click(getByText(/five day forecast/i));

  // check that the content changed to the new page
  expect(container.innerHTML).toMatch("The week ahead looks like:");
});
