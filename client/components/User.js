import React, { PureComponent, memo } from 'react'
import Context from '../Context'
// const UserContext = React.createContext({hi: 'bye'});

class User extends PureComponent {
    static contextType = Context  

    // constructor(props) {
    //     super(props)

    //     console.log('user props', this.props)
    // }

    componentDidMount() {
        console.log('User context', this.context)
        const { match } = this.props;
        const { accessToken, refreshToken } = match.params;
        this.context.setAuthTokens({ accessToken, refreshToken })
    }

    render() {
        return (
            <div>User</div>
        );
    } 
}

export default User;