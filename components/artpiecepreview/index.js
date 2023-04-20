
export default function ArtPiecePreview({image,title,artist}) {
    return (
        <div>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{artist}</p>
        </div>
    );
}