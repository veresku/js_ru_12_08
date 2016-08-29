import { FILTER_BY_ARTICLE, FILTER_BY_DATE } from '../constants'

const initialState = {
    selected: null,
    from: null,
    to: null
}

export default function filterReducer( state = initialState, action) {

    const {type, payload, response, error} = action

    switch (type) {
        //в основном все хорошо, но не стоит здесь хранить articles. Это прямой путь к неконсистентности данных.
        //Лучше хранить здесь только значения самих фильтров. Отдельно статей. А отфильтнрованные статьи - это такой себе derived(computed) property, который можно посчитать в connect
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
