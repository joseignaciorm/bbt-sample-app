import React, { Component } from "react"

const withLogin = (WrappedComponent) => {
  return class WithLoginComponent extends Component {
    constructor (props) {
      super(props)

      this.state = { logged: false }
      this.verifyUserLogin = this.verifyUserLogin.bind(this)
    }

    verifyUserLogin () {
      this.setState({ logged: localStorage.getItem('Login') })
    }

    componentDidMount () {
      this.verifyUserLogin()
    }

    render () {
      return (
        <WrappedComponent {...this.props} 
        loggued={this.state.logged} />
      )
    }
  }
}

export default withLogin
