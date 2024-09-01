import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome to the Optimization Learning Platform</h1>
      <p className={styles.intro}>
        Optimization is a fundamental area of mathematics and engineering that involves identifying the best possible solution 
        to a problem within a set of defined constraints. This platform is designed to make learning about optimization more 
        approachable and engaging. Explore the different sections to learn about Single and Multi-Objective Optimization Problems.
      </p>

      <div className={styles.tabsContainer}>
        <Link to="/soop" className={styles.tab}>
          Learn about SOOP
        </Link>
        <Link to="/moop" className={styles.tab}>
          Learn about MOOP
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
