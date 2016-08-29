import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import JqueryComponent from './JqueryComponent'
import {findDOMNode} from 'react-dom'
import DatePeriod from './DatePeriod'
import Counter from './Counter'
import { connect } from 'react-redux'
import { filterByArticle } from '../AC/filter'

class Container extends Component {
    static propTypes = {

    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select options = {options} value={this.props.selected} onChange = {this.handleChange} multi={true}/>
                <DatePeriod />
                <ArticleList articles = {this.props.filteredArticles} />
                <JqueryComponent items = {this.props.articles} ref={this.getJQ}/>
                <Counter/>
            </div>
        )
    }

    getJQ = (ref) => {
        this.jqRef = ref
        console.log('---', findDOMNode(ref))
    }

    handleChange = (selected) => {
        const { filterByArticle } = this.props
        filterByArticle(selected)
    }
}

let filterArticles = (state) => {

    const {articles, filters} = state

    return articles.filter(article => {

        let result = false

        if( filters.selected !== null && filters.selected.length ) {

            for (let i = 0; i < filters.selected.length; i++) {

                if(filters.selected[i].value === article.id) {
                    result = true
                    break
                }
            }
        }

        if( filters.from != null && filters.to != null ) {

            const dateFrom = new Date(filters.from)
            const dateTo = new Date(filters.to)
            const dateArticle = new Date(article.date)

            if(dateArticle >= dateFrom && dateArticle <= dateTo) {
                result = true
            } else {
                result = false
            }
        }

        return result
    })
}

export default connect((state) => {
    const {articles, filters} = state
    const filteredArticles = filterArticles(state)

    return {
        articles: articles,
        selected: filters.selected,
        filteredArticles: (filters.selected || filters.from || filters.to) ? filteredArticles : articles
    }
    }, {
        filterByArticle
    }
)(Container)