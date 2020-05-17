export const setTextFilterAction = (text = "") => (
    {
        type: 'SET_TEXT_FILTER',
        text
    }
)

export const sortByAmountAction = () => (
    {
        type: 'SORT_BY_AMOUNT',
    }
);

export const sortByDateAction = () => (
    {
        type: 'SORT_BY_DATE',
    }
);

export const setStartDateAction = (sDate) => (
    {
        type: 'SET_START_DATE',
        sDate
    }
);

export const setEndDateAction = (eDate) => (
    {
        type: 'SET_END_DATE',
        eDate
    }
);