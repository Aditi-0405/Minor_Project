import React from 'react';
import styles from '../styles/MOOPPage.module.css';
import img1 from '../images/moop_procedure.png';
import img2 from '../images/pareto2.png';
import img5 from '../images/pareto5.jpg';
import img6 from '../images/pareto6.png';
import img7 from '../images/weighted_sum.png'; // Placeholder for the Weighted Sum Approach image

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
      <div className={styles.imageContainer}>
        <img src={img1} alt="MOOP Procedure" className={styles.image} />
        <p className={styles.imageCaption}>Schematic of an ideal multi-objective optimization procedure</p>
      </div>

      <h2 className={styles.subHeading}>What is the Pareto Front?</h2>
      <p className={styles.description}>
        The Pareto front, named after the economist Vilfredo Pareto, is a fundamental concept in multi-objective optimization,
        representing a curve (or surface in higher dimensions) of optimal trade-offs between conflicting objectives.
        Each point on the Pareto front is considered Pareto efficient or non-dominated, meaning that no improvement
        in one objective can be achieved without sacrificing at least one other objective. This concept provides decision-makers
        with a spectrum of equally optimal solutions, rather than a single "best" answer, emphasizing the inherent trade-offs
        in real-world scenarios.
      </p>
      <div className={styles.paretoSection}>
        <div className={styles.imageContainer}>
          <img src={img2} alt="Pareto Front Visualization" className={styles.image} />
          <p className={styles.imageCaption}>Visualization of the Pareto front in a two-objective optimization problem.</p>
        </div>
        <p className={styles.description}>
          For example, consider optimizing cost and quality:
          <ul>
            <li>A solution on the Pareto front might have low cost but average quality.</li>
            <li>Another solution might have high quality but higher cost.</li>
          </ul>
          Both solutions are valid and non-dominated because improving one objective (e.g., reducing cost) would worsen the other (e.g., reducing quality).
        </p>
      </div>

      <h2 className={styles.subHeading}>Weighted Sum Approach</h2>
      <p className={styles.description}>
        The Weighted Sum Approach is a common method used to solve multi-objective optimization problems by converting multiple
        objectives into a single objective. This is achieved by assigning a weight to each objective, representing its relative
        importance, and summing them up. The resulting objective function is:
      </p>
      <div className={styles.formula}>
        <p className={styles.formulaText}>
          Objective Function = w<sub>1</sub> * f<sub>1</sub>(x) + w<sub>2</sub> * f<sub>2</sub>(x) + ... + w<sub>n</sub> * f<sub>n</sub>(x)
        </p>
      </div>
      <p className={styles.description}>
        Where w<sub>i</sub> represents the weight for objective f<sub>i</sub>(x). By varying the weights, different trade-offs
        can be explored, and points along the Pareto front can be identified.
      </p>
      <div className={styles.imageContainer}>
        <img src={img7} alt="Weighted Sum Approach" className={styles.image} />
        <p className={styles.imageCaption}>Illustration of the Weighted Sum Approach in a two-objective optimization problem</p>
      </div>
      <p className={styles.description}>
        This method is simple and intuitive but may not capture all solutions on the Pareto front, particularly in problems with
        non-convex Pareto fronts. Nevertheless, it is widely used due to its computational efficiency and ease of implementation.
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
        <div className={styles.imageContainer}>
          <img src={img5} alt="Pareto Front Example" className={styles.image} />
          <p className={styles.imageCaption}>Pareto front for speed and quality trade-off</p>
        </div>
        <h4 className={styles.detailHeading}>Logic</h4>
        <p>
          The objective functions are defined as:
          <ul>
            <li>Minimize cost, represented by a function of material, labor, and overhead expenses.</li>
            <li>Maximize quality, measured by metrics like durability, precision, or customer satisfaction.</li>
          </ul>
          MOOP techniques like Weighted Sum or Evolutionary Algorithms (e.g., NSGA-II) are used to generate the Pareto front.
        </p>
        <h4 className={styles.detailHeading}>Applications</h4>
        <p>
          This approach is widely used in automotive design (e.g., balancing manufacturing cost with vehicle safety standards),
          supply chain management (e.g., reducing costs while improving delivery quality), and electronics manufacturing.
        </p>
      </div>
      <div className={styles.example}>
        <h3 className={styles.exampleTitle}>Efficiency and Pareto Optimality</h3>
        <p className={styles.exampleDescription}>
          Efficiency in the context of optimization refers to achieving the best possible outcome while minimizing resource usage.
          It is a measure of how effectively an objective (such as cost, time, energy, or effort) is utilized to achieve desired results.
          In multi-objective optimization, efficiency often involves balancing competing objectives to maximize benefits across all criteria.
        </p>
        <div className={styles.imageContainer}>
          <img src={img6} alt="Pareto Efficiency" className={styles.image} />
          <p className={styles.imageCaption}>Pareto Efficiency and Optimality</p>
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
