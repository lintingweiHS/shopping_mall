import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router/Router'
import './index.css'
import store from './redux/redux'




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
store.dispatch({
        type: 'global', key: 'name', value: 'ltw'
})
store.dispatch({
        type: 'global', key: 'age', value: '18'
})
store.dispatch({
        type: 'global', key: 'name', value: 'yss'
})
store.dispatch({
        type: 'COMPLETE_TODO', index: 1
})
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