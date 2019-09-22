import { useGraphQL } from 'graphql-react';
import PokeCard from '../components/card';
import { POKEMONS_1GEN } from '../queries';
import { SearchFilterPanel } from '../components/search';
import Loader from 'react-loader-spinner';

export default  () => {
  const { loading, cacheValue = {} } = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = 'https://graphql-pokemon.now.sh/';
    },
    operation: {
      query: POKEMONS_1GEN
    }
  });

  const { data, error } = cacheValue;
  return data ? (
    <>
      <SearchFilterPanel
        data={data.pokemons}
        render={data => {
          return data.map(pkmn => {
            const { id, ...rest } = pkmn;
            return <PokeCard key={id} {...rest} />;
          });
        }}
      />
    </>
  ) : loading ? (
    <div className='centered'>
      <Loader
        type='Puff'
        color='#00BFFF'
        height={100}
        width={100}
        timeout={3000} 
      />
    </div>
  ) : (
    <div className='centered'>
      <p>Error! {error}</p>
    </div>
  );
};
