
import { render, screen } from '@testing-library/react';
import AddProduct from './components/AddProduct';

test('renders a  Add product button', () => {
  render(<AddProduct />);
  const addButton = screen.getByText(/Add Product/i);
  expect(addButton).toBeInTheDocument();
});
