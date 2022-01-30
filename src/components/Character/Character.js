import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Messages/Loading";
import Card from "../Card";
import { getCharacter } from "../../services/characters";

export default function Character() {
  const { id } = useParams();

  const [rickAndMorty, setRickAndMorty] = useState([]);

  useEffect(() => {
    const getInitialState = async () => {
      const res = await getCharacter(id);
      setRickAndMorty(res);
    };
    getInitialState();
  }, []);

  const isEmpty = rickAndMorty.length === 0;
  return (
    <>
      {isEmpty ? (
        <Loading />
      ) : (
        <Card
          image={rickAndMorty.image}
          name={rickAndMorty.name}
          species={rickAndMorty.species}
          status={rickAndMorty.status}
          gender={rickAndMorty.gender}
          created={new Date(rickAndMorty.created).toLocaleDateString()}
          origin={rickAndMorty.origin.name}
          location={rickAndMorty.location.name}
          type={rickAndMorty.type || "unanswered"}
          episode={rickAndMorty.episode.length}
        />
      )}
    </>
  );
}
