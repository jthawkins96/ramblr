import ActionModel from 'models/redux/ActionModel';
import { SIGN_IN, SIGN_OUT } from 'redux/actions/types';

const initialState = { user: null };

const authReducer = (state = initialState, action: ActionModel<any>) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                user: action.payload,
            };
        case SIGN_OUT:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;
