import React, { useState } from 'react';
import styles from '../styles/AlgorithmsPage.module.css';

const algorithmsSOOP = [
  {
    name: "Genetic Algorithm (GA)",
    description: `Genetic Algorithm (GA) is a search heuristic that mimics the process of natural selection. It operates on a population of potential solutions and evolves them using selection, crossover (recombination), and mutation.`,
    theory: `
      Overview:
      The Genetic Algorithm (GA) is inspired by Charles Darwin’s theory of evolution and the concept of natural selection. This optimization method is effective in exploring large search spaces and solving problems where the objective function is difficult to define mathematically.

      How It Works:
      - Population Initialization: Start with a randomly generated population of potential solutions.
      - Fitness Evaluation: Use a fitness function to evaluate how "fit" each individual solution is.
      - Selection: Select individuals for reproduction based on their fitness.
      - Crossover: Combine pairs of parent solutions to produce offspring.
      - Mutation: Introduce random changes to offspring to maintain diversity in the population.
      - Replacement: Replace the least fit individuals with the offspring.
      - Termination: Repeat the process until a stopping condition is met (e.g., a fixed number of generations or a satisfactory fitness level).

      Key Components:
      1. Representation:
         Solutions are encoded as chromosomes, often as binary strings (e.g., "10100101").
      2. Fitness Function:
         This function measures how close a solution is to the optimum.
      3. Genetic Operators:
         - Selection: Methods include Roulette Wheel, Tournament, and Rank-based selection.
         - Crossover: Single-point, Multi-point, or Uniform Crossover.
         - Mutation: Randomly flip bits, swap genes, or apply Gaussian noise.
      4. Population Management:
         Balancing exploration (diversity) and exploitation (focusing on the best solutions).

      Use Cases:
      - Optimization Problems:
        - Resource allocation in logistics.
        - Portfolio optimization in finance.
      - Scheduling:
        - Timetable generation for schools or employees.
      - Engineering Design:
        - Design of aerodynamic shapes.
      - Artificial Intelligence:
        - Neural network weight optimization.

      Flowchart:
      1. Generate Initial Population
      2. Evaluate Fitness
      3. Select Parents
      4. Apply Crossover
      5. Perform Mutation
      6. Generate New Population
      7. Check Stopping Criteria

      ![Flowchart Placeholder](https://via.placeholder.com/600x400?text=GA+Flowchart)

      Graphical Representation:
      Below is an example of how solutions improve over generations:
      ![Graph Placeholder](https://via.placeholder.com/600x300?text=Fitness+Over+Generations)

      Challenges:
      - Premature Convergence: The population may converge to a local optimum too quickly.
      - Tuning Parameters: Adjusting mutation rate, crossover rate, and population size is crucial.
      - Fitness Function Design: A poorly designed fitness function can lead to suboptimal results.

      Advantages:
      - Works well for high-dimensional and complex problems.
      - Does not require gradient information, making it suitable for non-differentiable functions.

      Disadvantages:
      - Computationally expensive due to the evaluation of multiple solutions.
      - May require fine-tuning for specific problems.

      Extensions:
      - Hybrid Genetic Algorithms: Combine GA with local search techniques for better performance.
      - Parallel Genetic Algorithms: Use distributed systems to evolve populations in parallel.

      Applications:
      1. Designing optimal layouts for complex systems.
      2. Training neural networks in machine learning.
      3. Evolving strategies in game theory simulations.
    `,
    pseudoCode: `1. Initialize a population of potential solutions.
2. Evaluate the fitness of each solution.
3. Select the best solutions based on fitness.
4. Apply crossover and mutation to generate new solutions.
5. Replace the least fit individuals with new offspring.
6. Repeat the process until convergence or a stopping criterion is met.`,
  },
  {
    name: "Simulated Annealing (SA)",
    description: `Simulated Annealing (SA) is a probabilistic optimization algorithm inspired by the annealing process in metallurgy. It is used to find an approximate global optimum by exploring the solution space and allowing occasional uphill moves to escape local optima.`,
    theory: `
      Overview:
      Simulated Annealing (SA) mimics the annealing process in metallurgy, where a material is heated to a high temperature and then gradually cooled to decrease defects. The algorithm uses this analogy to solve optimization problems by balancing exploration and exploitation of the solution space.

      How It Works:
      - Initialization: Start with an initial solution and a high temperature.
      - Exploration: Generate a neighboring solution by perturbing the current solution.
      - Acceptance Probability: Accept the new solution if it improves the objective, or with a probability that depends on the temperature and change in the objective function.
      - Cooling Schedule: Gradually reduce the temperature over time.
      - Termination: Stop when the temperature reaches a predefined minimum or after a fixed number of iterations.

      Key Components:
      1. Temperature:
         Controls the likelihood of accepting worse solutions. Higher temperatures allow more exploration, while lower temperatures focus on exploitation.
      2. Acceptance Probability:
         - Calculated using the formula: \\( P(accept) = e^{-\Delta f / T} \\), where \\( \\Delta f \\) is the change in objective value, and \\( T \\) is the temperature.
      3. Cooling Schedule:
         - Linear: \\( T = T_0 - k \\)
         - Exponential: \\( T = T_0 \\times \\alpha^k \\)
         - Adaptive: Adjust based on progress.

      Use Cases:
      - Optimization Problems:
        - Traveling Salesman Problem (TSP): Finding the shortest route visiting all cities.
        - Resource allocation in project management.
      - Scheduling:
        - Job shop scheduling for manufacturing.
        - Exam scheduling in universities.
      - Engineering Design:
        - Circuit design optimization.
        - Layout optimization for components.
      - Machine Learning:
        - Hyperparameter tuning for models.

      Flowchart:
      1. Start with an initial solution.
      2. Set a high initial temperature.
      3. Perturb the current solution to generate a neighbor.
      4. Evaluate the change in the objective function.
      5. Decide whether to accept the neighbor using the acceptance probability.
      6. Reduce the temperature based on the cooling schedule.
      7. Check stopping criteria (temperature or iteration limit).

      ![Flowchart Placeholder](https://via.placeholder.com/600x400?text=SA+Flowchart)

      Graphical Representation:
      A graph showing how the temperature decreases over iterations and how the solution quality improves:
      ![Graph Placeholder](https://via.placeholder.com/600x300?text=Temperature+and+Fitness+Over+Iterations)

      Challenges:
      - Parameter Tuning: The cooling schedule and initial temperature must be carefully chosen.
      - Slow Convergence: Gradual cooling can make the algorithm computationally expensive.
      - Sensitivity: Poor choices of parameters can lead to suboptimal solutions.

      Advantages:
      - Effective for problems with large, rugged search spaces.
      - Can escape local optima due to the probabilistic acceptance of worse solutions.

      Disadvantages:
      - Performance depends heavily on the cooling schedule and acceptance probability.
      - Requires many iterations for convergence.

      Extensions:
      - Adaptive Simulated Annealing: Dynamically adjusts cooling based on progress.
      - Parallel Simulated Annealing: Runs multiple annealing processes in parallel to speed up convergence.

      Applications:
      1. Route optimization in logistics.
      2. Solving complex combinatorial problems.
      3. Fine-tuning hyperparameters in machine learning.
    `,
    pseudoCode: `1. Initialize the current solution and temperature.
2. Repeat until stopping criterion is met:
   - Generate a new solution by perturbing the current solution.
   - Calculate the change in the objective function (\\( \\Delta f \\)).
   - Accept the new solution with probability \\( P(accept) = e^{-\Delta f / T} \\).
   - Reduce the temperature using the cooling schedule.
3. Return the best solution found.`,
  },
  {
    name: "Newton-Raphson Method",
    description: `The Newton-Raphson Method is an iterative numerical technique for finding roots of real-valued functions. It is widely used due to its rapid convergence when the initial guess is close to the actual root.`,
    theory: `
      Overview:
      The Newton-Raphson Method is a powerful root-finding algorithm that uses the derivative of a function to iteratively approximate its root. It converges quadratically under ideal conditions, making it much faster than many other methods.

      How It Works:
      - Start with an initial guess \\( x_0 \\) for the root.
      - Use the formula \\( x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)} \\) to iteratively update the guess.
      - Continue until the difference between successive guesses is within a predefined tolerance or the function value at \\( x_n \\) is sufficiently close to zero.

      Key Components:
      1. Function:
         - The function \\( f(x) \\) whose root is to be found.
      2. Derivative:
         - The derivative \\( f'(x) \\), which provides the slope at a given point.
      3. Initial Guess:
         - A starting value \\( x_0 \\), which must be close to the actual root for faster convergence.
      4. Stopping Criterion:
         - Either a tolerance for \\( |x_{n+1} - x_n| \\) or for \\( |f(x_n)| \\).

      Use Cases:
      - Mathematics:
        - Solving equations where analytical solutions are difficult.
      - Physics:
        - Finding equilibrium points in dynamical systems.
      - Engineering:
        - Design optimization and system analysis.
      - Machine Learning:
        - Optimization of cost functions.
      - Finance:
        - Solving equations in pricing models and risk analysis.

      Flowchart:
      1. Start with an initial guess \\( x_0 \\).
      2. Evaluate \\( f(x_n) \\) and \\( f'(x_n) \\).
      3. Compute \\( x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)} \\).
      4. Check if the stopping criterion is met.
      5. If not, set \\( x_n = x_{n+1} \\) and repeat.

      ![Flowchart Placeholder](https://via.placeholder.com/600x400?text=Newton-Raphson+Flowchart)

      Challenges:
      - Initial Guess Sensitivity: Poor guesses may lead to divergence or slow convergence.
      - Singular Derivative: If \\( f'(x) \\) is zero or near zero, the method fails.
      - Local Convergence: Only converges if the guess is near the actual root.
      - Non-Differentiable Functions: Cannot be used if \\( f(x) \\) is not differentiable.

      Advantages:
      - Fast Convergence: Quadratic convergence for well-behaved functions.
      - Simplicity: Requires only function evaluation and differentiation.

      Disadvantages:
      - Requires computation of the derivative, which can be challenging for complex functions.
      - Sensitive to the choice of the initial guess.

      Extensions:
      - Modified Newton-Raphson: Adds safeguards for better robustness.
      - Multivariate Newton-Raphson: Used for systems of equations with Jacobian matrices.

      Applications:
      1. Solving transcendental equations (e.g., \\( e^x = 3x \\)).
      2. Optimization in machine learning and engineering.
      3. Computing eigenvalues of matrices.
    `,
    pseudoCode: `1. Choose an initial guess \\( x_0 \\).
2. Repeat until stopping criteria are met:
   - Compute \\( f(x_n) \\) and \\( f'(x_n) \\).
   - Update the guess using \\( x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)} \\).
3. Return the root \\( x_{n+1} \\).`,
  },
  {
    name: "Gradient Descent",
    description: `Gradient Descent is an optimization algorithm used to minimize functions by iteratively moving in the direction of steepest descent as defined by the negative of the gradient.`,
    theory: `
      Overview:
      Gradient Descent is a first-order iterative optimization algorithm used to find the minimum of a function. It is widely employed in machine learning and deep learning to optimize the cost function during model training.

      How It Works:
      - Start with an initial guess for the parameters.
      - Compute the gradient (partial derivatives) of the cost function with respect to the parameters.
      - Update the parameters by moving in the direction opposite to the gradient, scaled by a learning rate.
      - Repeat until convergence is achieved.

      Mathematical Formula:
      \\[
      \\theta_{t+1} = \\theta_t - \\eta \\cdot \\nabla J(\\theta_t)
      \\]
      - \\( \\theta_t \\): Current parameters.
      - \\( \\nabla J(\\theta_t) \\): Gradient of the cost function.
      - \\( \\eta \\): Learning rate (step size).

      Variants:
      1. Batch Gradient Descent:
         - Uses the entire dataset to compute the gradient at each step.
         - Pros: Stable convergence.
         - Cons: Computationally expensive for large datasets.
      2. Stochastic Gradient Descent (SGD):
         - Uses a single random data point at each step.
         - Pros: Faster updates, good for large datasets.
         - Cons: Noisy updates can lead to instability.
      3. Mini-Batch Gradient Descent:
         - Uses a small batch of data points at each step.
         - Balances stability and efficiency.
      4. Momentum-based Gradient Descent:
         - Incorporates momentum to accelerate convergence in relevant directions.
      5. Adaptive Gradient Methods (e.g., Adam, RMSProp):
         - Adjust the learning rate dynamically for better performance.

      Use Cases:
      - Machine Learning:
        - Training linear regression, logistic regression, and neural networks.
      - Deep Learning:
        - Optimizing complex loss functions in deep neural networks.
      - Optimization:
        - Solving convex and non-convex optimization problems.
      - Physics and Engineering:
        - Optimizing parameters in simulations and control systems.

      Flowchart:
      1. Initialize parameters \\( \\theta \\).
      2. Compute the gradient \\( \\nabla J(\\theta) \\).
      3. Update \\( \\theta \\) using \\( \\theta = \\theta - \\eta \\nabla J(\\theta) \\).
      4. Check for convergence.
      5. If not converged, return to step 2.

      ![Flowchart Placeholder](https://via.placeholder.com/600x400?text=Gradient+Descent+Flowchart)

      Challenges:
      - Learning Rate: Too large may lead to divergence; too small results in slow convergence.
      - Local Minima: For non-convex functions, gradient descent may get stuck in local minima.
      - Vanishing Gradients: Gradients can become very small, especially in deep networks.

      Advantages:
      - Simple and easy to implement.
      - Scalable to large datasets (especially with SGD).

      Disadvantages:
      - Sensitive to hyperparameters like the learning rate.
      - May require many iterations to converge.

      Extensions:
      - Adaptive Gradient Methods: Methods like Adam improve performance by adjusting the learning rate for each parameter.
      - Second-Order Methods: Use curvature information (e.g., Newton's method) for faster convergence but at higher computational cost.

      Applications:
      1. Training machine learning models.
      2. Optimizing physical systems.
      3. Image and signal processing tasks.
    `,
    pseudoCode: `1. Initialize parameters \\( \\theta \\) and learning rate \\( \\eta \\).
2. Repeat until stopping criteria are met:
   - Compute the gradient \\( \\nabla J(\\theta) \\).
   - Update parameters using \\( \\theta = \\theta - \\eta \\nabla J(\\theta) \\).
3. Return the optimized parameters \\( \\theta \\).`,
  },
  {
    name: "Steepest Gradient Descent",
    description: `Steepest Gradient Descent is an optimization technique that iteratively moves in the direction of the steepest decrease of a given function to find its minimum. Unlike standard Gradient Descent, the step size is dynamically determined at each iteration.`,
    theory: `
      Overview:
      Steepest Gradient Descent is an iterative optimization algorithm designed to find the local minimum of a function. It calculates the steepest descent direction (negative gradient) and uses a line search to determine the optimal step size in that direction.

      How It Works:
      - Compute the gradient of the objective function.
      - Determine the step size \\( \\alpha \\) by performing a line search along the gradient direction.
      - Update the parameters using the step size and direction of steepest descent.
      - Repeat until convergence.

      Mathematical Formula:
      \\[
      x_{k+1} = x_k - \\alpha_k \\nabla f(x_k)
      \\]
      - \\( x_k \\): Current parameter values.
      - \\( \\nabla f(x_k) \\): Gradient of the function at \\( x_k \\).
      - \\( \\alpha_k \\): Step size determined via line search.

      Key Characteristics:
      - Dynamically adjusts the step size to ensure maximum decrease in function value.
      - More robust than fixed-step Gradient Descent for functions with varying curvature.

      Steps:
      1. Initialization:
         - Start with an initial guess \\( x_0 \\).
      2. Gradient Computation:
         - Compute the gradient \\( \\nabla f(x_k) \\) at each iteration.
      3. Line Search:
         - Solve for \\( \\alpha_k \\) to minimize \\( f(x_k - \\alpha \\nabla f(x_k)) \\).
      4. Update:
         - Update \\( x_k \\) using the calculated step size and gradient.
      5. Convergence Check:
         - Stop when the gradient magnitude is below a threshold or the function value stabilizes.

      Use Cases:
      - Optimization of smooth and differentiable functions.
      - Machine learning tasks where precise step size adjustments are crucial.
      - Solving systems of nonlinear equations.

      Advantages:
      - Adaptable step size ensures efficient convergence.
      - More effective for functions with varying curvature compared to standard Gradient Descent.

      Disadvantages:
      - Computationally expensive due to line search at every step.
      - Can still converge to local minima for non-convex functions.

      Applications:
      - Machine learning model optimization.
      - Engineering designs requiring high precision.
      - Control system parameter tuning.

      Challenges:
      - Balancing the cost of line search with convergence speed.
      - Sensitivity to the accuracy of gradient and line search computation.

      Extensions:
      - Combine with second-order methods like Newton's method for faster convergence.
      - Modify line search strategies for better efficiency (e.g., Armijo or Wolfe conditions).

      Visualization:
      A typical progression of the algorithm shows the parameter values moving along the steepest descent path toward the function's minimum.

      ![Visualization Placeholder](https://via.placeholder.com/600x400?text=Steepest+Descent+Path)

      Flowchart:
      1. Compute Gradient \\( \\nabla f(x_k) \\).
      2. Perform Line Search to determine \\( \\alpha_k \\).
      3. Update Parameters \\( x_{k+1} = x_k - \\alpha_k \\nabla f(x_k) \\).
      4. Check Convergence.
      5. Repeat until stopping criteria are met.

      ![Flowchart Placeholder](https://via.placeholder.com/600x400?text=Steepest+Gradient+Descent+Flowchart)
    `,
    pseudoCode: `1. Initialize parameters \\( x_0 \\), tolerance \\( \\epsilon \\), and maximum iterations.
2. Repeat until convergence:
   a. Compute gradient \\( g = \\nabla f(x_k) \\).
   b. Perform a line search to find optimal \\( \\alpha_k \\).
   c. Update \\( x_{k+1} = x_k - \\alpha_k g \\).
   d. Check if \\( ||g|| < \\epsilon \\).
3. Return the optimized parameters \\( x \\).`,
  }
];

