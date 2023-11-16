import { Link } from 'react-router-dom';
import './Login.css';
import Form from '../Form/Form';
import Input from '../Input/Input';
import useFormValidation from '../../utils/useFormValidation';
import { EmailRegex } from '../../utils/constants';

export default function Login({ name, onLogin, setIsError }) {
  const { values, errors, isInputValid, isValid, handleChange } = useFormValidation();

  function onSubmit(evt) {
    evt.preventDefault()
    onLogin(values.email, values.password)
  }

  return (
    <main className="main">
      <section className="login">
      <div className="login__logo">
        <Link to={'/'} className="login__logo-link"></Link>
      </div>
      <h2 className="login__title">Рады видеть!</h2>
      <Form name={name} onSubmit={onSubmit} isValid={isValid} setIsError={setIsError}>
        <Input
          title='E-mail'
          name='email'
          type='email'
          placeholder='Введите почту'
          pattern={EmailRegex}
          value={values.email}
          isInputValid={isInputValid.email}
          error={errors.email}
          onChange={(evt) => {
            handleChange(evt)
            setIsError(false)
          }}
        />
        <Input
          title='Пароль'
          name='password'
          type='password'
          placeholder='Введите пароль'
          minLength='3'
          value={values.password}
          isInputValid={isInputValid.password}
          error={errors.password}
          onChange={(evt) => {
            handleChange(evt)
            setIsError(false)
          }}
        />
			</Form>
			<p className="login__text">
				Ещё не зарегистрированы?
				<Link to={"/signup"} className="login__text-link">
				  Регистрация
				</Link>
			</p>
    </section>
    </main>

  )
}
