import React, { useState } from 'react';
import Product from "@/components/Product";
import booksData from '@/components/Data/books';
import Sidebar from '@/components/Sidebar'; 
import Button from '@/components/Button'; 
import styles from './Store.module.css'; 

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showBooks, setShowBooks] = useState(false); 
  const [showButton, setShowButton] = useState(false); 

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowBooks(true); 
    setShowButton(true); 
  };

  const filteredBooks = selectedCategory === 'All' || selectedCategory === null
    ? booksData
    : booksData.filter(book => {
        return book.course.startsWith(selectedCategory);
      });

  return (
    <div className={styles.homeContainer}>
      <Sidebar handleCategoryClick={handleCategoryClick} />
      <div className={styles.products}>
        {showBooks && filteredBooks.map((book, index) => ( 
          <div key={book.title} className={styles.productWrapper}>
            <Product book={book} />
          </div>
        ))}
      </div>
      {showButton && (
        <div className={styles.buttonContainer}>
          <Button/> 
        </div>
      )}
    </div>
  );
};

export default Home;
