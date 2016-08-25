import React, { Component, PropTypes, createClass } from 'react'
import Article from './Article'
import accordion from '../mixins/accordion'

const ArticleList = createClass ({

    mixins: [accordion],

    render: function() {

        const articleItems = this.props.articles.map(articleObject =>
            <li key={articleObject.id}>
                <Article article = {articleObject}
                         isOpen = {this.state.openItemId === articleObject.id}
                         toggleOpen = {this.toggleOpenItem(articleObject.id)}
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

