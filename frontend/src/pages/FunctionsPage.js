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
    setOptimizationMethod(''); // Reset method selection
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

      let endpoint;

      if (optimizationType === 'soop') {
        endpoint = optimizationMethod === 'gradient_descent'
          ? 'http://127.0.0.1:8080/api/optimize/gradient_descent'
          : 'http://127.0.0.1:8080/api/optimize/newton_raphson';
      } else if (optimizationType === 'moop') {
        endpoint = 'http://127.0.0.1:8080/api/optimize/moop'; // Add endpoint for MOOP
      }

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
          {optimizationType === 'soop' && (
            <>
              <select onChange={handleMethodSelect} value={optimizationMethod} className={styles.methodSelect}>
                <option value="">--Select Optimization Method--</option>
                <option value="gradient_descent">Gradient Descent</option>
                <option value="newton_raphson">Newton-Raphson</option>
              </select>
            </>
          )}

          {optimizationType === 'moop' && (
            <>
              <select onChange={handleMethodSelect} value={optimizationMethod} className={styles.methodSelect}>
                <option value="">--Select Optimization Method--</option>
                <option value="nsga2">NSGA-II</option>
                <option value="pareto_front">Pareto Front</option>
                {/* Add more MOOP methods as needed */}
              </select>
            </>
          )}

          {optimizationMethod && (
            <>
              <select onChange={handleFunctionSelect} value={selectedFunction} className={styles.functionSelect}>
                <option value="">--Select a Function--</option>
                {optimizationType === 'soop' && (
                  <>
                    <option value="cross_in_tray">Cross-in-Tray Function</option>
                    <option value="holder_table">Holder Table Function</option>
                    <option value="levy_n13">Levy Function N. 13</option>
                  </>
                )}
                {optimizationType === 'moop' && (
                  <>
                    <option value="zdt1">ZDT1 Problem</option>
                    <option value="zdt2">ZDT2 Problem</option>
                    <option value="zdt3">ZDT3 Problem</option>
                    <option value="zdt4">ZDT4 Problem</option>
                    <option value="zdt6">ZDT6 Problem</option>
                  </>
                )}
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
            {optimizationResult.final_point && (
              <p>
                <strong>Final Point:</strong> {optimizationResult.final_point.map((point, index) => (
                  <span key={index}>{point}{index < optimizationResult.final_point.length - 1 ? ', ' : ''}</span>
                ))}
              </p>
            )}
            {optimizationResult.final_value !== undefined && (
              <p><strong>Final Value:</strong> {optimizationResult.final_value}</p>
            )}
            {optimizationResult.iterations && (
              <p><strong>Iterations:</strong> {optimizationResult.iterations}</p>
            )}
            {/* You might want to add more checks for the pareto_front if you want to display it */}
          </div>
        </div>
      )}

    </div>
  );
};

export default FunctionsPage;
