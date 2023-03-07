import React, { useState, useReducer } from 'react';
import reducer from './Reducer';

const booksData = [
    { id: 1, name: 'Pather panchal' },
    { id: 2, name: 'Padma Nadir Majhi' },
    { id: 3, name: 'Srikanta' },
]

const Modal = ({ modalText }) => {
    return (<p>{modalText}</p>);
}

const initialState = {
    books: booksData,
    isModalOpen: false,
    modalText: ""
}


const UseReducer = () => {
    // const [books, setBooks] = useState(booksData);

    // const [modalText, setModalText] = useState("");
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookState, dispatch] = useReducer(reducer, initialState);
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