import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as courseActions from "../../actions/courseActions";
import CourseList from "./courseList";

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }
  // courseRow(course, index) {
  //   return <div key={index}>{course.title}</div>;
  // }
  redirectToAddCoursePage() {
    const { history } = this.props;
    history.push('/course');
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
        />
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses // courses from combineReducers -> rootReducer
  };
}

//we dispatch action creator -> dispatch trigger our flow through redux
function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    //all actions from courseActions file
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect( mapStateToProps, mapDispatchToProps)(CoursesPage);
