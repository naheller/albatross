import React, { Component } from 'react';

export default class App extends Component {
  render() {
    // injected via react router
    const {children} = this.props;
    console.log(this.props)
    return (
      <div>{children}</div>
    );
  }
}