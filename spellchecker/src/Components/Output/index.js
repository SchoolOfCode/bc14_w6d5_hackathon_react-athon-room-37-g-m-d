import React from 'react';

function Output({correctedText}) {
  console.log(`Output State Updated ${correctedText}`) 
  return (
    <div>
      <ul>
        {correctedText.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default Output;