import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Home from 'components/Home/Home';
import Login from 'components/Login/Login';
import './App.scss';
import UserModel from 'models/redux/UserModel';
import RootStoreModel from 'models/redux/RootStoreModel';
import { connect } from 'react-redux';
import Register from 'components/Register/Register';

interface AppProps {
    user?: UserModel;
}

const App = (props: AppProps) => {
    return (
        <div className="root-container">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    {props.user == null ? <Redirect to="/login" /> : null}
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

const mapStateToProps = (state: RootStoreModel) => {
    return {
        user: state.auth.user,
    };
};

export default connect(mapStateToProps, null)(App);
