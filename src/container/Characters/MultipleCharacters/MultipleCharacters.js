import React, { useState, useEffect } from "react";
import Filter from "../../../components/atoms/Filter";
import Loading from "../../../messages/Loading";
import SearchNotFound from "../../../messages/searchNotFound";
import { getCharacters } from "../../../services/characters";
import MultipleCards from "../../../components/Cards/MultipleCards/MultipleCards";
import { CardWrapper } from "./MultipleCharacters.styles";

export default function MultiplesCharacters() {
  const [search, setSearch] = useState("");
  const [rickAndMorty, setRickAndMorty] = useState([]);

  const handleOnValue = (e) => {
    const currentSearch = e.target.value?.toLowerCase();
    setSearch(currentSearch);
  };

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
      <Filter handleOnValue={handleOnValue} />
      <GridCards rickAndMorty={rickAndMorty} search={search} />
    </>
  );
}

const GridCards = ({ rickAndMorty, search }) => {
  const charactersFiltered = rickAndMorty.filter((val) => {
    const currentValue = val.name.toLowerCase();
    return currentValue.includes(search) || search === "";
  });

  const isEmpty = rickAndMorty.length === 0;
  const isNotMatch = charactersFiltered.length === 0;

  if (isEmpty) {
    return <Loading />;
  }

  if (isNotMatch) {
    return <SearchNotFound />;
  }

  return (
    <CardWrapper>
      {charactersFiltered.map((el) => (
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
