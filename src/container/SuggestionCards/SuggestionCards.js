import React, { useState, useEffect } from "react";
import Loading from "../../messages/Loading";
import { getCharacters } from "../../services/characters";
import MultipleCards from "../../components/Cards/MultipleCards/MultipleCards";
import { CardWrapper } from "../Characters/MultipleCharacters/MultipleCharacters.styles";

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
        <MultipleCards
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
