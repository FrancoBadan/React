import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

export const Edit = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [realName, setRealName] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  //   funcion que actualiza un documento
  const update = async (e) => {
    e.preventDefault();
    const heroeDoc = doc(db, "Heroes", id);
    const data = { age: Number(age), name: name, realName: realName };
    await updateDoc(heroeDoc, data);
    navigate("/");
  };

  //   funcion que trae el doc del heroe
  const getHeroeById = async (id) => {
    const heroeDoc = doc(db, "Heroes", id);
    const heroeDocument = await getDoc(heroeDoc);
    if (heroeDocument.exists()) {
      setAge(heroeDocument.data().age);
      setName(heroeDocument.data().name);
      setRealName(heroeDocument.data().realName);
    } else {
      console.log("No existe");
    }
  };

  useEffect(() => {
    getHeroeById(id);
  }, []);

  return (
    <div className="container">
    <div className="row">
      <div className="col">
        <h1>Create Heroe</h1>
        <form onSubmit={update}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nombre Real</label>
            <input
              value={realName}
              onChange={(e) => setRealName(e.target.value)}
              className="form-control"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Edad</label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="form-control"
              type="number"
            />
          </div>
          <button type="submit" className="btn btn-primary"> Create Heroe</button>
        </form>
      </div>
    </div>
  </div>
  );
};
