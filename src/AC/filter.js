import { FILTER_BY_ARTICLE, FILTER_BY_DATE } from '../constants'

export function filterByArticle(selected) {
    return {
        type: FILTER_BY_ARTICLE,
        payload: {selected}
    }
}

export function filterByDate(range) {
    return {
        type: FILTER_BY_DATE,
        payload: {range}
    }
}