import filtersReducer from '../../Reducers/FiltersReducers';
import moment from 'moment';

test('should setup defaut filter values', () => {
    const result = filtersReducer(undefined, { type: '@@INIT' })
    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should setup sort-by amount', () => {
    const result = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(result.sortBy).toBe('amount')
});

test('should setup sort-by date', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = {
        type: 'SORT_BY_DATE'
    }
    const result = filtersReducer(currentState, action)
    expect(result.sortBy).toBe('date')
});

test('should setup filter by text', () => {

    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'bill'
    }
    const result = filtersReducer(undefined, action)
    expect(result.text).toBe('bill')
})

test('should setup start date', () => {
    const sDate = moment();
    const action = {
        type: 'SET_START_DATE',
        sDate
    }
    const result = filtersReducer(undefined, action)
    expect(result.startDate).toEqual(sDate)
})

test('should setup end date', () => {
    const eDate = moment();
    const action = {
        type: 'SET_END_DATE',
        eDate
    }
    const result = filtersReducer(undefined, action)
    expect(result.endDate).toEqual(eDate)
})