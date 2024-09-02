import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Satya Kumar";
  const age=22;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React is a popular JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components, which can manage their own state, and efficiently update and render when data changes. Here's a brief summary of its key features and concepts:</p>
        
        { <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" >
            
          Satya kumar chaudhary
        </a>
        }
        <p>Your name is :{name}</p>
        <p>Your age is :{age}</p>
      </header>
    </div>
  );
}

export default App;
