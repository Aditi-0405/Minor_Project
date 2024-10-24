import React, { useState } from 'react';
import styles from '../styles/AlgorithmsPage.module.css';

const algorithmsSOOP = [
  {
    name: "Genetic Algorithm (GA)",
    description: `Genetic Algorithm (GA) is a search heuristic that mimics the process of natural selection. It operates on a population of potential solutions and evolves them using selection, crossover (recombination), and mutation.`,
    theory: `Genetic Algorithms are inspired by Charles Darwin’s theory of evolution. The key idea is to maintain a population of candidate solutions and evolve them using genetic operators.`,
    pseudoCode: `1. Initialize a population of potential solutions.
2. Evaluate the fitness of each solution.
3. Select the best solutions based on fitness.
4. Apply crossover and mutation to generate new solutions.
5. Repeat the process until convergence or a stopping criterion is met.`
  },
  {
    name: "Simulated Annealing (SA)",
    description: `Simulated Annealing (SA) is inspired by the annealing process in metallurgy. It is a probabilistic optimization algorithm that searches for an approximate global optimum by exploring the solution space.`,
    theory: `Simulated Annealing is based on the physical process of heating a material and then slowly lowering the temperature to decrease defects.`,
    pseudoCode: `1. Initialize the current solution and temperature.
2. Repeat until the stopping criterion is met:
   - Generate a new solution by perturbing the current solution.
   - Calculate the change in cost.
   - Accept the new solution with a probability that depends on the change in cost and the temperature.
   - Reduce the temperature according to a cooling schedule.`
  },
  {
    name: "Newton-Raphson Method",
    description: `The Newton-Raphson method is an iterative technique for finding roots of real-valued functions.`,
    theory: `Given a differentiable function f(x), the method uses the derivative to refine an initial guess of the root.`,
    pseudoCode: `1. Choose an initial guess for the root.
2. Calculate the derivative of the function at the current estimate.
3. Update the estimate using the formula.
4. Repeat until the desired accuracy is achieved.`
  },
  {
    name: "Gradient Descent",
    description: `Gradient Descent is an optimization algorithm used to minimize a cost function by iteratively moving towards the steepest descent.`,
    theory: `The key idea of Gradient Descent is to update the solution in the direction opposite to the gradient of the function.`,
    pseudoCode: `1. Initialize the parameters with random values.
2. Compute the gradient of the cost function.
3. Update the parameters by moving in the direction of the negative gradient.
4. Repeat until the stopping criterion is met.`
  },
  {
    name: "Steepest Gradient Descent",
    description: `Steepest Gradient Descent chooses the optimal step size at each iteration, based on the exact minimization of the cost function in the direction of the gradient.`,
    theory: `Steepest Gradient Descent optimizes the step size by performing a line search to find the step that minimizes the objective function.`,
    pseudoCode: `1. Initialize the parameters.
2. Perform a line search to find the optimal step size.
3. Update the parameters based on the computed step size.
4. Repeat until the stopping criterion is met.`
  }
];

const algorithmsMOOP = [
  {
    name: "NSGA-II (Non-dominated Sorting Genetic Algorithm II)",
    description: `NSGA-II is a popular multi-objective optimization algorithm based on genetic algorithms.`,
    theory: `NSGA-II focuses on solving multi-objective optimization problems by evolving a population of solutions towards the Pareto-optimal front.`,
    pseudoCode: `1. Initialize a random population of solutions.
2. Perform non-dominated sorting.
3. Apply genetic operators to generate new solutions.
4. Repeat until a stopping criterion is met.`
  },
  {
    name: "SPEA2 (Strength Pareto Evolutionary Algorithm 2)",
    description: `SPEA2 is an evolutionary algorithm for multi-objective optimization that uses a fine-grained fitness assignment strategy and a clustering method to preserve diversity.`,
    theory: `SPEA2 improves upon SPEA by using a strength-based fitness assignment that considers how many solutions a given solution dominates.`,
    pseudoCode: `1. Initialize a population and an external archive.
2. Assign fitness based on Pareto dominance and density estimation.
3. Update the archive with non-dominated solutions.
4. Apply genetic operators to generate new solutions.
5. Repeat until a stopping criterion is met.`
  },
  {
    name: "MOEA/D (Multi-Objective Evolutionary Algorithm based on Decomposition)",
    description: `MOEA/D decomposes a multi-objective optimization problem into a set of single-objective subproblems, each optimized simultaneously.`,
    theory: `MOEA/D decomposes a multi-objective problem into several scalar subproblems, optimizing each subproblem using genetic operators.`,
    pseudoCode: `1. Decompose the problem into several scalar subproblems.
2. Initialize a population of solutions for each subproblem.
3. Optimize each subproblem using information from neighboring subproblems.
4. Repeat until a stopping criterion is met.`
  }
];

const AlgorithmsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [visibleAlgorithm, setVisibleAlgorithm] = useState(null);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setVisibleAlgorithm(null); 
  };

  const toggleAlgorithmVisibility = (index) => {
    if (visibleAlgorithm === index) {
      setVisibleAlgorithm(null); 
    } else {
      setVisibleAlgorithm(index); 
    }
  };

  const renderAlgorithms = (algorithms) => {
    return algorithms.map((algo, index) => (
      <div key={index} className={styles.algorithm}>
        <h2 className={styles.algorithmName} onClick={() => toggleAlgorithmVisibility(index)}>
          {algo.name}
        </h2>
        {visibleAlgorithm === index && (
          <div className={styles.details}>
            <p className={styles.description}>{algo.description}</p>
            <p className={styles.theory}>{algo.theory}</p>
            <pre className={styles.pseudoCode}>
              <code>{algo.pseudoCode}</code>
            </pre>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <h1>Optimization Algorithms</h1>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">Select Category</option>
        <option value="SOOP">Single Objective Optimization Problem (SOOP)</option>
        <option value="MOOP">Multi-Objective Optimization Problem (MOOP)</option>
      </select>
      {selectedCategory === "SOOP" && renderAlgorithms(algorithmsSOOP)}
      {selectedCategory === "MOOP" && renderAlgorithms(algorithmsMOOP)}
    </div>
  );
};

export default AlgorithmsPage;
