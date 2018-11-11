import Spotify from 'spotify-web-api-js';
const spotifyApi = new Spotify();

// our constants
export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN';
export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_ME_SUCCESS';
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE';

export const SPOTIFY_ME_ALBUMS_BEGIN = 'SPOTIFY_ME_ALBUMS_BEGIN';
export const SPOTIFY_ME_ALBUMS_SUCCESS = 'SPOTIFY_ME_ALBUMS_SUCCESS';
export const SPOTIFY_ME_ALBUMS_FAILURE = 'SPOTIFY_ME_ALBUMS_FAILURE';

/** set the app's access and refresh tokens */
export function setTokens({accessToken, refreshToken}) {
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }
  return { type: SPOTIFY_TOKENS, accessToken, refreshToken };
}

/* get the user's info from the /me api */
export function getMyInfo() {
    console.log('get my info')
  return dispatch => {
    dispatch({ type: SPOTIFY_ME_BEGIN });
    spotifyApi.getMe().then(data => {
      dispatch({ type: SPOTIFY_ME_SUCCESS, data: data });
    }).catch(e => {
      dispatch({ type: SPOTIFY_ME_FAILURE, error: e });
    });
  };
}

export function getMyAlbums() {
    console.log('get my albums')
  return dispatch => {
    dispatch({ type: SPOTIFY_ME_ALBUMS_BEGIN });
    spotifyApi.getMySavedAlbums().then(data => {
      dispatch({ type: SPOTIFY_ME_ALBUMS_SUCCESS, data: data });
    }).catch(e => {
      dispatch({ type: SPOTIFY_ME_ALBUMS_FAILURE, error: e });
    });
  };
}