import { FILTER_BY_ARTICLE, FILTER_BY_DATE } from '../constants'

export function filterByArticle(articles, selected) {
    return {
        type: FILTER_BY_ARTICLE,
        payload: {articles, selected}
    }
}

export function filterByDate(articles, range) {
    return {
        type: FILTER_BY_DATE,
        payload: {articles, range}
    }
}