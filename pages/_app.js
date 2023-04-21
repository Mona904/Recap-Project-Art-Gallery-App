import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";
const fetcher = (URL) => fetch(URL).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  if (error) {
    return <h1>Error!</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return <h1>No data!</h1>;
  }
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
