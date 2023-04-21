import Image from "next/image";
export default function ArtPiecePreview({ image, name, artist, slug }) {
  return (
    <div>
      <h2>{name}</h2>
      <Image src={image} alt={name} width= {500} height={500}/>
      <p>{artist}</p>
    </div>
  );
}
