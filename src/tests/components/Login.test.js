import React from 'react';
import user from '@testing-library/user-event';
import {
  render, cleanup, fireEvent, screen
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../../components/Login';


describe('Login container:', () => {
  afterEach(cleanup);

  it('Should render Login component correctly', () => {
    render(<Login />);

    expect(screen.getByAltText(/logo/)).toBeInTheDocument();
    expect(screen.getByText(/Bienvenido a/)).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'username' })).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Ingresa tu contraseña')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'toggle password visibility' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Inicia sesión' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '¿Necesitas ayuda?' })).toBeInTheDocument();
  });

  it('Should show window help when helps button is clicked', () => {
    render(<Login />);

    const buttonHelp = screen.getByRole('button', { name: '¿Necesitas ayuda?' });
    fireEvent.click(buttonHelp);
    expect(screen.getByText('#testing')).toBeInTheDocument();
    const buttonBack = screen.getByRole('button', { name: 'Volver al ingreso' });
    fireEvent.click(buttonBack);
    expect(screen.getByRole('button', { name: '¿Necesitas ayuda?' })).toBeInTheDocument();
  });

  it('Should change type password to type text in textfield password', () => {
    render(<Login />);

    const buttonShowPassword = screen.getByRole('button', { name: 'toggle password visibility' });
    expect(screen.getByRole('img', { name: 'eye-off' })).toBeInTheDocument();
    fireEvent.click(buttonShowPassword);
    expect(screen.getByRole('img', { name: 'eye-on' })).toBeInTheDocument();
  });

  it('Should wrote a value on form username field', async () => {
    render(<Login />);

    const userfield = screen.getByRole('textbox', { name: 'username' });
    await user.type(userfield, 'user');
    expect(screen.getByRole('img', { name: 'success' })).toBeInTheDocument();
  });

  it('Should show errors message on event Blur on form fields', async () => {
    render(<Login />);

    const userfield = screen.getByRole('textbox', { name: 'username' });
    userfield.focus();
    fireEvent.blur(userfield);
    await user.tab();
    await user.tab();

    expect(screen.getAllByRole('img', { name: 'error' })[0]).toBeInTheDocument();
    expect(screen.getByText('Por favor ingresa tu usuario')).toBeInTheDocument();
    expect(screen.getByText('Por favor ingresa tu contraseña')).toBeInTheDocument();
  });

  it.skip('Should trigger submit form', async () => {
    const initialState = {
      login: {
        error: 'invalid user'
      }
    };
    const setLoading = jest.fn();
    render(
      <Store.Provider value={{ setLoading }}>
        <Login />
      </Store.Provider>,
      { initialState }
    );

    const userfield = screen.getByRole('textbox', { name: 'username' });
    userfield.focus();
    await user.type(userfield, 'miusuario');
    await user.type(screen.getByPlaceholderText('Ingresa tu contraseña'), 'mipassword');
    const submitButtom = screen.getByRole('button', { name: 'Inicia sesión' });
    fireEvent.click(submitButtom);
  });
});
