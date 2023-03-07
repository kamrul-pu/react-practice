import React, { useState, useReducer } from 'react'

const booksData = [
    { id: 1, name: 'Pather panchal' },
    { id: 2, name: 'Padma Nadir Majhi' },
    { id: 3, name: 'Srikanta' },
]

const Modal = ({ modalText }) => {
    return (<p>{modalText}</p>);
}

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
const UseReducer = () => {
    // const [books, setBooks] = useState(booksData);

    // const [modalText, setModalText] = useState("");
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookState, dispatch] = useReducer(reducer, {
        books: booksData,
        isModalOpen: false,
        modalText: ""
    })
    const [bookName, setBookName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: new Date().getTime().toString(), name: bookName };
        dispatch({ type: 'ADD', payload: newBook });

        // bookState.setIsModalOpen(true);
        // bookState.setModalText("Book is added");
    }
    const removeBook = (id) => {
        dispatch({ type: 'REMOVE', payload: id });
    }
    return (

        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="" id="" value={bookName} onChange={(e) => {
                    setBookName(e.target.value);
                }} />
                <input type="submit" value="Add New" />
            </form>
            <h3>Book List</h3>
            {bookState.books.map((book) => {
                return <li key={book.id}>{book.name}<button onClick={() => removeBook(book.id)}>Remove</button></li>
            })}
            {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
        </div>
    )
}

export default UseReducer