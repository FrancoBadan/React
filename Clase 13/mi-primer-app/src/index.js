import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
// import App from './App';
// import Boton from "./Boton.jsx"
// import Card from './ejemplos/Card';
import "bootstrap/dist/css/bootstrap.min.css"
import CardB from './ejemplos/CardB';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
{/* <Card apellido="Messi" nacimiento={1987} clubes={["Newells", "Barcelona"]} mundial={true} late={false}/>
<Card apellido="Ronaldo" nacimiento={1987} clubes={["Lisboa", "Manchester"]} mundial={false} late={true}/> */}
{/* <CardB onClick={()=>console.log("mas")}/>
<CardB onClick={()=>console.log("menos")}/> */}
<CardB/> 
</>
);

