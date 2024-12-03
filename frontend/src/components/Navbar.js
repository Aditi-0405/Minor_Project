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
          <Link to="/functions" className={styles.navLink}>Demo Functions</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/functions/custom" className={styles.navLink}>Custom Input</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/algorithms" className={styles.navLink}>Algorithms</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/resources" className={styles.navLink}>Other Resources</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
