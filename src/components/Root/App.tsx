import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Home from 'components/Home/Home';
import Login from 'components/Login/Login';
import './App.scss';

const App = () => {
    return (
        <div className="root-container">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Login} />
                    <Redirect to="/login" />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
