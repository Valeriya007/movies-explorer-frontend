import { Link } from 'react-router-dom';
import './Register.css';
import Form from '../Form/Form';
import Input from '../Input/Input';
import UseFormValidation from '../../utils/useFormValidation';
import { RegexEmail } from '../../utils/constants';


export default function Register({
  name,
  onRegister,
  setIsError
}) {

  const { values, errors, isInputValid, isValid, handleChange } = UseFormValidation();

  function onSubmit(evt) {
    evt.preventDefault()
    onRegister(values.username, values.email, values.password)
  }

  return (
    <section className="register">
      <div className="register__logo">
        <Link to={'/'} className="register__logo-link"></Link>
      </div>
      <h2 className="register__title">Добро пожаловать!</h2>
      <Form
        name={name} onSubmit={onSubmit} isValid={isValid} setIsError={setIsError}>
        <Input
          title='Имя'
          name='username'
          type='text'
          placeholder='Введите имя'
          minLength='2'
          required
          value={values.username}
          isInputValid={isInputValid.username}
          error={errors.username}
          onChange={(evt) => {
            handleChange(evt)
            setIsError(false)
          }}
        />
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
			<p className="register__text">
				Уже зарегистрированы?
				<Link to={"/signin"} className="register__text-link">
				  Войти
				</Link>
			</p>
    </section>
  )
}
