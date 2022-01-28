import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/molecules/Loading";
import Card from "../Card";

export default function Character() {
  const { id } = useParams();

  const [rickAndMorty, setRickAndMorty] = React.useState([]);
  React.useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    let url = "https://rickandmortyapi.com/api/character";
    const datas = await fetch(`${url}/${id}`);
    const data = await datas.json();
    setRickAndMorty(data);
  };
  return (
    <>
      {rickAndMorty.length === 0 ? (
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
