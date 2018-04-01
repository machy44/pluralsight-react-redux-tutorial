import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { loadCourses } from "./actions/courseActions";
import CoursesPage from "./components/coursesPage";

const store = configureStore();
store.dispatch(loadCourses());

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
