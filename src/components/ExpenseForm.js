import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from "react-dates";
import 'react-dates/initialize';

const now = moment();

console.log(now.format('MMM - Do - YYYY'));

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description: props.editData ? props.editData.description : '',
            amount: props.editData ? (props.editData.amount / 100).toString() : '',
            note: props.editData ? props.editData.note : '',
            createdAt: props.editData ? moment(props.editData.createdAt) : moment(),
            calendarFocused: false,
            errMsg: '',
            buttonName :  props.editData ? 'Edit Expense' : 'Add Expense'
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { //only numbers and 2 decimal numbers 
            this.setState(() => ({ amount }));
        }
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description && !this.state.amount) {
            this.setState(() => ({ errMsg: 'Please Specify Description & Amount' }));
        }
        else if (!this.state.description) {
            this.setState(() => ({ errMsg: 'Please Specify Description' }));
        }
        else if (!this.state.amount) {
            this.setState(() => ({ errMsg: 'Please Specify Amount' }));
        }
        else {
            this.setState(() => ({ errMsg: '' }));
            //since we use this form for edit page as well so we cannot dispatch a action here. We use a prop on call to be used by both edit and create
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.errMsg && <p>{this.state.errMsg}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='Description' autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                    <input type='text' placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange} />
                    <SingleDatePicker date={this.state.createdAt} onDateChange={this.onDateChange} focused={this.state.calendarFocused} onFocusChange={this.onFocusChange} numberOfMonths={1} isOutsideRange={() => false} />
                    <textarea placeholder='Add a note for your expense (optional)' value={this.state.note} onChange={this.onNoteChange} />
                    <button>{this.state.buttonName}</button>
                </form>
            </div>
        )
    }
}

//single date picker to be able display all past days we use isOutsideRange={()=> false}
//to be able to display some days then we say isOutsideRange={(days)=> logic}