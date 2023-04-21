export default function ArtPiecePreview({ image, name, artist }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{artist}</p>
    </div>
  );
}
