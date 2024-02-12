import React from 'react';
import styles from './Product.module.css';

const Product = ({ book }) => {
  return (
    <div className={styles.positioner}>
        <div className={styles.productContainer}>
            <img className={styles.productImage} src={`/books/${book.image}`} alt={book.title} />
            <h3 className={styles.bookCourse}>{book.course}</h3>
            <div className={styles.titleContainer}><h4 className={styles.bookTitle}>{book.title}</h4></div>
        </div>
    </div>
  );
};

export default Product;
