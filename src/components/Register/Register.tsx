import Form from 'components/shared/Form/Form';
import FormTextInput from 'components/shared/Form/FormInput/FormTextInput';
import { createUser } from 'firebase/firebase.utils';
import UserRepository from 'firebase/repositories/userRepository';
import UserDocumentModel from 'models/firebase/UserDocumentModel';
import UserModel from 'models/redux/UserModel';
import { FormEventHandler, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { SIGN_IN } from 'redux/actions/types';

interface RegisterProps {
    signIn: (user: UserModel) => void;
    history?: any;
}

const Register = (props: RegisterProps) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        validationState: {
            isValid: true,
            validationMessage: '',
        },
    });

    const userRepository = new UserRepository();

    const submitForm: FormEventHandler = e => {
        e.preventDefault();

        if (isValid()) {
            createUser(
                formState.email,
                formState.password,
                userCredential => {
                    const user = userCredential.user;
                    let userDoc: UserDocumentModel = {
                        id: user.uid,
                        name: formState.name,
                        email: user.email ?? '',
                        createdAt: new Date(),
                    };

                    userRepository.addOrUpdateAsync(userDoc);

                    const mappedUser = {
                        id: user.uid,
                        name: formState.name,
                        email: user.email,
                        accessToken: user.email,
                    };

                    props.signIn(mappedUser);
                    props.history.push('/');
                },
                error => {
                    if (error.code.includes('email-already-in-use'))
                        setFormState({
                            ...formState,
                            validationState: {
                                isValid: false,
                                validationMessage: 'An account with this email already exists.',
                            },
                        });
                    else if (error.code.includes('weak-password'))
                        setFormState({
                            ...formState,
                            validationState: {
                                isValid: false,
                                validationMessage: 'Password is too weak.',
                            },
                        });
                    else
                        setFormState({
                            ...formState,
                            validationState: {
                                isValid: false,
                                validationMessage: 'An unexpected error occurred.',
                            },
                        });
                }
            );
        }
    };

    const isValid = () => {
        return !(
            formState.email === '' ||
            formState.email == null ||
            formState.password === '' ||
            formState.password == null ||
            formState.password !== formState.confirmPassword
        );
    };

    return (
        <Form className="register-form" onSubmit={submitForm} validationMessage={formState.validationState.validationMessage}>
            <div>
                <FormTextInput
                    id="name"
                    name="name"
                    type="text"
                    label="Name"
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    required={false}
                    showValidationMessage={false}
                    validationMessage=""
                />
                <FormTextInput
                    id="email"
                    name="email"
                    type="text"
                    label="Email"
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    required={true}
                    showValidationMessage={formState.email == null || formState.email === ''}
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
                    showValidationMessage={formState.password == null || formState.password === ''}
                    validationMessage="Password is required."
                />
                <FormTextInput
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    value={formState.confirmPassword}
                    onChange={e => setFormState({ ...formState, confirmPassword: e.target.value })}
                    label="Confirm Password"
                    required={true}
                    showValidationMessage={
                        formState.confirmPassword == null ||
                        formState.confirmPassword === '' ||
                        formState.confirmPassword !== formState.password
                    }
                    validationMessage={
                        formState.confirmPassword == null || formState.confirmPassword === ''
                            ? 'Please confirm your password'
                            : 'Passwords do not match.'
                    }
                />
                <div className="form-footer">
                    <button id="register-button" className="btn btn-primary text-light" type="submit">
                        Register
                    </button>
                </div>
                <div className="my-3">
                    Already have an account? <Link to="/login">Click here to login.</Link>
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

export default connect(null, mapDispatchToProps)(Register);
