import { FILTER_BY_ARTICLE, FILTER_BY_DATE } from '../constants'

const initialState = {
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
                selected: payload.selected
            }
        case FILTER_BY_DATE:

            return {
                ...state,
                from: payload.range.from,
                to: payload.range.to
            }
    }

    return state
}