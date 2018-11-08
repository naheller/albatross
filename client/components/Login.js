import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2>Spotify Auth</h2>
        <a href="/login">Login</a>
      </div>
    );
  }
}