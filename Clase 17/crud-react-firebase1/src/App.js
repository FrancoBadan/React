import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
<Route path="/" element="show"/>
<Route path="/create" element="Create"/>
<Route path="/edit/:id" element="Edit"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
