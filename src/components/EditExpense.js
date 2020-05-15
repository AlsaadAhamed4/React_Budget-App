import React from 'react';



const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <p>Edit Expense {props.match.params.id}</p>
        </div>
    )
};

export default EditExpensePage;
