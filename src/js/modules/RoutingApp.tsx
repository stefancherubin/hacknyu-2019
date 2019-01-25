import { Provider } from "react-redux";
import * as React from "react";
import { Route } from "react-router-dom";
import MainApp from "./core/components/MainApp";
import HomePage from "./core/components/HomePage";
import { ConnectedRouter } from "connected-react-router";
import store from "../store";
import ThemeInjector from "./ThemeInjector";
import ApplyPage from './core/components/ApplyPage'
import LoginPage from './core/components/LoginPage'
import AboutPage from './core/components/AboutPage'
import RegisterPage from './core/components/RegisterPage'
import ResetPasswordPage from "./core/components/ResetPasswordPage";
import ProfilePage from "./core/components/ProfilePage";
import createBrowserHistory from "history/createBrowserHistory";
import appHistory from "../appHistory";

class RoutingApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={appHistory}>
          <ThemeInjector>
            <MainApp>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage}/>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/reset_password" component={ResetPasswordPage} />
              <Route exact path="/apply" component={ApplyPage} />
              <Route exact path="/my_profile" component={ProfilePage} />
            </MainApp>
          </ThemeInjector>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default RoutingApp;