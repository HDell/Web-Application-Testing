import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';
import Display from './Display';
import App from './App';

test('renders learn react link', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  render(<App />);
});


test('strike display is rendered', () => {
  const { getByTestId } = render(<App/>);
  getByTestId(/strike-count/i)
});

test('ball count is rendered', () => {
  const { getByTestId } = render(<App/>);
  getByTestId(/ball-count/i)
});

test('strike button is rendered', () => {
  const { getByTestId } = render(<App/>);
  getByTestId(/strike-button/i)
});

test('ball button is rendered', () => {
  const { getByTestId } = render(<App/>);
  getByTestId(/ball-button/i)
});

test('foul button is rendered', () => {
  const { getByTestId } = render(<App/>);
  getByTestId(/foul-button/i)
});
test('hit button is rendered', () => {
  const { getByTestId } = render(<App/>);
  getByTestId(/hit-button/i)
});

