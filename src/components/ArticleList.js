import React from 'react'
import Article from './Article'

export default function ArticleList(props) {
    const articleItem = props.articles.map(articleObject => <li key = {articleObject.id}><Article article = {articleObject} /></li>)

    return (
        <ul>
            {articleItem}
        </ul>
    )
}