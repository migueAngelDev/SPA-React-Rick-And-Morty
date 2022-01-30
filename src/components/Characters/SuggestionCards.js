import React, { useState, useEffect } from "react";
import Loading from "../../Messages/Loading";
import { getCharacters } from "../../services/characters";
import Cards from "../Cards";
import { CardWrapper } from "./Characters.styles";

export default function SuggestionsCards() {
  const [rickAndMorty, setRickAndMorty] = useState([]);

  useEffect(() => {
    const getInitialState = async () => {
      try {
        const response = await getCharacters();
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

  const TreeCards = rickAndMorty.slice(0, 3);

  if (isEmpty) {
    return <Loading />;
  }

  return (
    <CardWrapper>
      {TreeCards.map((el) => (
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
