import { SIGN_IN, SIGN_OUT } from './types';
import UserModel from 'models/redux/UserModel';

export const signIn = (user: UserModel) => {
    return {
        type: SIGN_IN,
        payload: user,
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT,
    };
};
