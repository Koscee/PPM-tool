import 'bootstrap/dist/css/bootstrap.min.css';
import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import dispatchAction from './actions/dispatchHelper';
import { logout } from './actions/securityActions';
import { SET_CURRENT_USER } from './actions/types';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import Landing from './components/layout/Landing';
import AddProject from './components/project/AddProject';
import UpdateProject from './components/project/UpdateProject';
import ProjectBoard from './components/projectBoard/ProjectBoard';
import AddProjectTask from './components/projectBoard/projectTasks/AddProjectTask';
import UpdateProjectTask from './components/projectBoard/projectTasks/UpdateProjectTask';
import Login from './components/user/Login';
import Register from './components/user/Register';
import store from './store';
import SecuredRoute from './utils/SecuredRoute';
import setJwtToken from './utils/setJwtToken';

const jwtToken = localStorage.getItem('jwtToken');

if (jwtToken) {
  setJwtToken(jwtToken);
  const decodedToken = jwtDecode(jwtToken);
  dispatchAction(store.dispatch, SET_CURRENT_USER, decodedToken);

  const currentTime = Date.now() / 1000;

  if (decodedToken.exp < currentTime) {
    // handle logout
    store.dispatch(logout());
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />

            {/* Public Routes */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            {/* Private Routes */}
            <Switch>
              <SecuredRoute exact path="/dashboard" component={Dashboard} />
              <SecuredRoute exact path="/addProject" component={AddProject} />
              <SecuredRoute
                exact
                path="/updateProject/:id"
                component={UpdateProject}
              />
              <SecuredRoute
                exact
                path="/projectBoard/:id"
                component={ProjectBoard}
              />
              <SecuredRoute
                exact
                path="/addProjectTask/:id"
                component={AddProjectTask}
              />
              <SecuredRoute
                exact
                path="/updateProjectTask/:backlog_id/:pt_id"
                component={UpdateProjectTask}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
