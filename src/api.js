import axios from 'axios'

// const baseUrlSpotify = 'https://api.spotify.com/v1'

export const test = () => {
    return axios({
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/todos/1`
    })
    .then(res => res)
}
