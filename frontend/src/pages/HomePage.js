import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.tabsContainer}>
        <Link to="/soop" className={styles.tab}>
          Learn about SOOP
        </Link>
        <Link to="/moop" className={styles.tab}>
          Learn about MOOP
        </Link>
      </div>

      <h1 className={styles.title}>Welcome to the Optimization Learning Platform</h1>
      <p className={styles.intro}>
        Optimization is a fundamental area of mathematics and engineering that involves identifying the best possible solution
        to a problem within a set of defined constraints. This platform is designed to make learning about optimization more
        approachable and engaging. Whether you're a beginner or looking to deepen your knowledge, this platform will guide you
        through the essential concepts and practical applications.
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
            - <strong>Optimization Algorithms:</strong> Explore various methods such as Genetic Algorithms, Particle Swarm Optimization, Simulated Annealing, and more.
          </p>
        </div>
      </div>

      <div className={styles.optimizationInfo}>
        <h2 className={styles.sectionTitle}>What is Optimization?</h2>
        <p className={styles.optimizationDescription}>
          Optimization is the process of making something as effective or functional as possible. It involves selecting the best option from a set of alternatives, taking into account constraints and objectives. In mathematics, optimization involves finding the maximum or minimum value of a function under given conditions.
        </p>

        <h3 className={styles.subTitle}>Why is Optimization Important?</h3>
        <p className={styles.optimizationDescription}>
          Optimization is a critical tool in solving real-world problems, whether it’s improving the performance of a system, reducing costs, or maximizing efficiency. It is widely used in engineering, finance, logistics, artificial intelligence, and many other fields to find optimal solutions to complex problems.
        </p>

        <h3 className={styles.subTitle}>Real-World Use Cases of Optimization</h3>
        <ul className={styles.useCasesList}>
          <li><strong>Supply Chain Management:</strong> Optimization algorithms are used to minimize costs and improve efficiency in inventory management, routing, and scheduling.</li>
          <li><strong>Machine Learning:</strong> Optimization is key to training machine learning models, adjusting parameters to minimize error or maximize accuracy.</li>
          <li><strong>Financial Portfolio Optimization:</strong> Investors use optimization to maximize returns and minimize risks by selecting the right mix of assets.</li>
          <li><strong>Transportation and Logistics:</strong> Optimization algorithms are used to find the most efficient routes for delivery trucks, minimizing fuel costs and time.</li>
          <li><strong>Manufacturing:</strong> In manufacturing, optimization helps design processes to minimize waste and maximize production efficiency.</li>
        </ul>

        <h3 className={styles.subTitle}>Common Optimization Problems</h3>
        <p className={styles.optimizationDescription}>
          Optimization problems often involve finding the best solution under constraints. Some of the common optimization problems include:
        </p>
        <ul className={styles.useCasesList}>
          <li><strong>Linear Programming:</strong> Problems where the objective function and constraints are linear.</li>
          <li><strong>Integer Programming:</strong> Optimization problems where the decision variables are restricted to integer values.</li>
          <li><strong>Combinatorial Optimization:</strong> Problems where the goal is to find an optimal object from a finite set of objects, like the traveling salesman problem.</li>
          <li><strong>Nonlinear Optimization:</strong> Problems where the objective function or the constraints are nonlinear.</li>
        </ul>
      </div>

      <div className={styles.algorithmSection}>
        <h2 className={styles.sectionTitle}>Explore Optimization Algorithms</h2>
        <p className={styles.optimizationDescription}>
          There are many different optimization algorithms used to solve problems in various fields. Here are some of the most popular ones:
        </p>
        <ul className={styles.algorithmList}>
          <li><strong>Genetic Algorithm (GA):</strong> A nature-inspired algorithm that mimics the process of natural selection to solve optimization problems.</li>
          <li><strong>Particle Swarm Optimization (PSO):</strong> An optimization method based on the social behavior of birds flocking or fish schooling.</li>
          <li><strong>Simulated Annealing (SA):</strong> An algorithm inspired by the process of heating and then slowly cooling a material to minimize energy states.</li>
          <li><strong>Gradient Descent (GD):</strong> An iterative optimization technique used to minimize a function by adjusting parameters in the direction of the negative gradient.</li>
        </ul>
        <p className={styles.optimizationDescription}>
          Learn more about these algorithms on the dedicated pages for each method.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
