const InitialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }]
};

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case "Addtransaction":
            return { ...state, transactions: [...state.transactions, action.payload] }
        case "Deletetransaction":
            return { ...state, transactions: [...state.transactions.filter((e) => e.id !== action.payload.id)] }
        default:
            return state;
    }
}
export default reducer;