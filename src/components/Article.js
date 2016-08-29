import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'
import { connect } from 'react-redux'
import { deleteArticle } from '../AC/articles'

class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {

        const { article: {text, title, date, comments}, isOpen, toggleOpen } = this.props
        const body = isOpen ? <section>{text}<CommentList comments={comments} /></section> : null

        return (
            <div>
                <h3 onClick = {toggleOpen}>{title}</h3>
                <p>{date}</p>
                <a href = "#" onClick = {this.handleDelete}>delete article</a>
                {body}
            </div>
        )
    }

    handleDelete = ev => {
        ev.preventDefault()
        const { deleteArticle, article } = this.props
        deleteArticle(article.id)
    }
}

export default connect(null, { deleteArticle })(Article)