import { useRouter } from 'next/router';
import { useGraphQL } from 'graphql-react';
import { motion, AnimatePresence } from 'framer-motion';

import { POKEMON } from '../queries';
import Loader from 'react-loader-spinner';

let easing = [0.175, 0.85, 0.42, 0.96];
const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
};

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};


const Pokemon = () => {
  const router = useRouter();
  const { name } = router.query;

  const { loading, cacheValue = {} } = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = 'https://graphql-pokemon.now.sh/';
    },
    operation: {
      query: POKEMON(name)
    }
  });
  const { data, error } = cacheValue;
  return data && data.pokemon ? (
    <motion.div initial="exit" animate="enter" exit="exit" className='pokemon-wrapper'>
      <motion.h1 animate={{ x: 200, duration: 2}}>
        {name}
      </motion.h1>
      <section className='columns-wrapper'>
        <div className='pokemon-column'>     
          <motion.img variants={imageVariants} src={data.pokemon.image} />    
        </div>
        <motion.div variants={textVariants} className='pokemon-column'>
          <div className='columns-wrapper'>
            <div className='pokemon-column'>
              <ul>
                <li className='grid'>
                  <span className='ability'>Height</span>
                  <span>{data.pokemon.height.maximum}</span>
                </li>
                <li className='grid'>
                  <span className='ability'>Weight</span>
                  <span>{data.pokemon.weight.maximum}</span>
                </li>
                <li className='grid'>
                  <span className='ability'>Classification</span>
                  <span>{data.pokemon.classification}</span>
                </li>
              </ul>
            </div>
            <div className='pokemon-column'>
              <ul>
                <li>
                  <span className='ability'>Resistant</span>
                  <div className='grid'>
                    {data.pokemon.resistant.map(res => (
                      <span key={res}>{res}</span>
                    ))}
                  </div>
                </li>
                <li>
                  <span className='ability'>Weaknesses</span>
                  <div className='grid'>
                    {data.pokemon.weaknesses.map(wek => (
                      <span key={wek}>{wek}</span>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  ) : loading ? (
    <motion.div variants={textVariants} className='centered'>
      <Loader type='Puff' color='#00BFFF' height={100} width={100} />
    </motion.div>
  ) : (
    <motion.div className='centered'>
      <p>Error! {error}</p>
    </motion.div>
  );
};

export default Pokemon;
