export default function RickFunction({ name, image }) {
  return (
    <figure>
      <img src={image} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}
