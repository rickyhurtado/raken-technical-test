import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../Components/Button';

it('Button.SignOut component should render', () => {
  const component = renderer.create(<Button.SignOut />);

  expect(component.toJSON()).toMatchSnapshot();
});