const algorithmsMOOP = [
  {
    name: "NSGA-II (Non-dominated Sorting Genetic Algorithm II)",
    description: `NSGA-II is a popular evolutionary algorithm for solving multi-objective optimization problems. It uses a combination of non-dominated sorting, crowding distance, and genetic operators to find a set of optimal solutions that approximate the true Pareto front.`,
    theory: `
      Overview:
      NSGA-II (Non-dominated Sorting Genetic Algorithm II) is an evolutionary algorithm designed for solving multi-objective optimization problems. It is an improvement over the original NSGA, introduced by Deb et al., by incorporating fast non-dominated sorting and a crowding distance mechanism to maintain diversity in the population. NSGA-II aims to produce a set of solutions that represent a good trade-off between conflicting objectives.

      How It Works:
      - Initialization: A population of solutions is randomly generated.
      - Non-dominated Sorting: The population is sorted based on the concept of domination, where solutions are ranked into different fronts based on how they compare with each other.
      - Crowding Distance: A measure of solution density in the objective space is computed to maintain diversity.
      - Selection: Solutions are selected based on their rank (non-domination level) and crowding distance.
      - Crossover and Mutation: Genetic operators (crossover and mutation) are applied to create offspring.
      - Replacement: The best solutions are selected from the combined population (parents and offspring) to form the next generation.
      - Termination: The algorithm continues until a stopping criterion (e.g., maximum generations or convergence) is met.

      Mathematical Formula:
      - Non-dominated Sorting:
        Solutions are classified based on domination relationships:
        - A solution \( x_1 \) is said to dominate solution \( x_2 \) if:
          - \( f_1(x_1) \leq f_1(x_2) \) and \( f_2(x_1) \leq f_2(x_2) \), with at least one strict inequality.
      - Crowding Distance: Measures the density of solutions in the objective space to maintain diversity.
      
      Steps:
      1. Initialize Population: Randomly generate an initial population of solutions.
      2. Non-dominated Sorting: Sort the population into different fronts based on domination.
      3. Calculate Crowding Distance: Compute the crowding distance for each solution in the population.
      4. Selection: Select solutions based on rank and crowding distance.
      5. Crossover and Mutation: Apply genetic operators to produce offspring.
      6. Replacement: Merge the parent and offspring populations and select the best solutions.
      7. Repeat: Continue until convergence or stopping criteria are met.

      Key Components:
      1. Non-dominated Sorting: Used to rank solutions based on dominance relationships. A solution is dominated if another solution is strictly better in all objectives.
      2. Crowding Distance: This mechanism ensures that the population maintains diversity by penalizing solutions that are too close to others in the objective space.
      3. Genetic Operators:
         - Selection: Based on a combination of dominance rank and crowding distance.
         - Crossover: Usually a simulated binary crossover (SBX) or a similar operator.
         - Mutation: Usually polynomial mutation for continuous problems.
      4. Pareto Front: The goal of NSGA-II is to approximate the true Pareto front, which contains all the non-dominated solutions.

      Use Cases:
      - Multi-objective Optimization: Problems with more than one conflicting objective, such as minimizing cost while maximizing quality.
      - Engineering Design: Optimization problems in mechanical, electrical, or aerospace engineering where multiple conflicting objectives exist (e.g., weight vs. strength).
      - Environmental Problems: Problems like optimizing land-use planning, water distribution, etc., where multiple factors need to be balanced.
      - Machine Learning: Optimizing multiple models or hyperparameters in multi-objective settings.

      Advantages:
      - Efficiency: Fast non-dominated sorting and crowding distance allow for efficient handling of large populations and multi-objective problems.
      - Diversity: The crowding distance operator ensures that a diverse set of solutions is maintained.
      - No Need for Weights: Unlike weighted sum approaches, NSGA-II does not require predefined weights for different objectives.

      Disadvantages:
      - Computationally Intensive: Sorting the population based on dominance and calculating crowding distances can be computationally expensive, especially for large populations.
      - Sensitive to Parameters: The performance can depend on the choice of crossover, mutation operators, and population size.

      Applications:
      - Engineering Design Optimization: For example, optimizing the design of a car engine where fuel efficiency and engine power are conflicting objectives.
      - Robotics: Multi-objective path planning in robotics where multiple constraints like time, energy, and safety need to be balanced.
      - Sustainable Energy: Optimizing energy systems where objectives like cost, efficiency, and environmental impact need to be considered.

      Challenges:
      - Convergence vs. Diversity: Balancing convergence to the true Pareto front with maintaining diversity in the solution set.
      - Multi-modal Problems: NSGA-II may struggle with problems having multiple Pareto fronts or local optima.

      Extensions:
      - Parallel NSGA-II: Parallelized versions of NSGA-II for handling larger problems more efficiently.
      - Hybrid NSGA-II: Combining NSGA-II with other optimization methods like local search or surrogate models for improved performance.

      Flowchart:
      1. Initialize Population
      2. Non-dominated Sorting and Crowding Distance Calculation
      3. Apply Selection (based on rank and distance)
      4. Perform Crossover and Mutation
      5. Merge Parents and Offspring, Select New Population
      6. Repeat until stopping criteria are met

      ![Flowchart Placeholder](https://via.placeholder.com/600x400?text=NSGA-II+Flowchart)

      Visualization:
      Below is a representation of how the population evolves over generations in terms of approximating the Pareto front:

      ![Visualization Placeholder](https://via.placeholder.com/600x300?text=Pareto+Front+Evolution)

    `,
    pseudoCode: `1. Initialize population with random solutions.
2. Repeat until stopping criterion is met:
   a. Perform non-dominated sorting and calculate crowding distance.
   b. Select parents based on rank and crowding distance.
   c. Apply crossover and mutation to generate offspring.
   d. Merge parent and offspring populations and select the best solutions.
3. Return the final population representing the Pareto front.`,
  },
  {
    name: "SPEA2 (Strength Pareto Evolutionary Algorithm 2)",
    description: `SPEA2 is an evolutionary algorithm designed for solving multi-objective optimization problems. It extends the original SPEA algorithm by incorporating an improved fitness assignment method and enhanced environmental selection to better approximate the Pareto front.`,
    theory: `
      Overview:
      SPEA2 (Strength Pareto Evolutionary Algorithm 2) is an evolutionary algorithm designed for solving multi-objective optimization problems. It is an improvement over the original Strength Pareto Evolutionary Algorithm (SPEA), focusing on better handling of fitness assignment and environmental selection to improve the convergence and diversity of the Pareto front approximation. SPEA2 works by maintaining a population of individuals and assigning them fitness based on both their dominance in the objective space and their distance from other individuals in the population.

      How It Works:
      - Initialization: Generate an initial population of solutions.
      - Fitness Assignment: Fitness is calculated based on both Pareto dominance (how many solutions dominate a given solution) and strength (how many solutions a given solution dominates).
      - Environmental Selection: Select individuals based on their fitness, ensuring a good balance between convergence and diversity in the population.
      - Genetic Operators: Apply crossover and mutation operators to generate offspring.
      - Replacement: Replace individuals in the population based on their fitness and crowding distance to form the next generation.
      - Termination: Repeat the process until a stopping criterion is met (e.g., maximum number of generations, convergence, or satisfactory fitness).

      Key Components:
      1. Fitness Assignment:
         - Raw Fitness: Solutions are assigned a raw fitness value based on the number of solutions they dominate and the number of solutions that dominate them.
         - Strength Fitness: A solution's strength is determined by how many solutions it dominates, rewarding solutions that dominate many others.
         - Fitness by Domination: A solution's fitness is adjusted based on how many solutions it is dominated by, which helps to keep the population diverse.
      2. Environmental Selection: Selects individuals for the next generation based on their fitness values, ensuring a well-distributed set of solutions.
      3. Crowding Distance: Used to maintain diversity in the population by penalizing individuals that are too close to each other in the objective space.
      4. Genetic Operators:
         - Crossover: Typically uses simulated binary crossover (SBX) to combine the genetic material of parent solutions.
         - Mutation: Applies polynomial mutation to maintain diversity in the population.
      5. Pareto Front: The goal of SPEA2 is to maintain a population of solutions that approximate the true Pareto front for multi-objective problems.

      Use Cases:
      - Multi-objective Optimization: Problems with conflicting objectives that require balancing trade-offs between competing goals.
      - Engineering Design: Optimizing the design of mechanical, aerospace, or electrical systems where multiple conflicting objectives, such as cost and performance, need to be considered.
      - Machine Learning: Multi-objective optimization in hyperparameter tuning or multi-model optimization.
      - Environmental Management: Solving complex problems like land-use planning, water distribution, and resource management where multiple factors are in play.

      Advantages:
      - Improved Fitness Assignment: SPEA2 improves on the original SPEA algorithm by using a more sophisticated fitness assignment method, leading to better solution quality.
      - Diversity Preservation: Through the use of crowding distance and environmental selection, SPEA2 effectively maintains diversity in the population, preventing premature convergence.
      - Good Convergence: The algorithm tends to converge toward the true Pareto front, providing a good set of diverse, non-dominated solutions.

      Disadvantages:
      - Computationally Expensive: Due to the use of dominance-based fitness assignments and environmental selection, SPEA2 can be computationally expensive for large problems.
      - Sensitive to Parameters: The performance of SPEA2 can depend heavily on the selection of parameters like population size, mutation rate, and crossover rate.

      Applications:
      - Optimal Resource Allocation: Solving multi-objective problems in resource allocation for logistics, supply chain, or energy systems.
      - Robotics: Multi-objective path planning, where time, energy, and safety need to be balanced.
      - Design Problems: Engineering design problems, such as optimizing a vehicle’s aerodynamics and fuel efficiency while maintaining safety standards.
      - Sustainable Development: Environmental sustainability problems, such as optimizing land-use planning with respect to ecological and economic factors.

      Challenges:
      - Maintaining Diversity: Although SPEA2 is good at maintaining diversity, ensuring that a diverse set of solutions is found in high-dimensional objective spaces can still be challenging.
      - Scalability: The algorithm’s computational complexity can become an issue as the problem size (number of objectives and population size) increases.

      Extensions:
      - Parallel SPEA2: Parallel versions of SPEA2 have been proposed to handle larger problem instances more efficiently by distributing the computational load across multiple processors.
      - Hybrid SPEA2: Combining SPEA2 with local search algorithms or other metaheuristic methods to improve the quality of the Pareto front approximation.
      - SPEA2+: An extension that incorporates elitism (preserving the best solutions) to improve the convergence of the algorithm.

      Flowchart:
      1. Initialize Population
      2. Calculate Fitness for Each Solution
      3. Select Solutions for Crossover and Mutation
      4. Perform Crossover and Mutation
      5. Perform Environmental Selection
      6. Repeat until stopping criteria are met

      ![Flowchart Placeholder](https://via.placeholder.com/600x400?text=SPEA2+Flowchart)

      Visualization:
      Below is a graphical representation of how SPEA2 approximates the Pareto front over multiple generations:

      ![Visualization Placeholder](https://via.placeholder.com/600x300?text=Pareto+Front+Evolution+in+SPEA2)

    `,
    pseudoCode: `1. Initialize a population with random solutions.
2. Repeat until stopping criterion is met:
   a. Assign fitness to each solution based on strength and domination.
   b. Perform crossover and mutation to generate offspring.
   c. Select the best individuals using environmental selection and crowding distance.
3. Return the final population representing the Pareto front.`,
  },
  {
    name: "MOEA/D (Multi-Objective Evolutionary Algorithm based on Decomposition)",
    description: `MOEA/D is an evolutionary algorithm that decomposes a multi-objective optimization problem into a set of single-objective optimization subproblems, which are then solved simultaneously using evolutionary techniques. The algorithm utilizes scalarization techniques to decompose the multi-objective problem and guide the search toward a Pareto-optimal solution.`,
    theory: `
      Overview:
      MOEA/D (Multi-Objective Evolutionary Algorithm based on Decomposition) is a popular evolutionary algorithm for solving multi-objective optimization problems. It divides the multi-objective problem into a set of simpler scalar optimization subproblems, each focusing on optimizing a different aspect of the objective space. These subproblems are solved in parallel, allowing MOEA/D to efficiently explore the Pareto front and provide a well-distributed set of Pareto-optimal solutions.

      How It Works:
      - Decomposition: MOEA/D decomposes the multi-objective optimization problem into multiple scalarized single-objective subproblems. Each subproblem is focused on optimizing a particular scalarized form of the objective functions.
      - Scalarization: The objectives are combined into a single scalar value using scalarization techniques like weighted sum or Tchebycheff method. This allows the algorithm to handle multiple objectives simultaneously.
      - Neighborhood Structure: Each subproblem is associated with a neighborhood of subproblems, which guides the exchange of information between them during the evolutionary process.
      - Evolutionary Process: Use evolutionary operators (such as crossover and mutation) to generate new solutions for each subproblem, updating the solutions in the population.
      - Replacement: Once a new solution is generated, it replaces an existing solution in the population if it improves the objective values of the corresponding subproblem.

      Key Components:
      1. Decomposition:
         The problem is decomposed into multiple subproblems using scalarization methods. Each subproblem aims to optimize a different aspect of the objective space.
      2. Scalarization Techniques:
         - Weighted Sum: A linear combination of the objectives weighted by user-defined coefficients.
         - Tchebycheff Method: A method that minimizes the maximum deviation between the objectives and reference points.
      3. Neighborhood Structure:
         Subproblems are linked to their neighboring subproblems to exchange information, guiding the search toward the Pareto front.
      4. Evolutionary Operators:
         Use crossover and mutation operators to generate new solutions for each subproblem. These operators modify solutions to improve their fitness.
      5. Replacement Strategy:
         New solutions are evaluated and, if they improve the performance of a subproblem, they replace an existing solution in the population.
      6. Population Management:
         The algorithm maintains a population of solutions, updating it iteratively by solving the decomposition subproblems.

      Use Cases:
      - Multi-Objective Optimization: MOEA/D is effective in problems where multiple conflicting objectives need to be optimized simultaneously, such as in engineering design, machine learning, and logistics.
      - Engineering Design: Optimizing the design of complex systems where multiple criteria such as cost, performance, and reliability need to be balanced.
      - Machine Learning: Multi-objective optimization for hyperparameter tuning in machine learning models.
      - Supply Chain Management: Optimizing logistics and resource allocation while considering multiple objectives, such as cost, delivery time, and resource utilization.

      Advantages:
      - Efficient Decomposition: By decomposing the multi-objective problem into smaller single-objective subproblems, MOEA/D can efficiently tackle complex problems.
      - Scalability: The algorithm can scale well to problems with many objectives, especially when using decomposition methods like Tchebycheff.
      - Parallelism: The decomposition approach allows MOEA/D to solve subproblems in parallel, which is suitable for parallel and distributed computing environments.
      - Good Convergence and Diversity: The algorithm is able to converge to the true Pareto front while maintaining diversity among the solutions.

      Disadvantages:
      - Parameter Sensitivity: The algorithm's performance is sensitive to the choice of scalarization method and the neighborhood structure.
      - Computational Complexity: For problems with many objectives or large solution spaces, MOEA/D can be computationally expensive, especially when dealing with a large number of subproblems.
      - Need for Domain Knowledge: The success of the decomposition technique often requires domain knowledge to choose appropriate scalarization methods and decomposition strategies.

      Applications:
      - Product Design: Multi-objective optimization in product design to balance cost, performance, and manufacturability.
      - Robotics: Multi-objective motion planning, balancing time, energy consumption, and safety.
      - Energy Systems: Optimizing the design and operation of energy systems, such as renewable energy integration and grid management, where multiple conflicting objectives need to be optimized.
      - Environmental Optimization: Solving environmental management problems, such as optimizing land use, water resources, and waste management.

      Challenges:
      - Neighborhood Structure Design: The choice of neighborhood structure significantly affects the algorithm's performance and is not always straightforward.
      - Balancing Convergence and Diversity: Ensuring that the algorithm converges to the Pareto front while maintaining diversity in the population is a challenge in high-dimensional objective spaces.

      Extensions:
      - MOEA/D with Dynamic Decomposition: Extending MOEA/D to adapt the decomposition strategy during the optimization process to improve the quality of the Pareto front approximation.
      - Parallel MOEA/D: Implementing the algorithm in parallel environments to improve efficiency, especially for problems with a large number of subproblems or objectives.
      - Hybrid MOEA/D: Combining MOEA/D with other optimization techniques (such as local search methods or other evolutionary algorithms) to enhance performance.

      Flowchart:
      1. Decompose the multi-objective problem into scalarized subproblems.
      2. Initialize the population for each subproblem.
      3. Perform evolutionary operations (crossover and mutation) on each subproblem.
      4. Update the population based on the solutions to the subproblems.
      5. Repeat until convergence or stopping criteria are met.

      ![Flowchart Placeholder](https://via.placeholder.com/600x400?text=MOEA/D+Flowchart)

      Visualization:
      Below is a graphical representation of how MOEA/D approximates the Pareto front over multiple generations:

      ![Visualization Placeholder](https://via.placeholder.com/600x300?text=Pareto+Front+Evolution+in+MOEA/D)

    `,
    pseudoCode: `1. Decompose the multi-objective problem into scalarized subproblems.
2. Initialize a population of solutions for each subproblem.
3. Repeat until stopping criterion is met:
   a. For each subproblem, perform crossover and mutation to generate new solutions.
   b. Update the population by replacing solutions based on fitness.
4. Return the population representing the approximate Pareto front.`,
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
