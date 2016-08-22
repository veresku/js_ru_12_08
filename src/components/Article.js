import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    static propTypes = {

        article: PropTypes.shape({

            id: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            comments: PropTypes.array
        })
    }

    render() {

        const { article: {text, title, comments}, isOpen, toggleOpen } = this.props
        const body = isOpen ? <section>{text}<CommentList comments={comments} /></section> : null

        return (
            <div>
                <h3 onClick = {toggleOpen}>{title}</h3>
                {body}
            </div>
        )
    }
}

export default Article