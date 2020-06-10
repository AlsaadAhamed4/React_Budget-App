import React from 'react';
import { connect } from 'react-redux';
import { setTextFilterAction, sortByAmountAction, sortByDateAction, setStartDateAction, setEndDateAction } from '../Actions/FiltersAction';
import { DateRangePicker } from 'react-dates';

//this component is responsible for displaying input feild with value of applied filter

//here if we dont use onchange then we cant change the text value
//To set the state to specified filter we need to dispatch it store , we can do it by calling props.dispatch() in onchange
//here in line 15 i am able to write the state by using dispatch and a action 

export class ExpensesListFilter extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        console.log(calendarFocused);
        this.setState(() => ({ calendarFocused }));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        e.target.value === 'amount' ? this.props.sortByAmount() : this.props.sortByDate()
    };

    render() {
        return (
            <div className='content-container'>
                <div className='input-group'>
                    <div className='input-group--item'>
                        <input className='text-input' placeholder='Search Expenses...' type='text' value={this.props.filters.text} onChange={this.onTextChange} />
                    </div>
                    <div className='input-group--item'>
                        <select className='select' value={this.props.filters.sortBy} onChange={this.onSortChange}>
                            <option value='date'>Date</option>
                            <option value='amount'>Amount</option>
                        </select>
                    </div>
                    <div className='input-group--item'>
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            startDateId="startDateFilter"
                            endDate={this.props.filters.endDate}
                            endDateId="endDateFilter"
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            showClearDates={true}
                        />
                    </div>



                </div>
            </div>
        )
    }
}

const mapSateToProps = (state) => {
    return {
        filters: state.filters
    }
};

const mapDispatchToProps = (dispatch, props) => (
    {
        setStartDate: (startDate) => dispatch(setStartDateAction(startDate)),
        setEndDate: (endDate) => dispatch(setEndDateAction(endDate)),
        setTextFilter: (value) => dispatch(setTextFilterAction(value)),
        sortByAmount: () => dispatch(sortByAmountAction()),
        sortByDate: () => dispatch(sortByDateAction())

    }
);

export default connect(mapSateToProps, mapDispatchToProps)(ExpensesListFilter);