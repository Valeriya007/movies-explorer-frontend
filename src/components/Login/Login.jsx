import { Link } from 'react-router-dom';
import './Login.css';
import Form from '../Form/Form.jsx';
import Input from '../Input/Input.jsx';
import UseFormValidation from '../../utils/useFormValidation.jsx';
import { RegexEmail } from '../../utils/constants.js';


export default function Login({
  name,
  onLogin,
  setIsError
}) {
  const { values, errors, isValid, isInputValid, handleChange } = UseFormValidation();

  function onSubmit(evt) {
    evt.preventDefault()
    onLogin(values.email, values.password)
  }

  return (
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
          required
          pattern={RegexEmail}
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
          required
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
  )
}
