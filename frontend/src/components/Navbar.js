import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li
          className={`${styles.navItem} ${styles.dropdown}`}
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <span className={styles.navLink}>Optimize Functions</span>
          {showDropdown && (
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>
                <Link to="/functions" className={styles.navLink}>
                  Demo Functions
                </Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link to="/functions/custom" className={styles.navLink}>
                  Custom Input
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className={styles.navItem}>
          <Link to="/algorithms" className={styles.navLink}>Algorithms</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
