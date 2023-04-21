import ArtPieces from "@/components/artpieces";

export default function Gallery({ data }) {
    return (
        <>
            <ArtPieces data={data} />
        </>
    );
}