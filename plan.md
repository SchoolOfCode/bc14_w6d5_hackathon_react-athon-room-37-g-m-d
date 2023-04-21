# Plan for hackathon project 20230421

## Testing functionalities of Intellexer API

### Summarizer
- The summaries are not great but the API is very fast and it works

### Multiple URL summarizer
- We could not get this to work

### Comparator
- We tested the CompareURLs feature and it worked well and responded quickly
- It returns a JSON object with the comparison results, including a a key of "proximity" which is a number between 0 and 1 that represents the similarity between the two documents
    - e.g. **google.com** and **google.com** score **1**
    - e.g. **amazon.com** and **amazon.co.uk** score about **0.6**
- We could take the float and convert it to a percentage to display to the user in a `<p>` element

### Spell Checker
- We got it to work using POST requests
- It returns a JSON object with a key of "sourceSentences" and "processedSentences"
- The former contains the user input, and the latter contains the corrected text that the API has returned

## Planning the app

- We decided to use 3 of the APIs
    - Summarizer
    - Comparator
    - Spell Checker
