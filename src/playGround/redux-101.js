import { createStore } from 'redux'

const store = createStore((state = { count: 0 }, action) => {  //in store the 2nd args is action 
    switch (action.type) {
        case 'INCREMENT':
            const increment = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + increment
            }
        case 'DECREMENT':
            const decrement = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrement
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
})


const unsubscribe = store.subscribe(() => {
    console.log(store.getState()); //When the store gets changed we are notified
});

//actions are the object that are sent to the store 
//only through actions we can change the state in redux
//actions are always dispatched to the store

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5      //add dynamic objects
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'RESET'
});


store.dispatch({
    type: 'DECREMENT',
    decrementBy: 4
});

store.dispatch({
    type: 'SET',
    count: 101
});
