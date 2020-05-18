//Connecting the component to state so that it  can access the state.
//alsp specifiying the what to be connected 
//connect syntax is connect(function with state as args)(Name of Component to connect)

const ConnectedExpensesList = connect((state) => {
    return {
        expenses: state.expenses //this can be accessed as props in connected component in my case 'ExpenseList'
    };
})(ExpensesList);

export default ConnectedExpensesList; 