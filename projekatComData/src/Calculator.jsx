import React, { useState, useEffect } from 'react';
import './index.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        try {
          const computedResult = eval(input);
          setResult(computedResult);
          setHistory([...history, { input, result: computedResult }]);
          setInput('');
        } catch {
          setResult('Error');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input, history]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="calculator-display">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter calculation"
          autoFocus
        />
        <div className="calculator-result">
          {history.map((item, index) => (
            <div key={index}>
              <p>{`${item.input} = ${item.result}`}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="calculator-buttons">
      </div>
    </div>
  );
};

export default Calculator;
