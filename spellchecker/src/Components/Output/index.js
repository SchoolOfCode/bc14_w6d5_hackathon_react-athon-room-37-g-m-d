import React from 'react';

function Output({correctedText}) {
  console.log(`Output State Updated ${correctedText}`)
//  console.log(`this is the argument passed into Output: ${correctedText.processedSentences[0]}`);
 
    return (
    <div>
      <p>{correctedText}</p>
    </div>
  );


}

export default Output;