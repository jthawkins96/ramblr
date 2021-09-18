import { ReactElement } from 'react';
import './Form.scss';

interface FormProps {
    className: string;
    children: ReactElement;
}

const Form = (props: FormProps) => {
    return <form className={`form-container ${props.className}`}>{props.children}</form>;
};

export default Form;
