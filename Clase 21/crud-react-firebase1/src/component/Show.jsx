// importaciones
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";

import whitReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
const mySwal = whitReactContent(Swal);

export const Show = () => {
  // 1 configurar usestate (hook)
  const [heroes, setHeroes] = useState([]);

  // 2 referenciamos a la db de firestore
  const heroesCollection = collection(db, "Heroes");

  // 3 funcion para mostrar todas las docs
  const getHeroes = async () => {
    const data = await getDocs(heroesCollection);

    setHeroes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  // 4 funcion para eliminar doc
  const deleteHeroes = async (id) => {
    const heroesDoc = doc(db, "Heroes", id);
    await deleteDoc(heroesDoc);
    getHeroes();
  };

  // 5 funcion para la confirmacion de sweetalert
  const confirmDelete = (id) => {
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
  useEffect(() => {
    getHeroes();
  }, []);

  // 7 devolver
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2 my-2">
              <Link to="/create" className="btn btn-secondary">
                Crear
              </Link>
            </div>
            <table class="table table-dark table-hover">
              <thead>
                <tr>
                  <td>Nombre</td>
                  <td>Nombre Real</td>
                  <td>Edad</td>
                  <td>Acciones</td>
                </tr>
              </thead>
              <tbody>
                {heroes.map((heroe) => (
                  <tr>
                    <td>{heroe.name}</td>
                    <td>{heroe.realName}</td>
                    <td>{heroe.age}</td>
                    <td>
                      <Link to={`edit/${heroe.id}`} className="btn btn-light">
                        <i className="fa-solid fa-pencil"></i>
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => confirmDelete(heroe.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
