import React, { useState } from 'react';
import styles from '../styles/CustomFunctionsPage.module.css';

const CustomFunctionsPage = () => {
  const [functionInput, setFunctionInput] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFunctionChange = (e) => {
    setFunctionInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (!functionInput.trim()) {
      alert('Please enter a function.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8080/api/optimize/custom_function', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ function: functionInput }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        setError(data.error || 'An error occurred.');
      }
    } catch (error) {
      setError('Network error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Optimize Custom Function</h1>
      <textarea
        value={functionInput}
        onChange={handleFunctionChange}
        placeholder="Enter a function in terms of x_1 and x_2"
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Optimizing...' : 'Start Optimization'}
      </button>

      {error && <p className={styles.error}>{error}</p>}

      {result && (
        <div className={styles.results}>
          <h3>Optimization Results:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CustomFunctionsPage;
