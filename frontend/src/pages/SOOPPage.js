import React from 'react';
import styles from '../styles/SOOPPage.module.css';

const SOOPPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Single Objective Optimization Problems (SOOP)</h1>
      <p className={styles.description}>
        Single Objective Optimization Problems (SOOP) involve optimizing a single criterion or objective function. 
        The goal is to find the best possible solution that either maximizes or minimizes the objective function 
        within a defined set of constraints. These problems are critical in various fields like engineering, 
        economics, and operations research.
      </p>

      <h2 className={styles.subHeading}>Key Concepts</h2>
      <ul className={styles.keyConcepts}>
        <li><strong>Objective Function:</strong> The function that needs to be optimized, either maximized or minimized.</li>
        <li><strong>Constraints:</strong> Conditions that the solution must satisfy, which can be equalities or inequalities.</li>
        <li><strong>Feasible Region:</strong> The set of all possible solutions that satisfy the constraints, forming the search space.</li>
        <li><strong>Optimal Solution:</strong> The best solution that provides the highest (or lowest) value of the objective function within the feasible region.</li>
      </ul>

      <h2 className={styles.subHeading}>Examples and Detailed Explanations</h2>

      <div className={styles.example}>
        <h3 className={styles.exampleTitle}>Minimizing Cost</h3>
        <p className={styles.exampleDescription}>
          In industries such as manufacturing, one common objective is to minimize production costs while meeting quality and production standards. 
          The objective function in this case is the total cost of production, and the constraints might include factors like production capacity, 
          material availability, and quality thresholds.
        </p>
        <h4 className={styles.detailHeading}>Logic</h4>
        <p>
          The logic involves defining a cost function, which could be a combination of raw material costs, labor costs, and overhead expenses. 
          Using optimization techniques like linear programming, you find the optimal allocation of resources that minimizes total cost.
        </p>
        <h4 className={styles.detailHeading}>Flowchart</h4>
        <div className={styles.flowchart}>
          <p>[Start] → Define Objective Function → Define Constraints → Choose Optimization Algorithm → Solve for Minimum → Validate Solution → [End]</p>
        </div>
        <h4 className={styles.detailHeading}>Applications</h4>
        <p>
          Minimizing costs is widely used in supply chain optimization, budgeting, project planning, and process improvement. For example, 
          logistics companies use cost-minimization strategies to optimize delivery routes while reducing fuel and time costs.
        </p>
      </div>

      <div className={styles.example}>
        <h3 className={styles.exampleTitle}>Maximizing Efficiency</h3>
        <p className={styles.exampleDescription}>
          In engineering and operations, maximizing efficiency often refers to achieving the highest possible output with the least 
          amount of input or resource usage. The objective function represents the efficiency metric, such as throughput, energy efficiency, or time utilization.
        </p>
        <h4 className={styles.detailHeading}>Logic</h4>
        <p>
          Efficiency can be represented as a ratio (e.g., output/input). The goal is to maximize this ratio while adhering to constraints like resource 
          availability, time limits, or technical specifications. Techniques like gradient ascent or genetic algorithms are commonly employed.
        </p>
        <h4 className={styles.detailHeading}>Flowchart</h4>
        <div className={styles.flowchart}>
          <p>[Start] → Identify Efficiency Metric → Define Input and Output Variables → Set Constraints → Apply Optimization Technique → Solve → [End]</p>
        </div>
        <h4 className={styles.detailHeading}>Applications</h4>
        <p>
          This is widely used in energy systems, production planning, and traffic management. For instance, optimizing the efficiency of 
          a power plant involves maximizing energy output while minimizing fuel consumption and emissions.
        </p>
      </div>

      <div className={styles.example}>
        <h3 className={styles.exampleTitle}>Design Optimization</h3>
        <p className={styles.exampleDescription}>
          In product design, single objective optimization helps in improving performance, reducing weight, or minimizing costs. The objective 
          function depends on the design criteria, such as durability, weight, or material usage.
        </p>
        <h4 className={styles.detailHeading}>Logic</h4>
        <p>
          Designers use optimization to balance trade-offs between competing factors. For example, a car manufacturer might aim to minimize the 
          weight of a component while ensuring it meets safety standards. Computational techniques like finite element analysis are often integrated 
          into the optimization process.
        </p>
        <h4 className={styles.detailHeading}>Flowchart</h4>
        <div className={styles.flowchart}>
          <p>[Start] → Define Design Parameters → Create Objective Function → Set Design Constraints → Apply Algorithm → Optimize → [End]</p>
        </div>
        <h4 className={styles.detailHeading}>Applications</h4>
        <p>
          This approach is used in aerospace, automotive, and civil engineering design. Examples include optimizing the shape of an airplane wing 
          for better aerodynamics or designing a bridge to minimize material use while maximizing load capacity.
        </p>
      </div>
    </div>
  );
};

export default SOOPPage;
