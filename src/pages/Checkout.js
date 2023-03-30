import { useState, useContext } from "react"
import classes from './Checkout.module.css'
import Summary from '../components/Summary/Summary'
import Cash from "../components/PaymentMethods/Cash"
import EMoney from "../components/PaymentMethods/EMoney"
import useInput from '../hook/use-input'
import { useNavigate } from "react-router-dom"
import cartContext from "../store/cart-context"
import Footer from '../components/Footer/Footer'


const regexStr = /^[a-z A-z]+$/
const regexNum = /^[0-9]+$/
const regexEmail = /(.+)@(.+){2,}\.(.+){2,}/
const isNotEmpty = (value) => value.trim() !== '' 
const isString = (value) => value.trim() !== ''  && regexStr.test(value)
const isNumber = (value) => value.trim() !== ''  && regexNum.test(value)
const isEmail = (value) =>  value.trim() !== ''  && regexEmail.test(value)

const Checkout = (props) => {
    const [radioActive, setRadioActive] = useState('e-Money')
    const [isActive, setIsActive] = useState(true)
    const cartCtx = useContext(cartContext)
    const navigate = useNavigate()
    const hasItems = cartCtx.items.length === 0

    const {
        value: nameValue,
        isValid: nameIsValid,
        submitHandler: nameSubmitHandler,
        hasError : nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler
    } = useInput(isString)

    const {
        value: emailValue,
        isValid: emailIsValid,
        submitHandler: emailSubmitHandler,
        hasError : emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler
    } = useInput(isEmail)

    const {
        value: phoneValue,
        isValid: phoneIsValid,
        submitHandler: phoneSubmitHandler,
        hasError : phoneHasError,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler
    } = useInput(isNumber)

    const {
        value: addressValue,
        isValid: addressIsValid,
        submitHandler: addressSubmitHandler,
        hasError : addressHasError,
        valueChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler
    } =  useInput(isNotEmpty)

    const {
        value: zipValue,
        isValid: zipIsValid,
        submitHandler: zipSubmitHandler,
        hasError : zipHasError,
        valueChangeHandler: zipChangeHandler,
        inputBlurHandler: zipBlurHandler
    }  = useInput(isNumber)

    const {
        value: countryValue,
        isValid: countryIsValid,
        submitHandler: countrySubmitHandler,
        hasError : countryHasError,
        valueChangeHandler: countryChangeHandler,
        inputBlurHandler: countryBlurHandler
    } = useInput(isString)

    const { 
        value: cardNumberValue,
        isValid: cardNumberIsValid,
        submitHandler: cardNumberSubmitHandler,
        hasError : cardNumberHasError,
        valueChangeHandler: cardNumberChangeHandler,
        inputBlurHandler: cardNumberBlurHandler
    }  = useInput(isNumber)

    const {
        value: cardPINValue,
        isValid: cardPINIsValid,
        submitHandler: cardPINSubmitHandler,
        hasError : cardPINHasError,
        valueChangeHandler: cardPINChangeHandler,
        inputBlurHandler: cardPINBlurHandler
    } = useInput(isNumber)

    const {
        value: cityValue,
        isValid: cityIsValid,
        submitHandler: citySubmitHandler,
        hasError : cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler
    } = useInput(isString)



    let formIsValid = false
    const formProps = nameIsValid && emailIsValid && phoneIsValid && addressIsValid && zipIsValid && cityIsValid && countryIsValid && !isActive
    const paymethodsProps = nameIsValid && emailIsValid && phoneIsValid && addressIsValid && zipIsValid && cityIsValid && countryIsValid && isActive &&  cardNumberIsValid && cardPINIsValid 
    if(paymethodsProps){
        formIsValid = true
    }
    if(formProps){
        formIsValid = true
    }

  
    const submitHandler = (e) => {
       
            e.preventDefault()
            if(!formIsValid){
                if(!nameIsValid){
                   nameSubmitHandler(false)
                }
                if(!emailIsValid){
                    emailSubmitHandler(false)
                }
                if(!addressIsValid){
                    addressSubmitHandler(false)
                }
                if(!phoneIsValid){
                    phoneSubmitHandler(false)
                }
                if(!zipIsValid){
                    zipSubmitHandler(false)
                }
                if(!cityIsValid){
                    citySubmitHandler(false)
                }
                if(!countryIsValid){
                    countrySubmitHandler(false)
                }
                if(!cardNumberIsValid){
                    cardNumberSubmitHandler(false)
                }
                if(!cardPINIsValid){
                    cardPINSubmitHandler(false)
                }
    
                return
            }
            props.showConfirmation()
        
    }
    const nameClass = nameHasError ? `${classes['form-control']} ${classes.invalid}` : classes['form-control']
    const emailClass = emailHasError ? `${classes['form-control']} ${classes.invalid}` : classes['form-control']
    const phoneClass = phoneHasError ? `${classes['form-control']} ${classes.invalid}` : classes['form-control']
    const addressClass = addressHasError ? `${classes['form-control']} ${classes.invalid}` : classes['form-control']
    const zipClass = zipHasError ? `${classes['form-control']} ${classes.invalid}` : classes['form-control']
    const cityClass = cityHasError ? `${classes['form-control']} ${classes.invalid}` : classes['form-control']
    const countryClass = countryHasError ? `${classes['form-control']} ${classes.invalid}` : classes['form-control']
    const cardPINClass = cardPINHasError ? `${classes['form-control']} ${classes.invalid}` : classes['form-control']
    const cardNumberClass = cardNumberHasError ? `${classes['form-control']} ${classes.invalid}` : classes['form-control']
    const buttonClass = hasItems ? classes['disabled-button'] : classes['form-btn']
    const eMoneyClass = radioActive !== 'e-Money' ? classes['e-money-activate'] : classes['e-money']
    const cashClass = radioActive !== 'Cash' ? classes['cash-activate'] : classes['cash']

    const isRadioSelected = (value) => {
        return radioActive === value
    }
    const RadioActiveHandler = (e) => {
        setRadioActive(e.target.value)
        setIsActive(!isActive)

    }
    const previousPage = () => {
        navigate(-1)
    }
    const formId = 'form'

    return (
        <>
        <div className={classes['checkout-container']}>
        <button className={classes['go-back-btn']} onClick={previousPage}>Go back</button>
        <div className={classes['checkout-grid']}>
        
        <form id={formId} className={classes['checkout-form']} onSubmit={submitHandler}>
            <h1 className={classes['form-title']}>checkout</h1>
                <p className={classes['form-section-title']}>billing details</p>
                <div className={`${classes['form-section']} ${classes['billing-section']}`}>
                <div className={nameClass}>
                <div className={classes['input-header']}>
                <label htmlFor="Name">Name</label>
                {nameHasError  && <p className={classes['error-text']}>Field cannot be empty</p>}
                </div>
                <input  value={nameValue} onChange={nameChangeHandler} onBlur={nameBlurHandler} type="text" name="name" id="name" placeholder="Alexei Ward" />
                </div>

                
                <div className={emailClass}>
                <div className={classes['input-header']}>
                <label htmlFor="email">Email Address</label>
                {emailHasError && <p className={classes['error-text']}>Field cannot be empty</p>}
                </div>
                <input value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler} type="email" name="email" id="email" placeholder="alexei@mail.com" />
                </div>

                <div className={phoneClass}>
                <div className={classes['input-header']}>
                <label htmlFor="Phone-Number">Phone Number</label>
                {phoneHasError && <p className={classes['error-text']}>Field cannot be empty</p>}
                </div>
                <input value={phoneValue} onChange={phoneChangeHandler} onBlur={phoneBlurHandler} type="text" name="phone" id="phone" placeholder="+1 202-555-0136" />
                </div>

            </div>

                <p className={classes['form-section-title']}>shipping info</p>
                <div className={classes['form-section']}>
                <div className={addressClass}>
                    <div className={classes['input-header']}>
                        <label htmlFor="Address" >Your Address</label>
                        {addressHasError && <p className={classes['error-text']}>Field cannot be empty</p>}
                    </div>
                <input value={addressValue} onChange={addressChangeHandler} onBlur={addressBlurHandler} type="text" name="address" id="address" placeholder="1137 Williams Avenue" />
                </div>
            <div className={classes['shipping-section']}>
                <div className={zipClass}>
                    <div className={classes['input-header']}>
                        <label htmlFor="zip">ZIP Code</label>
                        {zipHasError && <p className={classes['error-text']}>Field cannot be empty</p>}  
                    </div>
                <input value={zipValue} onChange={zipChangeHandler} onBlur={zipBlurHandler} type="text" name="zip" id="zip" placeholder="10001" />
                </div>
                <div className={cityClass}>
                    <div className={classes['input-header']}>
                        <label htmlFor="zip">City</label>
                        {cityHasError && <p className={classes['error-text']}>Field cannot be empty</p>}  
                    </div>
                <input value={cityValue} onChange={cityChangeHandler} onBlur={cityBlurHandler} type="text" name="city" id="city" placeholder="New York" />
                </div>

                <div className={countryClass}>
                    <div className={classes['input-header']}>
                        <label htmlFor="country">Country</label>
                        {countryHasError && <p className={classes['error-text']}>Field cannot be empty</p>}
                    </div>
                <input value={countryValue} onChange={countryChangeHandler} onBlur={countryBlurHandler} type="text" name="country" id="country" placeholder="United States" />
                </div>

            </div>
            </div>
            <div className={classes['payment-section']}>
                <p className={classes['form-section-title']}>payment details</p>
                <div className={classes['payment-methods-container']}>
                    <p>Payment Method</p>
                    <div className={classes['payment-methods']}>
                    <label className={eMoneyClass}>
                    <input type="radio" name="e-money" id="e-money" checked={isRadioSelected('e-Money')} value={'e-Money'} onChange={RadioActiveHandler} />
                    <div className={classes['custom-checkbox']}></div>
                    e-Money
                    </label>
                    <label className={cashClass}>
                    <input  type="radio" name="cash" id="cash" checked={isRadioSelected('Cash')} value={'Cash'} onChange={RadioActiveHandler} />
                    <div className={classes['custom-checkbox']}></div>
                    Cash on Delivery
                    </label>
                    </div>
                </div>
            </div>
            <div>
                {isActive ? <EMoney 
                pinValue = {cardPINValue}
                pinChangeHandler = {cardPINChangeHandler}
                pinBlurHandler = {cardPINBlurHandler}
                pinHasError = {cardPINHasError}
                numberValue = {cardNumberValue}
                numberChangeHandler = {cardNumberChangeHandler}
                numberBlurHandler = {cardNumberBlurHandler}
                numberHasError = {cardNumberHasError}
                cardPINClass = {cardPINClass}
                cardNumberClass = {cardNumberClass}
                /> : <Cash />}
            </div>
        </form> 
        <Summary
            form={formId}
            buttonClass={buttonClass}
            hasItems={hasItems}
           
            
        />
        </div>
        </div>
          <Footer />
          </>
    )
}

export default Checkout