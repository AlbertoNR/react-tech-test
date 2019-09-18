import { useRouter } from "next/router";
import { useGraphQL } from "graphql-react";
import { POKEMON } from "../queries";

const Pokemon = () => {
  const router = useRouter();
  const { name } = router.query;

  const { loading, cacheValue = {} } = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = "https://graphql-pokemon.now.sh/";
    },
    operation: {
      query: POKEMON(name)
    }
  });
  const { data, error } = cacheValue;
  return data ? (
    <>
      <h1>Pokemon: {name}</h1>
      <pre>{JSON.stringify(data.pokemon, null, 2)}</pre>
    </>
  ) : loading ? (
    <p>Loading…</p>
  ) : (
    <p>Error! {error}</p>
  );
};

export default Pokemon;
