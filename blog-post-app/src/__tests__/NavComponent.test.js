import NavComponent from '../components/NavComponent';
import { render } from '@testing-library/react';
import React from 'react';
describe('Nav Component Snapshot', () => {
  it('should render the Nav component', () => {
    const {asFragment} = render(<NavComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
