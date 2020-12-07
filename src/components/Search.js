import React, { useEffect, useState } from "react";
//import LinksForm from "./LinksForm";

import { db } from "../firebase";
import { toast } from "react-toastify";

const Links = () => {

const initialStateValues = {
        url: "",
        dni: "",
        name: "",
        description: "",

    };
  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [values, setValues] = useState(initialStateValues);

  const getLinks = async () => {
    db.collection("links").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLinks(docs);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values.dni)
    //getLinks()
    getLinkById(values.dni)
    //setValues({ ...initialStateValues });
  };

  const getLinkById = async (id) => {
    //const snapshot = await db.collection("links").doc(id).get();
    const snapshot = await db.collection("links").where('dni', '==', id).get();
    const docs = [];
    snapshot.forEach(doc => {
      //console.log(doc.id, '=>', doc.data());
      //setLinks([{dni: doc.dni, name: doc.name, url: doc.url}])
      docs.push({ ...doc.data(), id: doc.id });

    });
    setLinks(docs)
    console.log(links)

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };


  useEffect(() => {
    //getLinks();
  }, []);

  return (
    <>
      <div className="col-md-4 p-2">
<form onSubmit={handleSubmit} className="card card-body border-primary">

<div className="form-group input-group">
  <div className="input-group-text bg-light">
    <i className="material-icons">create</i>
  </div>
  <input
    type="text"
    value={values.dni}
    name="dni"
    placeholder="DNI"
    className="form-control"
    onChange={handleInputChange}
  />
</div>

<button className="btn btn-primary btn-block">
   Consultar
</button>
</form>
      </div>
      
      <div className="col-md-8 p-2">
        {links.map((link, index) => (
          <div className="card mb-1" key={index}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4>DNI: {link.dni}</h4>

              </div>
              <h6>Nombres: {link.name}</h6>
              <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Links;
