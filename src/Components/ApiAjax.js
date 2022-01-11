import React, { useState, useEffect } from "react";
import RickFunction from "./RickFunction";

export default function ApiAjax() {
  const [rickAndMorty, setRickAndMorty] = useState([]);
  useEffect(() => {
    let url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((res) => res.json())

      .then((users) => {
        const datas = users.results;
        console.log(datas);
        datas.forEach((data) => {
          let rickMorty = {
            id: data.id,
            name: data.name,
            image: data.image,
            species: data.species,
            gender: data.gender,
            status: data.status,
          };
          setRickAndMorty((rickAndMorty) => [...rickAndMorty, rickMorty]);
        });
      });
  }, []);
  return (
    <>
      {rickAndMorty.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        rickAndMorty.map((el) => (
          <RickFunction
            key={el.id}
            image={el.image}
            name={el.name}
            species={el.species}
            status={el.status}
            gender={el.gender}
          />
        ))
      )}
    </>
  );
}
