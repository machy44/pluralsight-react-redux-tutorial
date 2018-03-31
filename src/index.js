import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import CoursesPage from "./components/coursesPage";

const store = configureStore();
const App = () => (
  <div>
    <CoursesPage />
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
