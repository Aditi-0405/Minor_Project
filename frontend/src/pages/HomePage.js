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
        approachable and engaging.
      </p>

      <div className={styles.features}>
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>What You'll Learn</h2>
          <p className={styles.featureDescription}>
            Our platform provides a comprehensive introduction to both Single Objective and Multi-Objective Optimization Problems.
            You'll gain insights into key concepts, standard test functions, and prominent optimization algorithms. The interactive 
            page will allow you to experiment with different functions and optimization techniques to see practical results.
          </p>
        </div>
        
        <div className={styles.feature}>
          <h2 className={styles.featureTitle}>Key Concepts</h2>
          <p className={styles.featureDescription}>
            - <strong>Single Objective Optimization (SOOP):</strong> Optimize a single criterion to find the best solution.
            <br />
            - <strong>Multi Objective Optimization (MOOP):</strong> Balance multiple conflicting objectives to find a set of optimal solutions.
            <br />
            - <strong>Optimization Algorithms:</strong> Explore various methods such as Genetic Algorithms, Particle Swarm Optimization, and Simulated Annealing.
          </p>
        </div>
      </div>

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
