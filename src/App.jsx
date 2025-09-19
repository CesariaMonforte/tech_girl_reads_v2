import { useState } from "react";
import "./App.css";
import AddBook from "./ui_components/AddBook_Button/AddBook";
import Book from "./ui_components/Book_Item/Book";
import data from "./data/books.json";

function App() {
    return (
        <>
            <main className='header_section'>
                <h1 className='title'>Tech Girl Reads</h1>
                <p className='slogan'>for the girls who love technology</p>
            </main>
            <div className='books_section'>
                <div className='books_section_excerpts'>
                    <h2 className='book_section_title'>Starter Girl Pack</h2>
                    <p className='book_section_description'>
                        This is a starter pack for new girls in technology.
                        Check them out with the learn more button
                    </p>
                </div>

                <div className='books_items'>
                    <div className='Book_add'>
                        <AddBook />
                    </div>
                    <div className='book_item'>
                        {data.map((book, index) => (
                            <Book
                                key={index}
                                image={book.image}
                                title={book.title}
                                subtitle={book.subtitle}
                                isbn13={book.isbn13}
                                price={book.price}
                                url={book.url}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <footer className='footer_section'>
                <p className='footer_section_copyrigt'>
                    © Cesaria Jose Monforte, 2025
                </p>
            </footer>
        </>
    );
}

export default App;
