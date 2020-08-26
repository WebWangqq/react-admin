import React from 'react'

export const asyncComponent = loadComponent => (
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Component: null
      }
    }

    UNSAFE_componentWillMount () {
      if (this.state.Component !== null) {
        return
      }
      loadComponent()
        .then(module => module.default)
        .then((Component) => {
          this.setState({ Component })
        })
        .catch((err) => {
          console.error(`Cannot load component in <AsyncComponent />`);
          throw err
        })
    }


    render () {
      const { Component } = this.state;
      return (Component) ? <Component {...this.props} /> : null
    }
  }
)