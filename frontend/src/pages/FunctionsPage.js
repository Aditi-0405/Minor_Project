import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/FunctionsPage.module.css';

const FunctionsPage = () => {
  const [selectedFunction, setSelectedFunction] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');
  const [optimizationResult, setOptimizationResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFunctionSelect = (event) => {
    setSelectedFunction(event.target.value);
  };

  const handleMethodSelect = (event) => {
    setSelectedMethod(event.target.value); 
  };

  const handleOptimize = async () => {
    if (!selectedFunction || !selectedMethod) {
      setError('Please select a function and a method to optimize');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const res = await axios.get("http://127.0.0.1:8080/api/optimize", {
        params: { 
          function: selectedFunction,
          method: selectedMethod 
        } 
      });
      console.log(res.data);  
      setOptimizationResult(res.data);
    } catch (err) {
      setError('Failed to fetch optimization data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Select a Function and Method to Optimize</h1>

      <select onChange={handleFunctionSelect} value={selectedFunction} className={styles.functionSelect}>
        <option value="">--Select a Function--</option>
        <option value="g1">g1: "(3 * x1) - cos(x2 * x3) - 0.5"</option>
        <option value="g2">g2: "x1^2 - 81 * (x2 + 0.1)^2 + sin(x3) + 1.06"</option>
        <option value="g3">g3: "exp(-x1 * x2) + 20 * x3 + (10 * π - 3) / 3"</option>
      </select>

      <select onChange={handleMethodSelect} value={selectedMethod} className={styles.methodSelect}>
        <option value="">--Select a Method--</option>
        <option value="method1">gradient descent</option>
        <option value="method2">Newton-Raphson</option>
        <option value="method3">steepest gradient descent</option>
      </select>

      <button onClick={handleOptimize} className={styles.optimizeButton} disabled={loading}>
        {loading ? 'Optimizing...' : 'Optimize'}
      </button>

      {error && <p className={styles.error}>{error}</p>}

      {optimizationResult && (
        <div className={styles.resultContainer}>
          <h2>Optimization Result</h2>
          <div className={styles.resultDetails}>
            <p><strong>Iterations:</strong> {optimizationResult.iterations}</p>
            <p><strong>Final Point:</strong> {optimizationResult.final_point.map((point, index) => (
              <span key={index}>{point[0]}{index < optimizationResult.final_point.length - 1 ? ', ' : ''}</span>
            ))}</p>
            <p><strong>Final Value:</strong> {optimizationResult.final_value}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FunctionsPage;
