import { FormEventHandler, ReactElement } from 'react';
import './Form.scss';

interface FormProps {
    className: string;
    children: ReactElement;
    onSubmit: FormEventHandler;
    validationMessage?: string;
}

const Form = (props: FormProps) => {
    return (
        <form className={`form-container ${props.className}`} onSubmit={props.onSubmit}>
            {props.validationMessage && props.validationMessage !== '' ? (
                <span className="form-validation-message">{props.validationMessage}</span>
            ) : null}
            {props.children}
        </form>
    );
};

export default Form;
