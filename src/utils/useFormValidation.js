import { useCallback, useState } from "react";

export default function useFormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isInputValid, setIsInputValid] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(evt) {
    const name = evt.target.name
    const value = evt.target.value
    const validationMessage = evt.target.validationMessage
    const valid = evt.target.validity.valid
    const form = evt.target.form
    setValues((Values) => {
      return { ...Values, [name]: value }
    })
    setErrors(Errors => {
      return { ...Errors, [name]: validationMessage }
    })
    setIsInputValid((Valid) => {
      return { ...Valid, [name]: valid }
    })
    setIsValid(form.checkValidity())
  }

  const setValue = useCallback((name, value) => {
    setValues((Values) => {
      return { ...Values, [name]: value }
    })
  }, [])

  const reset = useCallback((data = {}) => {
    setValues(data)
    setErrors({})
    setIsInputValid({})
    setIsValid(false)
  }, [])

  return { values, errors, isInputValid, isValid, handleChange, setValue, reset }
}
