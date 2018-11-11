import React, { PureComponent } from 'react';
import { Consumer } from '../Context'

export default class App extends PureComponent {
    render() {
        return (
            <Consumer>
                {context => {
                    console.log(context)
                    console.log(this.props)
                    return <div>App</div>
                }}
            </Consumer>
        )
    }
}

// const Child = () => (
//     <Consumer>
//         {context => {
//             console.log('context', context)
//             return <div/>
//         }}
//     </Consumer>
// )
