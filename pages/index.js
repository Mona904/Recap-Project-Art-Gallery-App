import ArtPieces from "@/components/artpieces";
import useSWR from "swr";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art"
  );

  return <ArtPieces pieces={data} />;
}
