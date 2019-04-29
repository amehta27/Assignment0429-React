const redux = require('redux')

const initialState={
    counter:10,
    cartItems : [],
    isAuthenticated : false
}

//create a reducer

let rootReducer = (state = initialState,action) => {
    if (action.type == "DEC_COUNTER"){
       return{
           ...state,
           counter: state.counter - action.value
      }
   } else if(action.type == "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    }

}
  return state
}
//create a store

const store = redux.createStore(rootReducer)
console.log(store.getState())
// dispatching actions
store.dispatch({
    type: 'DEC_COUNTER',
    value: 5
  })

  console.log(store.getState())

store.dispatch({
    type: 'INC_COUNTER'
  })
  
  console.log("Global state after dispatch..")
  console.log(store.getState())  