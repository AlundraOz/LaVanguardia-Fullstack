import React, { Component } from 'react';

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    user:''
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        logIn: (user) => this.setState({
          user: user
        })

      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
export default MyProvider;
