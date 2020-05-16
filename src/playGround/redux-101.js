import { createStore } from 'redux'


//action generators for increment

const increment = ({ incrementBy = 1 } = {}) => (  //if we dont define increment then by default it will one and one more default {} bcz we are passing incrementBy in each dispatch
    {
        type: 'INCREMENT',
        incrementBy
    }
);

//action generators for decrement

const decrement = ({ decrementBy = 1 } = {}) => (
    {
        type: 'DECREMENT',
        decrementBy

    }
);

//action genrators for reset

const reset = () => (
    {
        type: 'RESET'
    }
);

//action genrators for reset

const set = ({ count = 1 } = {}) => ( //by defualt to 1 if not passed any parameters then empty object {}.
    {
        type: 'SET',
        count
    }
);

//store
const store = createStore((state = { count: 0 }, action) => {  //in store the 2nd args is action 
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
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

/* store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5      //add dynamic objects
}); */

store.dispatch(increment({ incrementBy: 5 })); //add dynamic objects

store.dispatch(increment()); //by default one (count = 6)

/* store.dispatch({
    type: 'DECREMENT',
    decrementBy: 4
}); */
 
store.dispatch(decrement()); //(count = 5)

store.dispatch(decrement({ decrementBy: 4 })); //(count = 1)

store.dispatch(reset()); //(count = 0)

store.dispatch(set()); //(count = 1)


/* store.dispatch({
    type: 'SET',
    count: 101
}); */
