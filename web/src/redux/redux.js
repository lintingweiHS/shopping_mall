import { combineReducers, createStore } from 'redux'

function todos(state = {}, action) {

    switch (action.type) {
        case 'store':
            return {
                ...state,
                [action.key]: action.value
            }
        default:
            return state
    }
}

let reducer = combineReducers(todos)
let store = createStore(reducer)
return store