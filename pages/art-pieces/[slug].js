import { useRouter } from "next/router";
import styled from "styled-components";


export default function DetailPage({ artPieces}) {
const router = useRouter();
const { slug } = router.query;
const artPiece = artPieces.find((piece) => piece.slug === slug);


return (
    <ArtPieceDetails
    image={artPiece.imageSource}
    title={artPiece.name}
    artist={artPiece.artist}
    year={artPiece.year}
    genre={artPiece.genre}
    artPiece={artPiece}
    />
);

}