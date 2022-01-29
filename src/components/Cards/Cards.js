import React from "react";
import {
  CardsA,
  CardsBody,
  CardsFieldSet,
  CardsImg,
  CardsParagraph,
} from "./Cards.styles";

export default function Cards({ name, id, image, status, species, gender }) {
  return (
    <CardsFieldSet>
      <CardsImg src={image} alt={name} />
      <CardsBody>
        <CardsA href={`/character/${id}`}>{name}</CardsA>
        <CardsParagraph>Status: {status}</CardsParagraph>
        <CardsParagraph>Species: {species}</CardsParagraph>
        <CardsParagraph>Gender: {gender}</CardsParagraph>
      </CardsBody>
    </CardsFieldSet>
  );
}
