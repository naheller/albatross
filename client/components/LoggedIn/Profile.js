import React, { PureComponent } from 'react'
import { Context } from '../../context'
import get from 'lodash/get'

export default class Profile extends PureComponent {
    static contextType = Context 

    componentDidUpdate() {
        const { getUserProfile, auth, userProfile } = this.context
        if (auth.status === 'SUCCESS' && userProfile.status === 'NOT_STARTED') {
           getUserProfile(); 
        }
    }

    showProfile = () => {
        const profile = get(this.context, 'userProfile.data', {})
        const { display_name, email, id } = profile
        return !_.isEmpty(profile)
        ? (
            <>
                <p>{`Name: ${display_name}`}</p>
                <p>{`Email: ${email}`}</p>
                <p>{`ID: ${id}`}</p>
            </>
        ) : <div>No user profile</div>
    }

    render() {
        return (
            <>
                <h3>User Profile</h3>
                {this.showProfile()}
            </>
        )
    }
}
