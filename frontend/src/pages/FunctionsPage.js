import React, { useState } from 'react'; 
import styles from '../styles/FunctionsPage.module.css';

const FunctionsPage = () => {
  const [selectedFunction, setSelectedFunction] = useState('');
  const [optimizationResult, setOptimizationResult] = useState(null);

  const functions = {
    g1: "(3 * x1) - cos(x2 * x3) - 0.5",
    g2: "x1^2 - 81 * (x2 + 0.1)^2 + sin(x3) + 1.06",
    g3: "exp(-x1 * x2) + 20 * x3 + (10 * π - 3) / 3",
  };

  const handleFunctionSelect = (event) => {
    setSelectedFunction(event.target.value);
  };

  const handleOptimize = () => {

    setOptimizationResult(`Optimized result for ${selectedFunction}`);
  };

  return (
    <div className={styles.container}>
      <h1>Select a Function to Optimize</h1>
      <select onChange={handleFunctionSelect} value={selectedFunction}>
        <option value="">--Select a Function--</option>
        <option value="g1">g1: "(3 * x1) - cos(x2 * x3) - 0.5"</option>
        <option value="g2">g2: "x1^2 - 81 * (x2 + 0.1)^2 + sin(x3) + 1.06"</option>
        <option value="g3">g3: "exp(-x1 * x2) + 20 * x3 + (10 * π - 3) / 3"</option>
      </select>

      <button onClick={handleOptimize} className={styles.optimizeButton}>
        Optimize
      </button>

      {optimizationResult && (
        <div className={styles.resultContainer}>
          <h2>Optimization Result</h2>
          <p>{optimizationResult}</p>
        </div>
      )}
    </div>
  );
};

export default FunctionsPage;
