import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/functions" className={styles.navLink}>Functions</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/algorithms" className={styles.navLink}>Algorithms</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
