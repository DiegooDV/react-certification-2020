import React from 'react';
import { render, screen} from '@testing-library/react';
import Header from './Header';

test('load logo name correctly in Header component', () => {
    render(<Header />);
  const element = screen.getByText(/MyTube/i);
  expect(element).toBeInTheDocument();
});
