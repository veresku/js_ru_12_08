/**
 * Created by veresku on 17/08/16.
 */
import React, { Component, PropTypes } from 'react'

export default class Comment extends Component {

    static propTypes = {

        comment: PropTypes.shape({

            user: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    }

    render() {

        if(!this.props.comment) return null

        const { comment: {user, text} } = this.props

        return (
            <p>
                {text}
                <strong>by {user}</strong>
            </p>
        )
    }
}

