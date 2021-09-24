import { FormEventHandler, ReactElement } from 'react';
import './Form.scss';

interface FormProps {
    className: string;
    children: ReactElement;
    onSubmit: FormEventHandler;
}

const Form = (props: FormProps) => {
    return (
        <form className={`form-container ${props.className}`} onSubmit={props.onSubmit}>
            {props.children}
        </form>
    );
};

export default Form;
