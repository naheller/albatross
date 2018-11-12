import React, { PureComponent } from 'react';
import Context from '../Context'

export default class App extends PureComponent {
    static contextType = Context  

    render() {
        console.log('App context', this.context)
        return (
            <div>App</div>
            // <Consumer>
            //     {context => {
            //         console.log(context)
            //         console.log(this.props)
            //         return <div>App</div>
            //     }}
            // </Consumer>
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
