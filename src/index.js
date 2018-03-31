import React from "react";
import { render } from "react-dom";
import CoursesPage from "./components/coursesPage";

const App = () => (
  <div>
    <CoursesPage />
  </div>
);

render(<App />, document.getElementById("root"));
