import { addExpenseAction, editExpenseAction, removeExpenseAction, startAddExpenseAction, setExpense, startSetExpenseAction } from '../../Actions/ExpenseAction';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import { testExpenseData } from '../TestData/TestData';
import { act } from 'react-test-renderer';

const createMockStore = configureMockStore([thunk]);


/* test('Should set-up remove expense action object', () => {
    const action = removeExpenseAction({ id: 'abc123' });
    //here equal checks the properties of object
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    });
});

 test('Should set-up edit expense action object', () => {
    const action = editExpenseAction('abc123', { description: 'Hello', amount: 2500 });
    //here equal checks the properties of object
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            description: 'Hello',
            amount: 2500
        }
    });
}); */

/* Old test case of action without DB
test('Should set-up default Add expense action object', () => {
    const action = addExpenseAction();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String),
        }
    })
});  end of old test cases*/

let expensesData = {};

beforeEach((done) => {
    testExpenseData.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    });
    database.ref('expenses').set(expensesData).then(() => done());
});



test('Should set-up Add expense action object', () => {
    const expenseData = { description: 'Alsaad', note: 'Test', amount: 1400, createdAt: 10000, id: 1 };
    const action = addExpenseAction(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenseData
    })
});

//works fine 
// test('Should add expense to DB and store', (done) => {
//     const expenseData = { description: 'Alsaad', note: 'Test', amount: 1400, createdAt: 10000 };
//     const store = createMockStore();
//     //since startAddExpenseActions returns a promise we can have promise chaining
//     store.dispatch(startAddExpenseAction(expenseData)).then(() => {
//         const action = store.getActions();
//         //testing store
//         expect(action[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseData
//             }
//         });
//         //testing DB
//         database.ref(`expense/${action[0].expense.id}`).once('value', (snapshot) => {
//             expect(snapshot.val()).toEqual(expenseData);
//         });
//         done(); // for asynchronous operations
//     });
// });

//works fine
/* test('should add expense to DB and store with default values', (done) => {
    const expenseData = { description: '', note: '', amount: 0, createdAt: 0 };
    const store = createMockStore();
    //test store
    store.dispatch(startAddExpenseAction({})).then(() => {
        const action = store.getActions();
        //testing store
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        //testing DB
        database.ref(`expense/${action[0].expense.id}`).once('value', (snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
        });
        done(); // for asynchronous operations
    });
}); */


//testing setExpense Action generator (dispatch)

test('should test setExpense action dispatcher', () => {
    const action = setExpense(testExpenseData[0]);
    expect(action).toEqual({
        type: 'SET_EXPENSE',
        expense: testExpenseData[0]
    });
});

test('should fetch the expenses from firbase', () => {
    console.log(expensesData);
    const store = createMockStore();
    store.dispatch(startSetExpenseAction()).then(() => {
        const action = store.getActions();
        //testing store
        expect(action[0]).toEqual({
            type: 'SET_EXPENSE',
            expense: expensesData //from we store in Db before each test cases
        });
        done();
    });
});

