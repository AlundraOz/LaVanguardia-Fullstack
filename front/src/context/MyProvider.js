import React, { Component } from 'react';

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    score: 500
  }

  render() {
    console.log(this.props)
    return (
      <MyContext.Provider value={{
        state: this.state,
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider;
