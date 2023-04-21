import React from 'react';
import './output.css';

function Output({correctedText, handleUndo}) {
  console.log(`Output State Updated ${correctedText}`) 
  return (
    <div className="output-container">
      <ul className="output-list">
        {correctedText.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
      <button onClick={() => handleUndo()} className="undo-button">Undo</button>
    </div>
  );
}

export default Output;