import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ handleCategoryClick }) => {
  return (
    <div className={styles.sidebarContainer}>
      <h2 className={styles.sideText} onClick={() => handleCategoryClick('All')}>All</h2>
      <h2 className={styles.sideText} onClick={() => handleCategoryClick('COMM')}>Communications</h2>
      <h2 className={styles.sideText} onClick={() => handleCategoryClick('COMP')}>Computer Science</h2>
      <h2 className={styles.sideText} onClick={() => handleCategoryClick('MKTG')}>Marketing</h2>
      <h2 className={styles.sideText} onClick={() => handleCategoryClick('MATH')}>Math</h2>
    </div>
  );
};

export default Sidebar;
