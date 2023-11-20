import { useContext } from 'react';
import './Input.css';
import SendContext from '../../contexts/SendContext';


export default function Input({
  selectname,
  title,
  isInputValid,
  name,
  type,
  placeholder,
  value,
  minLength,
  pattern,
  onChange,
  error,
  isEdit
}) {
  const isSend = useContext(SendContext);

  return (
    <>
      {selectname !== 'profile' ?
        <label className='auth__label'>
          <span className='auth__subtitle'>{title}</span>
          <input
            className={`auth__input
            ${isInputValid === undefined || isInputValid ? '' : 'auth__input_invaid'}`}
            required
            name={name}
            type={type}
            placeholder={placeholder}
            value={value || ''}
            minLength={minLength || ''}
            pattern={pattern}
            onChange={onChange}
            disabled={isSend}
            autoComplete='on'
          />
          <span className='auth__error'>{error}</span>
        </label>
        :
        <>
          <label className='profile__label'>
            <span className='profile__subtitle'>{title}</span>
            <input
              className={`profile__input
              ${isInputValid === undefined || isInputValid ? '' : 'profile__input_invaid'}`}
              required
              name={name}
              type={type}
              value={value || ''}
              minLength={minLength || ''}
              pattern={pattern}
              onChange={onChange}
              disabled={isSend || !isEdit}
            />
          </label>
          <span className='profile__error'>{error}</span>
        </>
      }
    </>
  )
}
