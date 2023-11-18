import { useCallback, useState } from "react";

export default function UseFormValidation() {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [isValid, setIsValid] = useState(false)
    const [isInputValid, setIsInputValid] = useState({})

    function handleChange(evt) {
        const name = evt.target.name
        const value = evt.target.value
        const validationMessage = evt.target.validationMessage
        const valid = evt.target.validity.valid
        const form = evt.target.form

        setValues((Values) => {
            return { ...Values, [name]: value }
        })

        setErrors((Errors) => {
            return { ...Errors, [name]: validationMessage }
        })

        setIsInputValid((IsInputValid) => {
            return { ...IsInputValid, [name]: valid }
        })

        setIsValid(form.checkValidity())
    }

    const reset = useCallback((data = {}) => {
    setValues(data)
    setErrors({})
    setIsInputValid({})
    setIsValid(false)
  }, [])


    const setValue = useCallback((name, value) => {
        setValues((Values) => {
            return { ...Values, [name]: value }
        })
    }, [])

    return { values, errors, isValid, isInputValid, handleChange, reset, setValue }
}
