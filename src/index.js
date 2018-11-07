import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import { string } from 'prop-types'
import { test, authorizeAppWithSpotify } from './api'

class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    // componentDidMount() {
    //     this.getTitle()
    //     .then(title => this.setState({ title }))
    // }

    async getTitle() {
        const { data } = await test()
        return data.title
    }

    render() {
        return <button onClick={() => authorizeAppWithSpotify()}>Authorize</button>
    }
}

App.defaultProps = {
    title: ''
}

App.propTypes = {
    title: string.isRequired
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
