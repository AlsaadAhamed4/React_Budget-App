import React from 'react';
import { connect } from 'react-redux';
import { setTextFilterAction, sortByAmountAction, sortByDateAction, setStartDateAction, setEndDateAction } from '../Actions/FiltersAction';
import { DateRangePicker } from 'react-dates';

//this component is responsible for displaying input feild with value of applied filter

//here if we dont use onchange then we cant change the text value
//To set the state to specified filter we need to dispatch it store , we can do it by calling props.dispatch() in onchange
//here in line 15 i am able to write the state by using dispatch and a action 

class ExpensesListFilter extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDateAction(startDate));
        this.props.dispatch(setEndDateAction(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    render() {
        return (
            <div>
                <br />
                <label>Filter Used is:</label><input type='text' value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilterAction(e.target.value))
                }} />
                <br />
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    e.target.value === 'amount' ? this.props.dispatch(sortByAmountAction()) : this.props.dispatch(sortByDateAction())
                }}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="startDateFilter"
                    endDate={this.props.filters.endDate}
                    endDateId="endDateFilter"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=> false}
                    showClearDates={true}
                />
            </div>
        )
    }
}

const mapSateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapSateToProps)(ExpensesListFilter);