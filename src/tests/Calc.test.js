import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calc from '../components/Calc';

describe('calc tests', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<Calc />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('render test', () => {
    const component = render(<Calc />);
    console.log(component);
  });
});
