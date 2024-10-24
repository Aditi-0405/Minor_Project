import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/FunctionsPage.module.css';

const soopFunctionDetails = {
  'cross_in_tray': {
    name: 'Cross-in-Tray Function',
    equation: 'f(x_1, x_2) = -0.0001 * (|sin(x_1) * sin(x_2) * exp(|100 - sqrt(x_1^2 + x_2^2)| / π)| + 1)^0.1'
  },
  'holder_table': {
    name: 'Holder Table Function',
    equation: 'f(x_1, x_2) = -|sin(x_1) * cos(x_2) * exp(|1 - sqrt(x_1^2 + x_2^2)|)|'
  },
  'levy_n13': {
    name: 'Levy Function N. 13',
    equation: 'f(x_1, x_2) = sin^2(3πx_1) + (x_1 - 1)^2 * (1 + sin^2(3πx_2)) + (x_2 - 1)^2 * (1 + sin^2(2πx_2))'
  }
};

const moopFunctionDetails = {
  'zdt1': {
    name: 'ZDT1 Problem',
    equation: `f_1(x) = x_1, f_2(x) = g(x) * (1 - sqrt(x_1 / g(x))) where g(x) = 1 + 9 / (n - 1) * sum(x_i)`
  },
  'zdt2': {
    name: 'ZDT2 Problem',
    equation: `f_1(x) = x_1, f_2(x) = g(x) * (1 - (x_1 / g(x))^2) where g(x) = 1 + 9 / (n - 1) * sum(x_i)`
  },
  'zdt3': {
    name: 'ZDT3 Problem',
    equation: `f_1(x) = x_1, f_2(x) = g(x) * (1 - sqrt(x_1 / g(x)) - (x_1 / g(x)) * sin(10πx_1)) where g(x) = 1 + 9 / (n - 1) * sum(x_i)`
  },
  'zdt4': {
    name: 'ZDT4 Problem',
    equation: `f_1(x) = x_1, f_2(x) = g(x) * (1 - sqrt(x_1 / g(x))) where g(x) = 1 + 10 * (n - 1) + sum(x_i^2 - 10 * cos(4πx_i))`
  }
};

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
    setOptimizationMethod('');
    setOptimizationResult(null);
    setError('');
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
        endpoint =
          optimizationMethod === 'gradient_descent'
            ? 'http://127.0.0.1:8080/api/optimize/gradient_descent'
            : 'http://127.0.0.1:8080/api/optimize/newton_raphson';
      } else if (optimizationType === 'moop') {
        endpoint = `http://127.0.0.1:8080/api/optimize/moop/${selectedFunction}`;
      }

      const res = await axios.post(endpoint);
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
                <option value="steepest_gradient">Steepest Gradient Descent </option>
                <option value="pso">Particle Swarm Optimization</option>
                <option value="pso">Simulated Annealing</option>
              </select>
            </>
          )}

          {optimizationType === 'moop' && (
            <>
              <select onChange={handleMethodSelect} value={optimizationMethod} className={styles.methodSelect}>
                <option value="">--Select Optimization Method--</option>
                <option value="nsga2">NSGA-II</option>
              </select>
            </>
          )}

          {optimizationMethod && (
            <>
              <select onChange={handleFunctionSelect} value={selectedFunction} className={styles.functionSelect}>
                <option value="">--Select a Function--</option>
                {optimizationType === 'soop' && (
                  <>
                    {Object.keys(soopFunctionDetails).map((key) => (
                      <option value={key} key={key}>
                        {soopFunctionDetails[key].name}
                      </option>
                    ))}
                  </>
                )}
                {optimizationType === 'moop' && (
                  <>
                    {Object.keys(moopFunctionDetails).map((key) => (
                      <option value={key} key={key}>
                        {moopFunctionDetails[key].name}
                      </option>
                    ))}
                  </>
                )}
              </select>

              {selectedFunction && (
                <div className={styles.functionDetails}>
                  <h2>{optimizationType === 'soop' ? soopFunctionDetails[selectedFunction].name : moopFunctionDetails[selectedFunction].name}</h2>
                  <p><strong>Equation:</strong> {optimizationType === 'soop' ? soopFunctionDetails[selectedFunction].equation : moopFunctionDetails[selectedFunction].equation}</p>
                </div>
              )}

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
                <strong>Final Point:</strong> {optimizationResult.final_point[0].map((point, index) => (
                  <span key={index}>
                    {point}{index < optimizationResult.final_point[0].length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            )}

            {optimizationResult.final_value !== undefined && (
              <p><strong>Final Value:</strong> {optimizationResult.final_value}</p>
            )}
            {/* {optimizationResult.iterations && (
              <p><strong>Iterations:</strong> {optimizationResult.iterations}</p>
            )} */}
            {optimizationResult.pareto_front && (
              <p><strong>Pareto Front:</strong> {JSON.stringify(optimizationResult.pareto_front)}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FunctionsPage;
