import React, { Component, PropTypes } from 'react'
import Article from './Article'
import toggleListOpen from '../decorators/toggleListOpen'

class ArticleList extends Component {

    static propTypes = {
        //Теперь компонент расчитывает на openItemId и toggleOpen - рекомендую их тоже описать
        articles: PropTypes.array
    }

    render() {

        const {articles, openItemId, toggleOpen} = this.props
        const articleItems = articles.map(articleObject =>
            <li key={articleObject.id}>
                <Article article = {articleObject}
                         isOpen = {openItemId === articleObject.id}
                         toggleOpen = {toggleOpen(articleObject.id)}
                />
            </li>
        )

        return (

            <ul>
                {articleItems}
            </ul>
        )
    }
}

export default toggleListOpen(ArticleList)

