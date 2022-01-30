import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../messages/Loading";
import SingleCard from "../../../components/Cards/SingleCard/SingleCard";
import { getCharacter } from "../../../services/characters";

export default function SingleCharacter() {
  const { id } = useParams();

  const [rickAndMorty, setRickAndMorty] = useState([]);

  useEffect(() => {
    const getInitialState = async () => {
      const res = await getCharacter(id);
      setRickAndMorty(res);
    };
    getInitialState();
  }, [id]);

  const isEmpty = rickAndMorty.length === 0;
  return (
    <>
      {isEmpty ? (
        <Loading />
      ) : (
        <SingleCard
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
