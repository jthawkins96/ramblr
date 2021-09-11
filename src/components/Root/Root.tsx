import { ReactElement } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import rootReducer from 'redux/reducers/rootReducer';
import RootStoreModel from 'models/RootStoreModel';
import './Root.scss';

const Root = (
    { children }: { children: ReactElement },
    { initialState = {} }: { initialState: RootStoreModel }
) => {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxPromise)
    );

    return <Provider store={store}>{children}</Provider>;
};

export default Root;
