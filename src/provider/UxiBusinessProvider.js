import React, { Component } from 'react';

export const AppContext = React.createContext();

class UxiBusinessProvider extends Component {
  constructor(props) {
    super(props);

    const loginUrl = props.loginUrl ? props.loginUrl : '/login';
    const logoutUrl = props.logoutUrl ? props.logoutUrl : '/logout';

    this.state = {
      loginUrl,
      logoutUrl,
      onLogout: props.onLogout ? props.onLogout : () => {
        window.location = logoutUrl;
      }
    };
  }

  render() {
    const { children } = this.props;

    return (
      <AppContext.Provider value={this.state}>
        {children}
      </AppContext.Provider>
    );
  }
};

export default UxiBusinessProvider
