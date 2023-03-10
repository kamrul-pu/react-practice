const reducer = (state, action) => {
    //action.type action.payload
    if (action.type === 'ADD') {
        const allBooks = [...state.books, action.payload];
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: "New Book Added"
        }
    }
    if (action.type === "REMOVE") {
        //remove books
        const filteredBooks = [...state.books].filter(book => book.id !== action.payload);
        return {
            ...state,
            books: filteredBooks,
            isModalOpen: true,
            modalText: "Book is removed",
        }
    }
    return state;
}

export default reducer;