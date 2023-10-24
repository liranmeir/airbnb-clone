// import { render, fireEvent, waitFor } from '@testing-library/react';
// import axios from 'axios';
// import RegisterPage from '../src/pages/RegisterPage';

// jest.mock('axios');

// describe('RegisterPage', () => {
//   it('renders the component', () => {
//     const { getByText, getByPlaceholderText } = render(<RegisterPage />);
//     expect(getByText('Register')).toBeInTheDocument();
//     expect(getByPlaceholderText('John Doe')).toBeInTheDocument();
//     expect(getByPlaceholderText('your@email.com')).toBeInTheDocument();
//     expect(getByPlaceholderText('password')).toBeInTheDocument();
//     expect(getByText('Register')).toBeInTheDocument();
//     expect(getByText('Already a member?')).toBeInTheDocument();
//     expect(getByText('Login')).toBeInTheDocument();
//   });

//   it('submits the form', async () => {
//     const { getByPlaceholderText, getByText } = render(<RegisterPage />);
//     const nameInput = getByPlaceholderText('John Doe');
//     const emailInput = getByPlaceholderText('your@email.com');
//     const passwordInput = getByPlaceholderText('password');
//     const registerButton = getByText('Register');

//     fireEvent.change(nameInput, { target: { value: 'John Doe' } });
//     fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
//     fireEvent.change(passwordInput, { target: { value: 'password123' } });
//     fireEvent.click(registerButton);

//     await waitFor(() => {
//       expect(axios.post).toHaveBeenCalledWith('/register', {
//         name: 'John Doe',
//         email: 'john.doe@example.com',
//         password: 'password123',
//       });
//       expect(alert).toHaveBeenCalledWith(
//         'User registered successfully now you can login'
//       );
//     });
//   });
// });
