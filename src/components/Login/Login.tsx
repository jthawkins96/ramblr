import { UserCredential } from '@firebase/auth';
import Form from 'components/shared/Form/Form';
import FormTextInput from 'components/shared/Form/FormInput/FormTextInput';
import { signInWithGoogle, login } from 'firebase/firebase.utils';
import UserModel from 'models/redux/UserModel';
import { FormEventHandler, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SIGN_IN } from 'redux/actions/types';
import './Login.scss';

interface LoginProps {
    signIn: (user: UserModel) => void;
    history?: any;
}

const Login = (props: LoginProps) => {
    const handleSignIn = (result: UserCredential) => {
        const user = result.user;
        const mappedUser = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            accessToken: user.email,
        };

        props.signIn(mappedUser);
        props.history.push('/');
    };

    const submitForm: FormEventHandler = e => {
        e.preventDefault();

        if (isValid()) {
            login(formState.username, formState.password, handleSignIn, error => console.log(error));
        }

        setSubmitState(true);
    };

    const isValid = () => {
        return !(formState.username === '' || formState.username == null || formState.password === '' || formState.password == null);
    };

    const [formState, setFormState] = useState({
        username: '',
        password: '',
    });

    const [submitted, setSubmitState] = useState(false);

    return (
        <Form className="login-form" onSubmit={submitForm}>
            <div>
                <FormTextInput
                    id="email"
                    name="email"
                    type="text"
                    label="Email"
                    value={formState.username}
                    onChange={e => setFormState({ ...formState, username: e.target.value })}
                    required={true}
                    touched={submitted}
                    showValidationMessage={formState.username == null || formState.username === ''}
                    validationMessage="Username is required."
                />
                <FormTextInput
                    id="password"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={e => setFormState({ ...formState, password: e.target.value })}
                    label="Password"
                    required={true}
                    touched={submitted}
                    showValidationMessage={formState.password == null || formState.password === ''}
                    validationMessage="Password is required."
                />
                <div className="form-footer">
                    <button id="sign-in-button" className="btn btn-primary text-light" type="submit">
                        Login
                    </button>
                    <button
                        id="google-sign-in-button"
                        className="btn btn-primary text-light"
                        type="button"
                        onClick={() => signInWithGoogle(handleSignIn)}
                    >
                        Sign in with Google
                    </button>
                </div>
            </div>
        </Form>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        signIn: (user: UserModel) => dispatch({ type: SIGN_IN, payload: user }),
    };
};

export default connect(null, mapDispatchToProps)(Login);
