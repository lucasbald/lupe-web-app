import React from 'react';
import { render } from '@testing-library/react';
import GetHero from './GetHero';

test('renders learn react link', () => {
  const { getByText } = render(<GetHero />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
