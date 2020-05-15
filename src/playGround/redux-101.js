import { createStore } from 'redux'

const store = createStore((state = { count: 0 },action) => {  //in store the 2nd args is action 
    switch(action.type){
        case 'INCREMENT':
            return{
                count : state.count + 1
            }
        case 'DECREMENT':
            return{
                count : state.count - 1
            }
        case 'RESET':
            return{
                count : 0
            }
        default:
            return state;    
    }
})


console.log(store.getState());

//actions are the object that are sent to the store 
//only through actions we can change the state in redux
//actions are always dispatched to the store

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type:'RESET'
});

store.dispatch({
    type: 'INCREMENT'
});

console.log(store.getState()); //here we have changed the state 