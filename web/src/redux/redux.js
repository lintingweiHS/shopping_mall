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

const  reducer = combineReducers({todos})
const  store = createStore(reducer)
export default store