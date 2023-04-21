import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

function randomPicture(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export default function Spotlight({pieces}) {
    const [randomPicture, setRandomPicture] = useState(randomPicture(pieces));

    return (
        <Container>
            <h1>Spotlight</h1>
            <Image
                src={randomPicture.imageSource}
                alt={randomPicture.name}
                
               
            />
        </Container>
    );
}