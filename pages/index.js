import { useGraphQL } from "graphql-react";
import PokeCard from '../components/card';
import { POKEMONS_1GEN } from '../queries';

export default () => {
  const { loading, cacheValue = {} } = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = "https://graphql-pokemon.now.sh/";
    },
    operation: {
      query: POKEMONS_1GEN 
    }
  });

  const { data, error } = cacheValue;
  return data ? (
  <>
      { data.pokemons.map(pkmn => {
        const { id, ...rest } = pkmn;
        return <PokeCard key={id} {...rest} />;
      })}
  </>
  ) : loading ? (
    <p>Loading…</p>
  ) : (
    <p>Error! {error}</p>
  );
};
