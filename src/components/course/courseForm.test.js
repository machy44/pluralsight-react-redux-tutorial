const expect = require('expect');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const CourseForm = require('./courseForm');


function setup() {
  let props = {
    courses: {}, saving: false, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm  { ...props }/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('CourseForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const { output } = setup();
    expect(output.type).toBe('form');
  });
});