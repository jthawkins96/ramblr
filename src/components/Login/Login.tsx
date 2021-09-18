import { UserCredential } from '@firebase/auth';
import { signInWithGoogle } from 'firebase/firebase.utils';
import UserModel from 'models/redux/UserModel';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SIGN_IN } from 'redux/actions/types';
import './Login.scss';

interface LoginProps {
    signIn: (user: UserModel) => void;
    history: any;
}

const Login = (props: LoginProps) => {
    const handleGoogleSignIn = (result: UserCredential) => {
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

    const [focusState, setFocusState] = useState('');

    return (
        <form className="login-form">
            <div className="input-group">
                <input
                    id="email"
                    className="form-input"
                    type="text"
                    name="email"
                    onFocus={() => setFocusState('shrink')}
                    required={true}
                />
                <label htmlFor="email" className={`form-label ${focusState}`}>
                    Email
                </label>
            </div>
            <div className="input-group">
                <input
                    id="password"
                    className="form-input"
                    type="password"
                    name="password"
                    onFocus={() => setFocusState('shrink')}
                    required={true}
                />
                <label htmlFor="password" className={`form-label ${focusState}`}>
                    Password
                </label>
            </div>
            <div className="form-footer">
                <button className="btn btn-primary text-light" type="submit">
                    Login
                </button>
                <button
                    className="btn btn-primary text-light"
                    type="button"
                    onClick={() => signInWithGoogle(handleGoogleSignIn)}
                >
                    Sign in with Google
                </button>
            </div>
        </form>
    );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        signIn: (user: UserModel) => dispatch({ type: SIGN_IN, payload: user }),
    };
};

export default connect(null, mapDispatchToProps)(Login);
