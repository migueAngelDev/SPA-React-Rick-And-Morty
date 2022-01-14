import React, { useState, useEffect } from "react";
import {
  CardWrapper,
  FieldSetFilter,
  IconSearch,
  SearchInput,
  WrapperFilter,
} from "../styles/CardAndStyles";
import Loading from "../Loading/Loading";
import RickFunction from "./ApiFunction";

export default function ApiAjax() {
  const [rickAndMorty, setRickAndMorty] = useState([]);
  const [search, setSearch] = useState("");

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
      <div>
        <WrapperFilter>
          <FieldSetFilter>
            <IconSearch src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" />
            <SearchInput
              type="search"
              placeholder="Search..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </FieldSetFilter>
        </WrapperFilter>
      </div>
      <CardWrapper>
        {rickAndMorty.length === 0 ? (
          <Loading />
        ) : (
          rickAndMorty
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((el) => (
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
      </CardWrapper>
    </>
  );
}
