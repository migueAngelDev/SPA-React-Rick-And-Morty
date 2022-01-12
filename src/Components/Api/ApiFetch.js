import React, { useState, useEffect } from "react";
import RickFunction from "./ApiFunction";

export default function ApiAjax() {
  // const [status, setStatus] = useState("initial");
  const [rickAndMorty, setRickAndMorty] = useState([]);
  // const [data, setData] = useState([]);

  // const query = async () => {
  //   try {
  //     let url =
  //       "https://rickandmortyapi.com/api/character/?name=rick&status=unknown";
  //     const queryResult = await fetch(url).then((res) => res.json());
  //     setStatus("done");
  //     setData(queryResult.results);
  //   } catch (err) {
  //     setStatus("Ocurrió un error");
  //   }
  // };

  useEffect(() => {
    let url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((res) => res.json())

      .then((users) => {
        const datas = users.results;
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
            id={el.id}
          />
        ))
      )}
    </>
  );
}
