import React from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history'
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Header from "./components/common/header";
import CoursesPage from "./components/course/coursesPage";
import ManageCoursePage from "./components/course/manageCoursePage";
import { loadCourses } from "./actions/courseActions";
import { loadAuthors } from "./actions/authorActions";
import {connect } from "react-redux";
import { withRouter } from "react-router-dom";

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
const history = createBrowserHistory()

const App = ({loading}) => (
  <div>
    <Header 
      loading={loading}
    />
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

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired
}

const AppConnected = withRouter(connect(mapStateToProps)(App));

render(
  <Provider store={store}>
    <Router history={history}>
      <AppConnected />
    </Router>
  </Provider>,
  document.getElementById("root")
);
