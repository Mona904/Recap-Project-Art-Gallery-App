import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function ArtPieceDetails({image, title, artist, year, genre, artPiece}) {
    return (
        <Wrapper>
            <Image src={image} alt={title} width={200} height={200} />
            
                <h2>Title: {title}</h2>
                <h3>Artist: {artist}</h3>
                <p>Year: {year}</p>
                <p>{genre}</p>
                <Link href="/art-pieces">
                <BackButton type= "Button">Back</BackButton>
                </Link>
            
        </Wrapper>
    )
}