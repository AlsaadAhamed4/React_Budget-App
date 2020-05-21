import { setTextFilterAction, sortByDateAction, sortByAmountAction, setEndDateAction, setStartDateAction } from '../../Actions/FiltersAction';
import moment from 'moment';


test('should setup setTextFilterAction', () => {
    const text='Alsaad'
    const action = setTextFilterAction(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
});

test('should setup default setTextFilterAction', () => {
    const action = setTextFilterAction();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

test('should setup sortByAmountAction', () => {
    const action = sortByAmountAction();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});

test('should setup sortByDateAction', () => {
    const action = sortByDateAction();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});

test('should setup SetStartDateAction', () => {
    const action = setStartDateAction(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        sDate: moment(0)
    })
});

test('should setup SetEndDateAction', () => {
    const action = setEndDateAction(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        eDate: moment(0)
    })
});