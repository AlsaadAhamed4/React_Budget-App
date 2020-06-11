

export const ExpensesList = (props) => (
    <div className='content-container'>
        <div className='list-header'>
            <div className='show-for-mobile'><p>Expenses</p></div>
            <div className='show-for-desktop'>Expense</div>
            <div className='show-for-desktop'><p>Amount</p></div>
        </div>
        <div className='list-item-body'>
            {
                props.expenses.length === 0 ? (
                    <span className='list-item list-item--message'>No expenses found, Please add one.</span>
                ) :
                    (
                        props.expenses.map((exp) => {
                            return <ExpensesListItem {...exp} key={exp.id} />
                        })
                    )
            }
        </div>
    </div>
);

const ExpensesListItem = ({ description, amount, createdAt, id }) => (
    <Link className='list-item' to={`/edit/${id}`}>
        <div>
            <h1 className='list-item__title'>{description}</h1>
            <span className='list-item__sub-title'>{moment(createdAt).format('MMMM Do, YYYY')}</span>
        </div>
        <h3 className='list-item__data'>{numeral(amount / 100).format('$0,0.00')}</h3>
    </Link>
);