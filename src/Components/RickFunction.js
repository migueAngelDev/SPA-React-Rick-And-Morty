import {
  CardBody,
  CardFieldSet,
  Cardh1,
  CardImg,
  CardParagraph,
} from "./CardApi";
export default function RickFunction({ name, image }) {
  return (
    <CardFieldSet>
      <CardImg src={image} alt={name} />
      <CardBody>
        <Cardh1>{name}</Cardh1>
        <CardParagraph>{name}</CardParagraph>
      </CardBody>
    </CardFieldSet>
  );
}
