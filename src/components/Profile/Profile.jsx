import './Profile.css';
import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { RegexEmail } from "../../utils/constants";
import useFormValidation from '../../utils/useFormValidation';
import Form from '../Form/Form';
import Input from '../Input/Input';

export default function Profile({
  name,
  logOut,
  updateUserData,
  isEditProfile,
  setSuccessful,
  setIsError,
  setIsEdit,
  isEdit
}) {
  const { values, errors, isInputValid, isValid, handleChange, reset } = useFormValidation();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    reset({ username: currentUser.name, email: currentUser.email })
  }, [reset, currentUser, isEdit])

  function onSubmit(evt) {
    evt.preventDefault()
    updateUserData(values.username, values.email)
  }

  return (
      <section className="profile page__profile">
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <Form
        name={name}
        values={values}
        isValid={isValid}
        onSubmit={onSubmit}
        setSuccessful={setSuccessful}
        isEditProfile={isEditProfile}
        setIsError={setIsError}
        setIsEdit={setIsEdit}
        isEdit={isEdit}
      >
        <Input
          selectname={name}
          name='username'
          type='text'
          title='Имя'
          minLength='3'
          required
          value={values.username}
          isInputValid={isInputValid.username}
          error={errors.username}
          onChange={handleChange}
          isEdit={isEdit}
        />
        <Input
          selectname={name}
          name='email'
          type='email'
          title='E-mail'
          required
          value={values.email}
          isInputValid={isInputValid.email}
          error={errors.email}
          onChange={handleChange}
          pattern={RegexEmail}
          isEdit={isEdit}
        />
      </Form>
			  <Link to={"/"} className="profile__link" onClick={logOut}>
				Выйти из аккаунта
			  </Link>
		  </section>
  )
}
