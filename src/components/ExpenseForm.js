import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from "react-dates";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();

console.log(now.format('MMM - Do - YYYY'));

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        amount: '',
        note: '',
        createdAt: moment(),
        calendarFocused: false
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) { //only numbers and 2 decimal numbers 
            this.setState(() => ({ amount }));
        }
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }));
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    render() {
        return (
            <div>
                <form>
                    <input type='text' placeholder='Description' autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                    <input type='text' placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange} />
                    <SingleDatePicker date={this.state.createdAt} onDateChange={this.onDateChange} focused={this.state.calendarFocused} onFocusChange={this.onFocusChange} numberOfMonths={1} isOutsideRange={()=> false} />
                    <textarea placeholder='Add a note for your expense (optional)' value={this.state.note} onChange={this.onNoteChange} />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

//single date picker to be able display all past days we use isOutsideRange={()=> false}
//to be able to display some days then we say isOutsideRange={(days)=> logic}