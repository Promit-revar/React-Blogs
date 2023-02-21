import FooterComponent from '../components/FooterComponent';
import { render } from '@testing-library/react';
import React from 'react';
describe('Footer Snapshot', () => {
  it('should render the Footer component', () => {
    const {asFragment} = render(<FooterComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
