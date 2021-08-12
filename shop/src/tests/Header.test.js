
import { render, screen } from '@testing-library/react';
import Header from './components/Header';

test('renders a  Home react link', () => {
  render(<Header />);
  const homeElement = screen.getByText(/Home/i);
  expect(homeElement).toBeInTheDocument();
});
test('renders a  Products react link', () => {
  render(<Header />);
  const prodsElement = screen.getByText(/Products/i);
  expect(prodsElement).toBeInTheDocument();
});

test('renders a  Add Product react link', () => {
  render(<Header />);
  const AddProdsElement = screen.getByText(/Add Product/i);
  expect(AddProdsElement).toBeInTheDocument();
});

test('renders a  Add Schedule react link', () => {
  render(<Header />);
  const addSchedsElement = screen.getByText(/Add Schedule/i);
  expect(addSchedsElement).toBeInTheDocument();
});
