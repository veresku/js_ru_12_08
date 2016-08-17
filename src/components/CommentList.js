/**
 * Created by veresku on 17/08/16.
 */
import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

    state = {
        isOpen: false
    }

    render() {

        const { comments } = this.props
        const commentList = comments ? comments.map(commentObject => <li key = {commentObject.id}><Comment comment = {commentObject} /></li>) : null
        const commentsBlock = this.state.isOpen ? <ul>{commentList}</ul> : null
        const commentsBlockTitle = !comments ? 'No comments' : this.state.isOpen ? 'Hide comments' : 'Show comments'

        return (
            <div>
                <div onClick = {this.handleClick}>{commentsBlockTitle}</div>
                {commentsBlock}
            </div>
        )
    }

    handleClick = (ev) => {

        this.setState({

            isOpen: !this.state.isOpen
        })
    }
}


