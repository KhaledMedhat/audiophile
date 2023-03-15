import classes from './EMoney.module.css'

const EMoney = (props) => {
    return (
        <div className={classes['eMoney-container']}>
            <div className={`${classes.number} ${props.cardNumberClass}`}>
                <div className={classes['input-header']}>
                    <label htmlFor="eMoney-number">e-Money Number</label>
                    {props.numberHasError && <p className={classes['error-text']}>Field cannot be empty</p>}
                </div>
                    <input value={props.numberValue} onChange={props.numberChangeHandler} onBlur={props.numberBlurHandler} type="text" id="eMoney-number" name="eMoney-number" placeholder="238521993" />
            </div>
            <div className={`${classes.pin} ${props.cardPINClass}`}>
                <div className={classes['input-header']}>
                <label htmlFor="e-Money pin">e-Money PIN</label>
                {props.pinHasError && <p className={classes['error-text']}>Field cannot be empty</p>}
                </div>
                <input value={props.pinValue} onChange={props.pinChangeHandler} onBlur={props.pinBlurHandler} type="text" id="e-Money pin" name="e-Money pin" placeholder="6891" />
            </div>
    </div>
    )
}

export default EMoney