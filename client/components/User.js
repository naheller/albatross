import React, { PureComponent, memo } from 'react'
import { Consumer } from '../Context'
const UserContext = React.createContext({hi: 'bye'});

class User extends PureComponent {
    static contextType = UserContext

    constructor(props) {
        super(props)

        console.log('user props', this.props)
        const { match } = this.props;
        const { accessToken, refreshToken } = match.params;
    }

    componentDidMount() {
        console.log('CDM - user context', this.context)
    }

    render() {
        return (
            <div>User</div>
            // <Consumer>
            //     {context => {
            //         console.log('user context', context)
            //         return (
            //             <div>User</div>
            //         )
            //     }}
            // </Consumer>
        );
    } 
}

export default User;