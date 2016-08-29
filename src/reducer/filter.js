import { FILTER_BY_ARTICLE, FILTER_BY_DATE } from '../constants'

const initialState = {
    articles: [],
    selected: null,
    from: null,
    to: null
}

export default function filterReducer( state = initialState, action) {

    const {type, payload, response, error} = action

    switch (type) {
        case FILTER_BY_ARTICLE:
            return {
                ...state,
                selected: payload.selected,
                articles: payload.articles.filter(article => {

                    for (let i = 0; i < payload.selected.length; i++) {

                        if(payload.selected[i].value === article.id) {
                            return true
                        }
                    }

                    return false
                })
            }
        case FILTER_BY_DATE:

            let articles = payload.articles

            if(payload.range.from != null && payload.range.to != null) {

                const dateFrom = new Date(payload.range.from)
                const dateTo = new Date(payload.range.to)

                articles = payload.articles.filter(article => {

                    const dateArticle = new Date(article.date)

                    if(dateArticle >= dateFrom && dateArticle <= dateTo) {
                        return true
                    }
                })
            }

            return {
                ...state,
                from: payload.range.from,
                to: payload.range.to,
                articles: articles
            }
    }

    return state
}