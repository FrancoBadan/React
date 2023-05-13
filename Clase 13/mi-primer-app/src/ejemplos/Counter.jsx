import { useState, useEffect} from "react";
import Button from "react-bootstrap/esm/Button";


export const Counter=()=>{

 const [count,setCount]= useState(0)

useEffect(()=>{
 console.log("cambio el contador")
},[count])

 return(
    <>
    <div className="d-flex my-2 ">
    <Button onClick={()=>setCount(count+1)} variant="success">+</Button>
    <p>{count}</p>
    <Button onClick={()=>setCount(count-1)} variant="success">-</Button>
    </div>
    </>
 )
};