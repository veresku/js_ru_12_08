import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import JqueryComponent from './JqueryComponent'
import {findDOMNode} from 'react-dom'
import DatePeriod from './DatePeriod'

class Container extends Component {
    static propTypes = {

    };

    state = {
        selected: null,
        periodStart: new Date(),
        periodEnd: new Date()
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select options = {options} value={this.state.selected} onChange = {this.handleChange}/>
                <ArticleList articles = {this.props.articles} />
                <JqueryComponent items = {this.props.articles} ref={this.getJQ}/>
                <DatePeriod />
            </div>
        )
    }

    getJQ = (ref) => {
        this.jqRef = ref
        console.log('---', findDOMNode(ref))
    }

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }
}

export default Container