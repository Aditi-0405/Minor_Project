import React from 'react';
import styles from '../styles/SOOPPage.module.css';

const SOOPPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Single Objective Optimization Problems (SOOP)</h1>
      <p className={styles.description}>
        Single Objective Optimization Problems (SOOP) involve optimizing a single criterion or objective function. 
        The goal is to find the best possible solution that either maximizes or minimizes the objective function 
        within a defined set of constraints. This type of problem focuses on optimizing one aspect of a system 
        while keeping other factors constant.
      </p>
      <h2 className={styles.subHeading}>Key Concepts</h2>
      <ul className={styles.keyConcepts}>
        <li><strong>Objective Function:</strong> The function that needs to be optimized, either maximized or minimized.</li>
        <li><strong>Constraints:</strong> Conditions that the solution must satisfy.</li>
        <li><strong>Feasible Region:</strong> The set of all possible solutions that satisfy the constraints.</li>
        <li><strong>Optimal Solution:</strong> The best solution that provides the highest (or lowest) value of the objective function.</li>
      </ul>
      <h2 className={styles.subHeading}>Examples</h2>
      <div className={styles.examples}>
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Minimizing Cost</h3>
          <p className={styles.exampleDescription}>
            In manufacturing, one might want to minimize production costs while meeting quality standards. The 
            objective function could represent total cost, and the constraints would include production limits and 
            quality requirements.
          </p>
        </div>
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Maximizing Efficiency</h3>
          <p className={styles.exampleDescription}>
            For a given process, you might want to maximize efficiency, such as energy usage or throughput. The 
            objective function represents efficiency, and constraints could include physical limitations or resource availability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SOOPPage;
