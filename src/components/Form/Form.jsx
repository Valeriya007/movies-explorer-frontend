import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './Form.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ErrorContext from '../../contexts/ErrorContext';
import SendContext from '../../contexts/SendContext';

export default function Form({
  setIsError,
  values,
  setSuccessful,
  setIsEdit,
  isValid,
  name,
  onSubmit,
  children,
  isEdit,
  isEditProfile
}) {
  const { pathname } = useLocation();

  const currentUser = useContext(CurrentUserContext);
  const isError = useContext(ErrorContext);
  const isSend = useContext(SendContext);

  useEffect(() => {
    setIsError(false)
  }, [setIsError, values]);

  useEffect(() => {
    if (pathname === '/profile') {
      setSuccessful(false)
      setIsEdit(false)
    }
  }, [setSuccessful, setIsEdit, pathname]);

  return (
    <form name={name} onSubmit={onSubmit} noValidate >
      {children}
      {name === 'signin' ?
        <>
          <span
            className={`auth__error-req ${isError && 'auth__error-req_active'}`}>
            {'Произошла ошибка'}
          </span>
          <button
            type="submit"
            className={`auth__save-btn ${isValid && !isError ? '' : 'auth__save-btn_disabled'}`}
            disabled={!isValid || isSend || isError}>
            {'Войти'}
          </button>
        </>
        :
        name === 'signup' ?
          <>
            <span
              className={`auth__error-req auth__error-req_type_register
              ${isError && 'auth__error-req_active'}`}>
              {'При регистрации произошла ошибка'}
            </span>
            <button
              type="submit"
              className={`auth__save-btn
              ${isValid && !isError ? '' : 'auth__save-btn_disabled'}`}
              disabled={!isValid || isSend || isError}>
              {'Зарегистрироваться'}
            </button>
          </>
          :
          !isEdit ?
            <>
              <span
                className={`profile__error-req ${isError ? 'profile__error-req_type_fail'
                  : isEditProfile && 'profile__error-request_type_ok'}`}>
                {isError ? 'При обновлении профиля произошла ошибка' : 'Профиль обновлен'}
              </span>
              <button
                type="button"
                className={`profile__save-btn`}
                onClick={() => {
                  setIsEdit(true)
                  setSuccessful(false)
                }}>
                {'Редактировать'}
              </button>
            </>
            :
            <>
              <span className={`profile__error-req ${isError ? 'profile__error-req_type_fail'
                : isEditProfile && 'profile__error-request_type_ok'}`}>
                {isError ? 'При обновлении профиля произошла ошибка' : 'Профиль обновлен'}
              </span>
              <button
                type="submit"
                className={`auth__save-btn
                ${(values.username === currentUser.name && values.email === currentUser.email)
                  || !isValid || isError ? 'auth__save-btn_disabled' : ''}`}
                disabled={!isValid || isSend || isError}>
                {'Сохранить'}
              </button>
            </>
      }
    </form>
  )
}
