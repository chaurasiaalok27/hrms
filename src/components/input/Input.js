import React, { Fragment } from 'react';
var defaultclasses = {
    inputClassName: '',
    labelClassName: '',
    iconClassName: '',
    inputComponentClass: '',
    inputIconContainer: ''
}

const Input = ({
    type = "text",
    value,
    name,
    label,
    id,
    icon,
    classes = { ...defaultclasses },
    placeHolder,
    onChange,
    onFocus = () => { },
    onBlur = () => { },
    errors
}) => {
    const { inputClassName, labelClassName, iconClassName, inputComponentClass, inputIconContainer } = classes;
    return (
        <>
            <div className={`input-component ${inputComponentClass}`}>
                {label && (
                    <label className={`label ${labelClassName}`}>{label}</label>)}

                <div className={`input-icon-container ${inputIconContainer}`}>
                    <input
                        style={{ outline: "none" }}
                        id={id}
                        onChange={onChange}
                        className={`inputBox ${inputClassName}`}
                        type={type}
                        value={value}
                        name={name}
                        placeholder={placeHolder}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                    {icon}
                </div>
            </div>
            {errors && <p className="input-error">{errors}</p>}
        </>
    )
}

export default Input;