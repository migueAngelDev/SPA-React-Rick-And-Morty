import React, { useState, useEffect } from "react";
import Filter from "../../components/atoms/Filter";
import Loading from "../../components/molecules/Loading";
import Cards from "../Cards";
import { CardWrapper } from "./Characters.styles";
import SearchNotFound from "../../components/Messages/searchNotFound";
export default function Characters() {
  const [search, setSearch] = useState("");
  const handleOnValue = (e) => {
    setSearch(e.target.value);
  };
  const [rickAndMorty, setRickAndMorty] = useState([]);

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

  const GetFilter = rickAndMorty.filter((val) => {
    if (search === "") {
      return val;
    } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
      return val;
    }
  });
  console.log(GetFilter);
  return (
    <>
      <Filter handleOnValue={handleOnValue} />
      <CardWrapper>
        {rickAndMorty.length === 0 ? (
          <Loading />
        ) : GetFilter.length === 0 ? (
          <SearchNotFound />
        ) : (
          GetFilter.map((el) => (
            <Cards
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
      </CardWrapper>
    </>
  );
}
