import { combineReducers, createStore } from 'redux'

function visibilityFilter(state = 'SHOW_ALL', action) {
    switch (action.type) {
            case 'SET_VISIBILITY_FILTER':
                    return action.filter
            default:
                    return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
            case 'ADD_TODO':
                    return [
                            ...state,
                            {
                                    text: action.text,
                                    completed: false
                            }
                    ]
            case 'COMPLETE_TODO':
                    return state.map((todo, index) => {
                            if (index === action.index) {
                                    return Object.assign({}, todo, {
                                            completed: true
                                    })
                            }
                            return todo
                    })
            default:
                    return state
    }
}
function oData(state = {}, action) {
    // if(action.type == 'global'){
    if (action.key) {
            return {
                    ...state,
                    [action.key]: action.value
            }

    }
    return state
    // }
}

let reducer = combineReducers({ oData, visibilityFilter, todos })
let store = createStore(reducer)
export default store