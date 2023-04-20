import ArtPieces from '@/components/artpieces';
import useSWR from'swr';

export default function HomePage() {
const { data: pieces, error,isLoading } = useSWR('https://example-apis.vercel.app/api/art');
if (error) {
  return <h1>Error!</h1>;
}
if (isLoading) {
  return <h1>Loading...</h1>;
}
return (
<ArtPieces pieces= {pieces}/>
);

}
