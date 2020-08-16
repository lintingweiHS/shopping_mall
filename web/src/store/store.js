import { combineReducers, createStore } from 'redux'


function todos(state = {}, action) {

    switch (action.type) {
        case 'todos':
            return {
                ...state,
                [action.key]: action.value
            }
        default:
            return state
    }
}

let reducer = combineReducers({ todos })
let store = createStore(reducer)
export default store