import React from "react";
import {
  CardFieldSet,
  CardBody,
  CardImg,
  CardP,
  CardParagraph,
} from "./Card.Styles";

export default function Card({
  name,
  image,
  status,
  species,
  gender,
  created,
  location,
  origin,
  type,
  episode,
}) {
  return (
    <CardFieldSet>
      <CardBody>
        <CardImg src={image} alt={name} />
        <CardP>{name}</CardP>
        <CardParagraph>Created: {created}</CardParagraph>
        <CardParagraph>Number of episodes: {episode}</CardParagraph>
        <CardParagraph>Gender: {gender}</CardParagraph>
        <CardParagraph>Location: {location}</CardParagraph>
        <CardParagraph>Origin: {origin}</CardParagraph>
        <CardParagraph>Species: {species}</CardParagraph>
        <CardParagraph>Status: {status}</CardParagraph>
        <CardParagraph>Type: {type}</CardParagraph>
      </CardBody>
    </CardFieldSet>
  );
}
