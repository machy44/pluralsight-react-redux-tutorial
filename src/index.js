import React from "react";
import { render } from "react-dom";
import { BrowserRouter, browserHistory, Switch, Route } from "react-router-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Header from "./components/common/header";
import CoursesPage from "./components/course/coursesPage";
import ManageCoursePage from "./components/course/manageCoursePage";
import { loadCourses } from "./actions/courseActions";
import { loadAuthors } from "./actions/authorActions";

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

const App = () => (
  <div>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={CoursesPage} />
        <Route exact path="/home" component={CoursesPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/course" component={ManageCoursePage} />
        <Route exact path="/course/:id" component={ManageCoursePage} />
      </Switch>
    </main>
  </div>
);

render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
