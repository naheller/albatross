import React, { PureComponent } from 'react';
import Spotify from 'spotify-web-api-js';
// import initialState from './state'
// import { getUserProfile } from './spotifyMethods'

import { Provider } from './Context'

const spotifyApi = new Spotify();

export default class AppProvider extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            auth: {
                accessToken: null,
                refreshToken: null
            },
            userProfile: {},
            savedAlbums: {}
        }
    }

    setAuthTokens(tokens) {
        console.log('setting auth tokens', tokens)
        const { accessToken, refreshToken } = tokens
        this.setState({
            auth: {
                accessToken,
                refreshToken
            }
        })
    }

    getUserProfile() {
        spotifyApi.getMe()
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
    

    render() {
        return (
            <Provider value={{ 
                ...this.state, 
                getUserProfile: this.getUserProfile,
                setAuthTokens: this.setAuthTokens
            }}>
                {this.props.children}
            </Provider>
        )
    }
}
