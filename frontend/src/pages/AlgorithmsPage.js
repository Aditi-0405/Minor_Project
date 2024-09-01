import React from 'react';
import styles from '../styles/AlgorithmsPage.module.css';

const algorithms = [
  {
    name: "Genetic Algorithm (GA)",
    description: `Genetic Algorithm (GA) is a search heuristic that mimics the process of natural selection. It is used to find approximate solutions to optimization and search problems. GAs are used in various domains such as machine learning, engineering, economics, and more.`,
    pseudoCode: `1. Initialize a population of potential solutions.
2. Evaluate the fitness of each solution.
3. Select the best solutions based on fitness.
4. Apply crossover and mutation to generate new solutions.
5. Repeat the process until convergence or a stopping criterion is met.`
  },
  {
    name: "Particle Swarm Optimization (PSO)",
    description: `Particle Swarm Optimization (PSO) is an optimization technique inspired by the social behavior of birds and fish. It optimizes a problem by having a group of candidate solutions (particles) move around in the search space, adjusting their positions based on their own experience and that of their neighbors.`,
    pseudoCode: `1. Initialize a swarm of particles with random positions and velocities.
2. Evaluate the fitness of each particle.
3. Update each particle's velocity and position based on its own best position and the best position of its neighbors.
4. Repeat the process until convergence or a stopping criterion is met.`
  },
  {
    name: "Simulated Annealing (SA)",
    description: `Simulated Annealing (SA) is an optimization technique inspired by the annealing process in metallurgy. It searches for the optimum by exploring the solution space and accepting changes based on a probability that decreases over time. It is used for finding an approximate solution to optimization problems.`,
    pseudoCode: `1. Initialize the current solution and temperature.
2. Repeat until the stopping criterion is met:
   - Generate a new solution by perturbing the current solution.
   - Calculate the change in cost.
   - Accept the new solution with a probability that depends on the change in cost and the temperature.
   - Reduce the temperature according to a cooling schedule.`
  }
];

const AlgorithmsPage = () => {
  return (
    <div className={styles.container}>
      <h1>Optimization Algorithms</h1>
      {algorithms.map((algo, index) => (
        <div key={index} className={styles.algorithm}>
          <h2 className={styles.algorithmName}>{algo.name}</h2>
          <p className={styles.description}>{algo.description}</p>
          <pre className={styles.pseudoCode}>
            <code>{algo.pseudoCode}</code>
          </pre>
        </div>
      ))}
    </div>
  );
};

export default AlgorithmsPage;
