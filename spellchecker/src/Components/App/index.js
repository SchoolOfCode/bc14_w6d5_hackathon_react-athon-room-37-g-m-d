
import './App.css';
import Input from '../Input/index.js'

function App() {

  async function sendTextToAPI(text) {
    console.log(`this is the argument passed into sendTextToAPI: ${text}`);
    // the URL contains our API key that Max got by signing up for free
    const response = await fetch("http://api.intellexer.com/checkTextSpelling?apikey=225b50db-6a01-49bf-836e-2c98200c4f64&language=ENGLISH&errorTune=2&errorBound=3&minProbabilityTune=2&minProbabilityWeight=30&separateLines=true", {
    method: "POST",
    headers: {
      // "cache-control": "no-cache",
      // "Content-Type": "text/plain"
    },
    body: text,
  }); 
  const data = await response.json();
  // log the data to prove we have received it from the API
  console.log(data);
  // onSubmit(data);
};
  

  function handleSubmit(text) {
    console.log(`the user submitted: ${text}`);
    sendTextToAPI(text);
  }

  return (
    <div className="App">
      <header className="App-header">
      <Input onSubmit={handleSubmit}/>
      </header>
    </div>
  );
}

export default App;
