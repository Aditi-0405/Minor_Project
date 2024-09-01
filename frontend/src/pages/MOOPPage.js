import React from 'react';
import styles from '../styles/MOOPPage.module.css'; 

const MOOPPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Multi Objective Optimization Problems (MOOP)</h1>
      <p className={styles.description}>
        Multi Objective Optimization Problems (MOOP) involve optimizing multiple conflicting objectives simultaneously. 
        Unlike Single Objective Optimization Problems (SOOP), where there is only one objective to consider, MOOP requires 
        finding a balance or trade-off between different objectives. This often leads to a set of optimal solutions known 
        as the Pareto front, where no solution is better in all objectives compared to another.
      </p>
      <h2 className={styles.subHeading}>Key Concepts</h2>
      <ul className={styles.keyConcepts}>
        <li><strong>Multiple Objectives:</strong> Problems involving more than one objective function that need to be optimized simultaneously.</li>
        <li><strong>Pareto Front:</strong> The set of all non-dominated solutions, representing trade-offs between conflicting objectives.</li>
        <li><strong>Trade-offs:</strong> The compromises made between different objectives, where improving one may worsen another.</li>
        <li><strong>Decision Making:</strong> Selecting an optimal solution from the Pareto front based on preferences or additional criteria.</li>
      </ul>
      <h2 className={styles.subHeading}>Examples</h2>
      <div className={styles.examples}>
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Optimizing Cost and Quality</h3>
          <p className={styles.exampleDescription}>
            In manufacturing, optimizing both cost and quality of a product can be challenging. The goal is to find solutions 
            that balance cost-effectiveness with high quality, leading to a Pareto front where both objectives are considered.
          </p>
        </div>
        <div className={styles.example}>
          <h3 className={styles.exampleTitle}>Balancing Speed and Accuracy</h3>
          <p className={styles.exampleDescription}>
            In machine learning, finding a model that balances speed (computational efficiency) and accuracy can be complex. 
            The Pareto front represents models where improvements in one aspect may result in trade-offs in the other.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MOOPPage;
