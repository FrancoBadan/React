// importaciones
import { useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";

import whitReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const mySwal = whitReactContent(Swal);

export const Show = () => {
  // 1 configurar usestate (hook)
  const [heroes, setHeroes] = useState([]);

  // 2 referenciamos a la db de firestore
  const heroesColection = collection(db, "heroes");

  // 3 funcion para mostrar todas las docs
  const getHeroes = async () => {
    const data = await getDocs(heroesColection);

    setHeroes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  // 4 funcion para eliminar doc
  const deleteHeroes = async (id) => {
    const heroesDoc = doc(db, "heroes", id);
    await deleteDoc(heroesDoc);
    // getHeroes()
  }; 

  // 5 funcion para la confirmacion de sweetalert
  const confirmDelet = (id) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "No puede revertir esta accion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si deseo borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteHeroes(id); // llamamos a la funcion eliminar
        Swal.fire("Borrado!", "Tu heroe fue borrado.", "success");
      }
    });
  };

  // 6 use effect
  useEffect(() => getHeroes(), []);

  // 7 devolver
    return (<></>)
};
