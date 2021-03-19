import React from 'react';
import { render, screen} from '@testing-library/react';
import { items } from '../../youtube-videos-mock.json';
import HomePage from './Home.page';

test('load mock data correctly', () => {
    expect(items.length).toBeGreaterThan(1)
  });

test('load logo name correctly in Home Page', () => {
    render(<HomePage />);
  const element = screen.getByText(/MyTube/i);
  expect(element).toBeInTheDocument();
});