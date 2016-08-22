import React from 'react'
import { render } from 'react-dom'
import { articles } from './fixtures'
import ArticleList from './components/ArticleListOld'

render(<ArticleList articles = {articles} />, document.getElementById('container'))