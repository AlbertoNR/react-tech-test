import { useRouter } from "next/router";
import { useGraphQL } from "graphql-react";
import { POKEMON } from "../queries";
import Loader from 'react-loader-spinner'


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
    <div className="pokemon-wrapper">
      <h1>{name}</h1>
    <section className="columns-wrapper">
      <div className="pokemon-column">
        <img src={data.pokemon.image}/>
      </div>
      <div className="pokemon-column">
        <div className="columns-wrapper">
          <div className="pokemon-column">
            <ul>
              <li className="grid">
                <span className="ability">Height</span>
                <span>{data.pokemon.height.maximum}</span>
              </li>
              <li className="grid">
              <span className="ability">Weight</span>
              <span>{data.pokemon.weight.maximum}</span>
              </li>
              <li className="grid">
              <span className="ability">Classification</span>
              <span>{data.pokemon.classification}</span>
              </li>
            </ul>
          </div>
          <div className="pokemon-column">
        <ul>
              <li>
                <span className="ability">Resistant</span>
                <div className="grid">{data.pokemon.resistant.map(res => <span>{res}</span>)}</div>
              </li>
              <li>
              <span className="ability">Weaknesses</span>
              <div className="grid">{data.pokemon.weaknesses.map(wek => <span>{wek}</span>)}</div>
              </li>
            </ul>
            </div>
        </div>
      </div>
    </section>  
    </div>
  ) : loading ? (
    <div className="centered">
      	  <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            
	          />
    </div>
  ) : (
    <div className="centered">
      <p>Error! {error}</p>
    </div>
    
  );
};

export default Pokemon;
