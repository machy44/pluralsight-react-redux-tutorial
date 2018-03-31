import React, { Component } from "react";

export default class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const { course } = this.state;
    course.title = event.target.value;
    console.log(course);
    this.setState({
      course: course
    });
  }

  onClickSave() {
    const { title } = this.state.course;
    alert(`Saving ${title}`);
  }

  render() {
    const { course } = this.state;
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Courses</h2>
        <input type="text" onChange={this.onTitleChange} value={course.title} />
        <input type="submit" value="save" onClick={this.onClickSave} />
      </div>
    );
  }
}
