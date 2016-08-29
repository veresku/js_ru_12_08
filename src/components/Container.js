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
        const { articles, filterByArticle } = this.props
        filterByArticle(articles, selected)
    }
}

export default connect((state) => {

    const {articles, filters} = state
        return {
            articles: articles,
            selected: filters.selected,
            filteredArticles: filters.articles.length?  filters.articles : articles,
        }
    }, {
    filterByArticle
    }
)(Container)