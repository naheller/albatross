import React, { Component } from 'react';
import { connect }      from 'react-redux';
import {
  getMyInfo,
  getMyAlbums,
  setTokens,
}   from '../actions/actions';

/**
 * Our user page
 * Displays the user's information
 */
class User extends Component {
  /** When we mount, get the tokens from react-router and initiate loading the info */
  componentDidMount() {
    // params injected via react-router, dispatch injected via connect
    const {dispatch, match} = this.props;
    const {accessToken, refreshToken} = match.params;
    dispatch(setTokens({accessToken, refreshToken}));
    dispatch(getMyInfo());
    dispatch(getMyAlbums());
  }

  showAlbums() {
      if (this.props.savedAlbums.status === 'SUCCESS') {
          return (
            <ul>{this.props.savedAlbums.data.items.map(album => {
                return <li>{album.album.name} - {album.album.artists[0].name}</li>
            })}</ul>
          )
      }
  }

  /** Render the user's info */
  render() {
      console.log('user props', this.props)
    const { accessToken, refreshToken, user } = this.props;
    const { loading, display_name, images, id, email, external_urls, href, country, product } = user;
    const imageUrl = images[0] ? images[0].url : "";
    // if we're still loading, indicate such
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div className="user">
        <h2>{`Logged in as ${display_name}`}</h2>
        <div className="user-content">
          <img src={imageUrl} />
          <ul>
            <li><span>Display name</span><span>{display_name}</span></li>
            <li><span>Id</span><span>{id}</span></li>
            <li><span>Email</span><span>{email}</span></li>
            <li><span>Spotify URI</span><span><a href={external_urls.spotify}>{external_urls.spotify}</a></span></li>
            <li><span>Link</span><span><a href={href}>{href}</a></span></li>
            <li><span>Profile Image</span><span><a href={imageUrl}>{imageUrl}</a></span></li>
            <li><span>Country</span><span>{country}</span></li>
            <li><span>Product</span><span>{product}</span></li>
          </ul>
        </div>
        {this.showAlbums()}
      </div>
    );
  }
}

export default connect(state => state)(User);