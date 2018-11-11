export const getUserProfile = () => {
    spotifyApi.getMe()
    .then(data => ({ data, status: 'SUCCESS' }))
    .catch(error => ({ error, status: 'ERROR' }))
}
