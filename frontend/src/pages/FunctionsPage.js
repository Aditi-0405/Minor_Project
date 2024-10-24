import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/FunctionsPage.module.css';

const FunctionsPage = () => {
  const [optimizationType, setOptimizationType] = useState(''); 
  const [optimizationMethod, setOptimizationMethod] = useState('');
  const [selectedFunction, setSelectedFunction] = useState('');
  const [optimizationResult, setOptimizationResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleOptimizationTypeSelect = (event) => {
    setOptimizationType(event.target.value);
    setSelectedFunction(''); 
    setOptimizationResult(null); 
  };

  const handleMethodSelect = (event) => {
    setOptimizationMethod(event.target.value);
    setSelectedFunction(''); 
    setOptimizationResult(null); 
  };

  const handleFunctionSelect = (event) => {
    setSelectedFunction(event.target.value);
    setOptimizationResult(null); 
  };

  const handleOptimize = async () => {
    if (!selectedFunction || !optimizationMethod) {
      setError('Please select a function and optimization method');
      return;
    }

    try {
      setLoading(true);
      setError('');


      const endpoint = optimizationMethod === 'gradient_descent'
        ? 'http://127.0.0.1:8080/api/optimize/gradient_descent'
        : 'http://127.0.0.1:8080/api/optimize/newton_raphson';

      const res = await axios.post(`${endpoint}?function=${selectedFunction}`);
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
      <h1>Select Optimization Type and Function</h1>

      <select onChange={handleOptimizationTypeSelect} value={optimizationType} className={styles.optimizationTypeSelect}>
        <option value="">--Select Optimization Type--</option>
        <option value="soop">Single Objective Optimization (SOOP)</option>
        <option value="moop">Multi Objective Optimization (MOOP)</option>
      </select>

      {optimizationType && (
        <>
          <select onChange={handleMethodSelect} value={optimizationMethod} className={styles.methodSelect}>
            <option value="">--Select Optimization Method--</option>
            <option value="gradient_descent">Gradient Descent</option>
            <option value="newton_raphson">Newton-Raphson</option>
          </select>

          {optimizationMethod && (
            <>
              <select onChange={handleFunctionSelect} value={selectedFunction} className={styles.functionSelect}>
                <option value="">--Select a Function--</option>
                <option value="cross_in_tray">Cross-in-Tray Function</option>
                <option value="holder_table">Holder Table Function</option>
                <option value="levy_n13">Levy Function N. 13</option>
              </select>

              <button onClick={handleOptimize} className={styles.optimizeButton} disabled={loading}>
                {loading ? 'Optimizing...' : 'Optimize'}
              </button>
            </>
          )}
        </>
      )}

      {error && <p className={styles.error}>{error}</p>}

      {optimizationResult && (
        <div className={styles.resultContainer}>
          <h2>Optimization Result</h2>
          <div className={styles.resultDetails}>
            <p><strong>Iterations:</strong> {optimizationResult.iterations}</p>
            <p><strong>Final Point:</strong> {optimizationResult.final_point.map((point, index) => (
              <span key={index}>{point}{index < optimizationResult.final_point.length - 1 ? ', ' : ''}</span>
            ))}</p>
            <p><strong>Final Value:</strong> {optimizationResult.final_value}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FunctionsPage;
