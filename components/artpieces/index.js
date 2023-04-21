import ArtPiecePreview from "../artpiecepreview";
export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "0.2rem",
          listStyle: "none",
        }}
      >
        {pieces.map((piece) => (
          <li key={piece.id}>
            <ArtPiecePreview
              image={piece.imageSource}
              name={piece.name}
              artist={piece.artist}
              slug={piece.slug}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
