import {BrowserRouter,Route,Routes} from "react-router-dom";
import { Show } from "./component/Show";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
<Route path="/" element={<Show/>}/>
<Route path="/create" element="Create"/>
<Route path="/edit/:id" element="Edit"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
