import { useState } from 'react';
import './Login.scss';

const Login = () => {
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
                <button type="submit">Login</button>
                <button type="button">Sign in with Google</button>
            </div>
        </form>
    );
};

export default Login;
