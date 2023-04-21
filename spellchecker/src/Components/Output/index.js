import React from 'react';

function Output({correctedText}) {
 console.log(`this is the argument passed into Output: ${correctedText.processedSentences[0]}`);
 
    return (
    <div>
      <p>{correctedText.processedSentences[0]}</p>
    </div>
  );


}

export default Output;