import React, { Component, PropTypes, createClass } from 'react'
import Article from './Article'
import toggleListOpen from '../mixins/toggleListOpen'

const ArticleList = createClass ({

    mixins: [toggleListOpen],

    render: function() {

        const { articles } = this.props
        const { openItemId } = this.state

        const articleItems = articles.map(articleObject =>
            <li key={articleObject.id}>
                <Article article = {articleObject}
                         isOpen = {openItemId === articleObject.id}
                         toggleOpen = {this.toggleOpen(articleObject.id)}
                />
            </li>
        )

        return (

            <ul>
                {articleItems}
            </ul>
        )
    }
})

export default ArticleList

