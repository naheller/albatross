import axios from 'axios'

// const baseUrlSpotify = 'https://api.spotify.com/v1'

export const test = () => {
    return axios({
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/todos/1`
    })
    .then(res => res)
}

export const authorizeAppWithSpotify = () => {
    return axios({
        method: 'get',
        url: `https://accounts.spotify.com/authorize`,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        params: {
            client_id: '23010df69667498196239780f3a7318c',
            response_type: 'code',
            redirect_uri: 'http://localhost:8000/'
        }
    })
    .then(res => console.log(res))
}