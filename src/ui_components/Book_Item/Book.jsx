import "./Book.css";

export default function Book({ image, title, subtitle, isbn13, price, url }) {
    return (
        <div className='book_container'>
            <img
                src={image}
                alt={title}
                className='book_image'
            />
            <div className='book_content'>
                <p className='book_price'>{price}</p>
                <a
                    href={url}
                    target='_blank'
                    className='book_link'>
                    Learn more
                </a>
            </div>
        </div>
    );
}
