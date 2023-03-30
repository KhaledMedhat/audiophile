import { useState } from "react"

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)
    const [isEmpty , setIsEmpty] = useState(false)
    const validValue = validateValue(enteredValue)
    const hasErrorTouch = !validValue && isTouched
    const hasSubmitError = isEmpty && !validValue
    const hasError = hasSubmitError || hasErrorTouch
    
    

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value)
    }

    const submitHandler = () => {
        setIsEmpty(true)
    }

    const inputBlurHandler = () => {
        setIsTouched(true)
    }

    return {
        value: enteredValue,
        isValid: validValue,
        hasErrorTouch,
        valueChangeHandler,
        inputBlurHandler,
        submitHandler,
        hasError
    }
}

export default useInput