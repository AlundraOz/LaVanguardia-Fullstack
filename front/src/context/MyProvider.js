import React, { Component } from 'react';

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    user:'',
  }
  render() {
    console.log(this.props)
    return (
      <MyContext.Provider value={{
        state: this.state,
        logIn: (user) => this.setState({
          user: user
        })
      }}>
<<<<<<< HEAD
      {/*SIEMPRE*/}
=======
>>>>>>> a590da9f6e472f751cf8f7e0249fcc65214a8bc7
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
export default MyProvider;
