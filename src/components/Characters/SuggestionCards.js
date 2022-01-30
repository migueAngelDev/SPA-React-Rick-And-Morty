import React, { useState, useEffect } from "react";
import Loading from "../Messages/Loading";
import { getMulCharacters } from "../../services/characters";
import Cards from "../Cards";
import { CardWrapper } from "./Characters.styles";

export default function SuggestionsCards() {
  const [rickAndMorty, setRickAndMorty] = useState([]);

  useEffect(() => {
    const getInitialState = async () => {
      try {
        const response = await getMulCharacters();
        setRickAndMorty(response);
      } catch (error) {}
    };

    getInitialState();
  }, []);

  return (
    <>
      <GridCards rickAndMorty={rickAndMorty} />
    </>
  );
}

const GridCards = ({ rickAndMorty, search }) => {
  const isEmpty = rickAndMorty.length === 0;

  // console.log(rickAndMorty);
  if (isEmpty) {
    return <Loading />;
  }

  return (
    <CardWrapper>
      {rickAndMorty.map((el) => (
        <Cards
          key={el.id}
          image={el.image}
          name={el.name}
          species={el.species}
          status={el.status}
          gender={el.gender}
          id={el.id}
        />
      ))}
    </CardWrapper>
  );
};
