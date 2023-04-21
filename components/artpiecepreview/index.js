import Image from "next/image";
import Link from "next/link";
export default function ArtPiecePreview({ image, name, artist, slug }) {
  return (
    <div>
      <h2>{name}</h2>
    <Link href={`/art-pieces/${slug}`}>
      <Image src={image} alt={name} width= {500} height={500}/>
      </Link>
      <p>{artist}</p>
    </div>
  );
}
