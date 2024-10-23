import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/FunctionsPage.module.css';

const FunctionsPage = () => {
  const [optimizationType, setOptimizationType] = useState('');
  const [selectedFunction, setSelectedFunction] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');
  const [optimizationResult, setOptimizationResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleOptimizationTypeSelect = (event) => {
    setOptimizationType(event.target.value);
    setSelectedFunction(''); 
    setSelectedMethod('');  
    setOptimizationResult(null); 
  };

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
          optimizationType,
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
      <h1>Select Optimization Type, Function, and Method</h1>

      <select onChange={handleOptimizationTypeSelect} value={optimizationType} className={styles.optimizationTypeSelect}>
        <option value="">--Select Optimization Type--</option>
        <option value="soop">Single Objective Optimization (SOOP)</option>
        <option value="moop">Multi Objective Optimization (MOOP)</option>
      </select>

      {optimizationType && (
        <>
          <select onChange={handleFunctionSelect} value={selectedFunction} className={styles.functionSelect}>
            <option value="">--Select a Function--</option>
            {optimizationType === 'soop' ? (
              <>
                <option value="g1">g1: "(3 * x1) - cos(x2 * x3) - 0.5"</option>
                <option value="g2">g2: "x1^2 - 81 * (x2 + 0.1)^2 + sin(x3) + 1.06"</option>
                <option value="g3">g3: "exp(-x1 * x2) + 20 * x3 + (10 * π - 3) / 3"</option>
              </>
            ) : (
              <>
                <option value="zdt1">ZDT1: "f1 = x1, f2 = g(x)(1 - sqrt(f1/g(x)))"</option>
                <option value="zdt2">ZDT2: "f1 = x1, f2 = g(x)(1 - (f1/g(x))^2)"</option>
                <option value="zdt3">ZDT3: "f1 = x1, f2 = g(x)(1 - sqrt(f1/g(x)) - (f1/g(x)) * sin(10πf1))"</option>
                <option value="dtlz1">DTLZ1: "f_k = 0.5(1 + g(x)) * prod(cos(x_j π/2)), k=1,...,m"</option>
                <option value="dtlz2">DTLZ2: "f_k = (1 + g(x)) * prod(cos(x_j π/2)), k=1,...,m"</option>
                <option value="kursawe">Kursawe: "f1 = sum(-10 * exp(-0.2 * sqrt(x[i]^2 + x[i+1]^2))), f2 = sum(|x[i]|^0.8 + 5 * sin(x[i]^3)) for i = 1 to n"</option>
              </>
            )}
          </select>

          <select onChange={handleMethodSelect} value={selectedMethod} className={styles.methodSelect}>
            <option value="">--Select a Method--</option>
            {optimizationType === 'soop' ? (
              <>
                <option value="method1">Gradient Descent</option>
                <option value="method2">Newton-Raphson</option>
                <option value="method3">Steepest Gradient Descent</option>
              </>
            ) : (
              <>
                <option value="moop_method1">NSGA-II</option>
                <option value="moop_method2">SPEA2</option>
                <option value="moop_method3">MOEA/D</option>
              </>
            )}
          </select>

          <button onClick={handleOptimize} className={styles.optimizeButton} disabled={loading}>
            {loading ? 'Optimizing...' : 'Optimize'}
          </button>
        </>
      )}

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
