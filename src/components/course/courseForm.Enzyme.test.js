const expect = require('expect');
const React = require('react');
const { mount, shallow} = require('enzyme')
const CourseForm = require('./courseForm');


function setup() {
  const props = {
    courses: {}, saving: false, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props}/>)
}


it('renders form and h1', () => {
  const wrapper = setup(false);
  expect(wrapper.find('form').length).toBe(1);
});
