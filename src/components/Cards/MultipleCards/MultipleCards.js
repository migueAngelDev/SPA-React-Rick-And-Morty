import React from "react";
import { Link } from "react-router-dom";
import {
  CardsBody,
  CardsFieldSet,
  CardsImg,
  CardsParagraph,
} from "./MultipleCards.styles";

export default function MultipleCards({
  name,
  id,
  image,
  status,
  species,
  gender,
}) {
  return (
    <CardsFieldSet>
      <CardsImg src={image} alt={name} />
      <CardsBody>
        <Link to={`/character/${id}`}>{name}</Link>
        <CardsParagraph>Status: {status}</CardsParagraph>
        <CardsParagraph>Species: {species}</CardsParagraph>
        <CardsParagraph>Gender: {gender}</CardsParagraph>
      </CardsBody>
    </CardsFieldSet>
  );
}
