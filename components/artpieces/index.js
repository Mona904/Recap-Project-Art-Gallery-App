import ArtPiecePreview from "../artpiecepreview"
export default function ArtPieces ({pieces}) {
    return (
        <ul>
            {pieces.map(piece => <ArtPiecePreview key={piece.id} image= {piece.image} title= {piece.title} artist= {piece.artist} />)}
        </ul>
    
)}