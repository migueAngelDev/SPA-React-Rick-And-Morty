import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dataApi } from "../../data/index";
import Loading from "../Messages/Loading";
import Card from "../Card";

export default function Character() {
  const { id } = useParams();

  const [rickAndMorty, setRickAndMorty] = useState([]);
  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    let url = dataApi.api;
    const datas = await fetch(`${url}/${id}`);
    const data = await datas.json();
    setRickAndMorty(data);
  };
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
