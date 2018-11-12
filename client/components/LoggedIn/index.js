import React, { PureComponent } from 'react'
import Spotify from 'spotify-web-api-js';

import { Context } from '../../context'
import { state } from '../../state'

import Profile from './Profile'
import Albums from './Albums'

const spotifyApi = new Spotify()

class LoggedIn extends PureComponent { 
    constructor(props) {
        super(props)
        this.state = state
    }

    componentDidMount() {
        const { match } = this.props
        const { accessToken, refreshToken } = match.params
        this.setAuthTokens({ accessToken, refreshToken })
    }

    setAuthTokens = tokens => {
        const { accessToken, refreshToken } = tokens
        spotifyApi.setAccessToken(accessToken)
        this.setState({
            auth: {
                accessToken,
                refreshToken,
                status: 'SUCCESS'
            }
        })
    }

    getUserProfile = () => {
        spotifyApi.getMe()
        .then(data => {
            this.setState({
                userProfile: { data, status: 'SUCCESS' }
            })
        })
        .catch(error => {
            this.setState({
                userProfile: { error, status: 'ERROR' }
            })
        })
    }

    getMyAlbums = () => {
        spotifyApi.getMySavedAlbums()
        .then(data => {
            this.setState({
                savedAlbums: { data, status: 'SUCCESS' }
            })
        })
        .catch(error => {
            this.setState({
                savedAlbums: { error, status: 'ERROR' }
            })
        })
    }

    showAuthTokens = () => {
        const { accessToken, refreshToken } = this.state.auth
        return (
            <>
                <h3>Logged in</h3>
                <p>{`Access token: ${accessToken}`}</p>
                <p>{`Refresh token: ${refreshToken}`}</p>
            </>
        )
    }

    render() {
        const { Provider } = Context
        return (
            <Provider
                value={{
                    ...this.state, 
                    getUserProfile: this.getUserProfile,
                    getMyAlbums: this.getMyAlbums
                }}
            >
                {this.showAuthTokens()}
                <hr />
                <Profile />
                <hr />
                <Albums />
            </Provider>
        );
    } 
}

export default LoggedIn