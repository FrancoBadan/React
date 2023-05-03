//importaciones
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"

import Swal from "sweetalert2"
import whitReactContent from "sweetalert2-react-content"
const mySwal= whitReactContent(Swal)








export const show=()=>{
    //1 configurar useState(hook)
    const [heroes,setHeroes]= useState([]) 

    //2 referenciamos a la bd de la firebase
    const heroesCollection = collection(db,"heroes")

    //3 funcion para mostrar todos los docs
    const getHeroes = async() =>{
         const data = await getDocs(heroesCollection)

         setHeroes(
            data.docs.map(doc=>({...doc.data(),id:doc.id}))
         )
         
    }

    //4 funcion para eliminar un docs
    const deleteHeroes = async(id)=>{
        const heroeDoc = doc(db,"heroes",id)
        await deleteDoc(heroeDoc)
    }


    //5 funcion apra la confirmacion de sweet alert 
    const comfirmDelete=()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteHeroes(id)
              Swal.fire(
                'Borrado!',
                'Tu heroe ha sido borrado.',
                'success'
              )
            }
          })
    }

    //6 use effect
    useEffect(()=>{
         getHeroes()
    },[])





    //7 devolver la vista de nuestro componente

 


return(<></>)

}