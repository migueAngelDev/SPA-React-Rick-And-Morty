import {
  CharacterFieldSet,
  CharacterCardP,
  CharacterCardBody,
  CharacterCardParagraph,
  CharacterCardImg,
} from "../styles/CardAndStyles.js";

export default function RoutingFunction({
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
    <CharacterFieldSet>
      <CharacterCardBody>
        <CharacterCardImg src={image} alt={name} />
        <CharacterCardP>{name}</CharacterCardP>
        <CharacterCardParagraph>Created: {created}</CharacterCardParagraph>
        <CharacterCardParagraph>
          Number of episodes: {episode}
        </CharacterCardParagraph>
        <CharacterCardParagraph>Gender: {gender}</CharacterCardParagraph>
        <CharacterCardParagraph>Location: {location}</CharacterCardParagraph>
        <CharacterCardParagraph>Origin: {origin}</CharacterCardParagraph>
        <CharacterCardParagraph>Species: {species}</CharacterCardParagraph>
        <CharacterCardParagraph>Status: {status}</CharacterCardParagraph>
        <CharacterCardParagraph>Type: {type}</CharacterCardParagraph>
      </CharacterCardBody>
    </CharacterFieldSet>
  );
}
