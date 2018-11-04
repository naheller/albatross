import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import { string } from 'prop-types'
import { test } from './api'

class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    componentDidMount() {
        this.getTitle()
        .then(title => this.setState({ title }))
    }

    async getTitle() {
        const { data } = await test()
        return data.title
    }

    render() {
        return <div>{this.state.title}</div>
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
