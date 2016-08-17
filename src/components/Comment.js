/**
 * Created by veresku on 17/08/16.
 */
import React, { Component } from 'react'

export default class Comment extends Component {

    render() {
        const { comment } = this.props

        return (
            <div>
                <i>{comment.user}</i>
                <p>{comment.text}</p>
            </div>
        )
    }
}

