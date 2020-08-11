import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router/Router'
import './index.css'
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
                                        // console.log(Object.assign({ a: 1, b: 2 }, todo, {
                                        //         completed: true
                                        // }), 111)

                                        let aa = Object.assign({}, todo, {
                                                completed: true
                                        })
                                        console.log(aa,state)
                                        return aa
                                }
                                // console.log(todo,'bbb')
                                return todo
                        })
                default:
                        return state
        }
}

let reducer = combineReducers({ visibilityFilter, todos })
let store = createStore(reducer)
store.dispatch({
        type: 'ADD_TODO',
        text: 'ltw'
})
store.dispatch({
        type: 'ADD_TODO',
        text: 'yss'
})

store.dispatch({
        type: 'COMPLETE_TODO', index: 0
})
let arr = store.dispatch({
        type: 'COMPLETE_TODO', index: 1
})
console.log(arr, 123)

// let asd = store.dispatch({
//         type: 'SET_VISIBILITY_FILTER',
//         filter: 'XXOO'
// })
console.log(store.getState())
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'DECREMENT' })

ReactDOM.render((
        <Router />

), document.getElementById('root'))




// ReactDOM.render(<App/>,document.getElementById('root'))