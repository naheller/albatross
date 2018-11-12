import React, { PureComponent } from 'react'
import { Context } from '../../context'
import _ from 'lodash'

export default class Albums extends PureComponent {
    static contextType = Context 

    componentDidUpdate() {
        const { getMyAlbums, auth, savedAlbums } = this.context
        if (auth.status === 'SUCCESS' && savedAlbums.status === 'NOT_STARTED') {
            getMyAlbums(); 
        }
    }

    showAlbums = () => {
        const items = _.get(this.context, 'savedAlbums.data.items', [])
        return !_.isEmpty(items)
        ? (
            <ul>
                {_.map(items, item => {
                    const { album } = item
                    return (
                        <li key={album.id}>
                            {`${album.name} - ${album.artists[0].name}`}
                        </li>
                    )
                })}
            </ul>
        ) : <div>No saved albums</div>
    }

    render() {
        return (
            <>
                <h3>Saved Albums</h3>
                {this.showAlbums()}
            </>
        )
    }
}
