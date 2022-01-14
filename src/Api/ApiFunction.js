import React from "react";
import {
  CardBody,
  CardFieldSet,
  CardImg,
  CardParagraph,
  CardA,
} from "../Assets/Styles/CardAndStyles.js";

export default function RickFunction({
  name,
  id,
  image,
  status,
  species,
  gender,
}) {
  return (
    <CardFieldSet>
      <CardImg src={image} alt={name} />
      <CardBody>
        <CardA href={`/character/${id}`}>{name}</CardA>
        <CardParagraph>Status: {status}</CardParagraph>
        <CardParagraph>Species: {species}</CardParagraph>
        <CardParagraph>Gender: {gender}</CardParagraph>
      </CardBody>
    </CardFieldSet>
  );
}
