import { h, Component } from 'preact'
import { Router, route } from 'preact-router'

import Header from './components/header'

import Home from './pages/home'
import Profile from './pages/profile'
import Login from './pages/login'

const Private = ({ component, ...rest }) => {
  if (false) {
    return h(component, props)
  }

  return route('/login', true)
}

export default class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <Router onChange={this.handleRoute}>
        <Login path="/login" />
        <Private component={Home} path="/" />
        <Private component={Profile} path="/profile" user="me" />
        <Private component={Profile} path="/profile/:user" />
      </Router>
    )
  }
}
