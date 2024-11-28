import React from 'react';
import styles from '../styles/MOOPPage.module.css';

const MOOPPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Multi Objective Optimization Problems (MOOP)</h1>
      <p className={styles.description}>
        Multi Objective Optimization Problems (MOOP) involve optimizing multiple conflicting objectives simultaneously. 
        Unlike Single Objective Optimization Problems (SOOP), where there is only one objective to consider, MOOP requires 
        finding a balance or trade-off between different objectives. The result is a set of optimal solutions, known as the 
        Pareto front, where no solution is better in all objectives compared to another.
      </p>

      <h2 className={styles.subHeading}>Key Concepts</h2>
      <ul className={styles.keyConcepts}>
        <li><strong>Multiple Objectives:</strong> Problems involving more than one objective function that need to be optimized simultaneously.</li>
        <li><strong>Pareto Front:</strong> The set of all non-dominated solutions, representing trade-offs between conflicting objectives.</li>
        <li><strong>Trade-offs:</strong> The compromises made between different objectives, where improving one may worsen another.</li>
        <li><strong>Decision Making:</strong> Selecting an optimal solution from the Pareto front based on preferences or additional criteria.</li>
      </ul>

      <h2 className={styles.subHeading}>Examples and Detailed Explanations</h2>

      <div className={styles.example}>
        <h3 className={styles.exampleTitle}>Optimizing Cost and Quality</h3>
        <p className={styles.exampleDescription}>
          In manufacturing, the goal is often to minimize production costs while maximizing product quality. These objectives are 
          usually conflicting, as higher quality often requires higher costs. MOOP helps identify trade-offs between cost and quality, 
          leading to solutions on the Pareto front.
        </p>
        <h4 className={styles.detailHeading}>Logic</h4>
        <p>
          The objective functions are defined as:
          <ul>
            <li>Minimize cost, represented by a function of material, labor, and overhead expenses.</li>
            <li>Maximize quality, measured by metrics like durability, precision, or customer satisfaction.</li>
          </ul>
          MOOP techniques like Weighted Sum or Evolutionary Algorithms (e.g., NSGA-II) are used to generate the Pareto front.
        </p>
        <h4 className={styles.detailHeading}>Flowchart</h4>
        <div className={styles.flowchart}>
          <p>[Start] → Define Cost and Quality Functions → Identify Constraints → Apply MOOP Algorithm → Generate Pareto Front → Evaluate Trade-offs → [End]</p>
        </div>
        <h4 className={styles.detailHeading}>Applications</h4>
        <p>
          This approach is widely used in automotive design (e.g., balancing manufacturing cost with vehicle safety standards), 
          supply chain management (e.g., reducing costs while improving delivery quality), and electronics manufacturing.
        </p>
      </div>

      <div className={styles.example}>
        <h3 className={styles.exampleTitle}>Balancing Speed and Accuracy</h3>
        <p className={styles.exampleDescription}>
          In machine learning, developing models that balance computational speed with prediction accuracy is a common challenge. 
          Faster models may compromise accuracy, while highly accurate models may require significant computational resources.
        </p>
        <h4 className={styles.detailHeading}>Logic</h4>
        <p>
          The objective functions are defined as:
          <ul>
            <li>Minimize computational time, measured by metrics like training or inference time.</li>
            <li>Maximize accuracy, often represented by metrics like precision, recall, or F1 score.</li>
          </ul>
          Techniques like Multi-Objective Particle Swarm Optimization (MOPSO) or Pareto Simulated Annealing are used to explore trade-offs.
        </p>
        <h4 className={styles.detailHeading}>Flowchart</h4>
        <div className={styles.flowchart}>
          <p>[Start] → Define Speed and Accuracy Objectives → Define Dataset and Constraints → Select MOOP Algorithm → Generate Pareto Front → Choose Optimal Model → [End]</p>
        </div>
        <h4 className={styles.detailHeading}>Applications</h4>
        <p>
          This balance is crucial in real-time applications like autonomous driving, where models must quickly analyze and react 
          to surroundings while maintaining high accuracy to ensure safety.
        </p>
      </div>

      <div className={styles.example}>
        <h3 className={styles.exampleTitle}>Optimizing Energy Efficiency and Performance</h3>
        <p className={styles.exampleDescription}>
          In systems engineering, optimizing energy efficiency while maintaining high system performance is a significant challenge. 
          These objectives are often conflicting, as improving one may reduce the other.
        </p>
        <h4 className={styles.detailHeading}>Logic</h4>
        <p>
          The objectives are:
          <ul>
            <li>Maximize energy efficiency, defined as the ratio of useful output to energy input.</li>
            <li>Maximize performance, measured by throughput, speed, or reliability.</li>
          </ul>
          Methods like Multi-Objective Genetic Algorithms (MOGA) or Pareto-based optimization frameworks are applied.
        </p>
        <h4 className={styles.detailHeading}>Flowchart</h4>
        <div className={styles.flowchart}>
          <p>[Start] → Define Efficiency and Performance Metrics → Identify Constraints → Apply MOOP Algorithm → Evaluate Pareto Solutions → Select Optimal Design → [End]</p>
        </div>
        <h4 className={styles.detailHeading}>Applications</h4>
        <p>
          This is widely applied in renewable energy systems, data center optimization (balancing power usage with computational load), 
          and electric vehicle design (maximizing battery life while enhancing performance).
        </p>
      </div>
    </div>
  );
};

export default MOOPPage;
