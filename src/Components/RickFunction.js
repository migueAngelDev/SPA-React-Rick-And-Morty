import {
  CardBody,
  CardFieldSet,
  CardA,
  CardImg,
  CardParagraph,
} from "./CardApi";
export default function RickFunction({ name, image, status, species, gender }) {
  return (
    <CardFieldSet>
      <CardImg src={image} alt={name} />
      <CardBody>
        <CardA href="#">{name}</CardA>
        <CardParagraph>Status: {status}</CardParagraph>
        <CardParagraph>Species: {species}</CardParagraph>
        <CardParagraph>Gender: {gender}</CardParagraph>
      </CardBody>
    </CardFieldSet>
  );
}
