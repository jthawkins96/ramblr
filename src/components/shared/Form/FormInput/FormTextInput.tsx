import { ChangeEventHandler, useState } from 'react';
import './FormTextInput.scss';

interface FormTextInputProps {
    id: string;
    name: string;
    type: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    label: string;
    required: boolean;
    touched: boolean;
    showValidationMessage: boolean;
    validationMessage: string;
}

const FormTextInput = (props: FormTextInputProps) => {
    const [isFocused, setFocusState] = useState(false);

    return (
        <div className="input-group">
            <input
                id={props.id}
                className={`form-input`}
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                onFocus={() => setFocusState(true)}
                required={props.required}
            />
            <label htmlFor={props.id} className={`form-label ${isFocused ? 'shrink' : ''}`}>
                {props.label}
            </label>
            {props.showValidationMessage && props.touched ? <span className="error-message">{props.validationMessage}</span> : null}
        </div>
    );
};

export default FormTextInput;
