import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Login from "../../components/Login";
import Footer from "../../components/Footer";
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import API from "../../utils/API";

export default withAuth(class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    if (this.state.authenticated === null) return null;
    return this.state.authenticated ?
      <Redirect to={{ pathname: '/home' }} /> :
      <div>
      <Login baseUrl={this.props.baseUrl} />;
      <Footer />
      </div>
  }
});