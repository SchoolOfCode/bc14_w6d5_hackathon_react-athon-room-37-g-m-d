import React from 'react';

function Output({correctedText, handleUndo}) {
  console.log(`Output State Updated ${correctedText}`) 
  return (
    <div>
      <ul>
        {correctedText.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
      <button onClick={() => handleUndo()}>Undo</button>
    </div>
  );
}

export default Output;