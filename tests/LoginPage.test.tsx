// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import axios from 'axios';
// import LoginPage from './LoginPage';

// jest.mock('axios');

// describe('LoginPage', () => {
//   it('renders the component', () => {
//     const { getByText, getByPlaceholderText } = render(<LoginPage />);
//     expect(getByText('Login')).toBeInTheDocument();
//     expect(getByPlaceholderText('your@email.com')).toBeInTheDocument();
//     expect(getByPlaceholderText('password')).toBeInTheDocument();
//     expect(getByText('Login')).toBeInTheDocument();
//     expect(getByText("Don't have an account yet?")).toBeInTheDocument();
//     expect(getByText('Register')).toBeInTheDocument();
//   });

//   it('submits the form', async () => {
//     const { getByPlaceholderText, getByText } = render(<LoginPage />);
//     const emailInput = getByPlaceholderText('your@email.com');
//     const passwordInput = getByPlaceholderText('password');
//     const loginButton = getByText('Login');

//     fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
//     fireEvent.change(passwordInput, { target: { value: 'password123' } });
//     fireEvent.click(loginButton);

//     await waitFor(() => {
//       expect(axios.post).toHaveBeenCalledWith('/login', {
//         email: 'john.doe@example.com',
//         password: 'password123',
//       });
//       expect(alert).toHaveBeenCalledWith('User logged in successfully');
//     });
//   });

//   it('redirects after successful login', async () => {
//     axios.post.mockResolvedValueOnce({});
//     const { getByPlaceholderText, getByText, getByRole } = render(<LoginPage />);
//     const emailInput = getByPlaceholderText('your@email.com');
//     const passwordInput = getByPlaceholderText('password');
//     const loginButton = getByText('Login');

//     fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
//     fireEvent.change(passwordInput, { target: { value: 'password123' } });
//     fireEvent.click(loginButton);

//     await waitFor(() => {
//       expect(getByRole('heading')).toHaveTextContent('Redirecting...');
//     });
//   });

//   it('shows an error message on failed login', async () => {
//     axios.post.mockRejectedValueOnce({});
//     const { getByPlaceholderText, getByText } = render(<LoginPage />);
//     const emailInput = getByPlaceholderText('your@email.com');
//     const passwordInput = getByPlaceholderText('password');
//     const loginButton = getByText('Login');

//     fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
//     fireEvent.change(passwordInput, { target: { value: 'password123' } });
//     fireEvent.click(loginButton);

//     await waitFor(() => {
//       expect(alert).toHaveBeenCalledWith('Login failed please try again later');
//     });
//   });
// });
