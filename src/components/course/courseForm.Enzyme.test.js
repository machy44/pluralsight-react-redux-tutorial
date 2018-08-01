import React from 'react';
import expect from 'expect';
import { mount, shallow, configure } from 'enzyme';
import CourseForm from './courseForm';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

function setup() {
  const props = {
    course: {}, saving: false, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props}/>)
}


it('renders form and h1', () => {
  const wrapper = setup(false);
  expect(wrapper.find('form').length).toBe(1);
});
