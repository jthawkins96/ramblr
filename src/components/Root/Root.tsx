import { ReactElement } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import rootReducer from 'redux/reducers/rootReducer';
import RootStoreModel from 'models/redux/RootStoreModel';
import './Root.scss';

interface RootProps {
    children?: ReactElement;
    initialState?: RootStoreModel;
}

const Root = (props: RootProps) => {
    const store = createStore(rootReducer, props.initialState, applyMiddleware(reduxPromise));

    return <Provider store={store}>{props.children}</Provider>;
};

export default Root;
