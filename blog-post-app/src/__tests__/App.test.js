import App from '../App';
import { render } from '@testing-library/react';
import React from 'react';
describe('App Snapshot', () => {
  it('should render the App component', () => {
    const {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
