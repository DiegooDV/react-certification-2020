import React from 'react';
import { render, screen} from '@testing-library/react';
import App from './App.component';

test('load logo name correctly in App component', () => {
    render(<App />);
  const element = screen.getByText(/MyTube/i);
  expect(element).toBeInTheDocument();
});
