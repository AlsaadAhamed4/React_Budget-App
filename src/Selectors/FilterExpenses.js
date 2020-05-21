import moment from 'moment';

//since we are using moment for comparing dates so , expense.createdAt >= startDate is no longer valid 
//we should use moment methods.
//comparing numbers to moment instances

const filterExpenses = (expenses, { text, sortBy, startDate, endDate }) => (
    expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt); //based on doc of moment 
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true; //here if the createdAt is greater than the startDate or if we did mention the start date that is undefined then return true 
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt > b.createdAt ? -1 : 1;  //if a should be first then -1 , if b then 1
        }
        else if (sortBy === 'amount') {
            return a.amount > b.amount ? -1 : 1;
        }

    })
);

export default filterExpenses;