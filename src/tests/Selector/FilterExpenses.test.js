import moment from 'moment';
import filterExpenses from '../../Selectors/FilterExpenses';

console.log(moment(0).subtract(4, 'days'));

const expense = [
    {
        description: 'Water Bill',
        note: 'Adding new Bill',
        amount: 2500,
        createdAt: moment(0)
    },
    {
        description: 'Gas Bill',
        note: 'Adding new Gas',
        amount: 1200,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        description: 'Eoin',
        note: 'Adding new Eoin',
        amount: 1500,
        createdAt: moment(0).add(4, 'days').valueOf()
    }
]

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = filterExpenses(expense, filters);
    expect(action).toEqual([expense[2], expense[0]])
});

test('should filter startDate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const action = filterExpenses(expense, filter);
    expect(action).toEqual([expense[2], expense[0]])
})

test('should filter EndDate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2,'days')
    }
    const action = filterExpenses(expense, filter);
    expect(action).toEqual([expense[0], expense[1]])
})

test('should sort by amount', () => {
    const filter = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = filterExpenses(expense, filter);
    expect(action).toEqual([expense[0], expense[2],expense[1]])
})

test('should sort by date', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = filterExpenses(expense, filter);
    expect(action).toEqual([expense[2], expense[0],expense[1]])
})

