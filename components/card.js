import React from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import Emoji from './emoji';

const cardVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

const PokeCard = ({ name, image, types}) => (
  <Link href="/[name]" as={`/${name}`}>
    <motion.div whileHover={{ scale: 1.2 }} variants={cardVariants} className="card">       
      <div className="card-img">
      <img src={image} />
      </div>
      <div className="card-content">
          <span className="card-title">{name}</span>
          <span className="card-types">{types && types.map(type =><Emoji key={type} type={type} />)}</span>
      </div>
    </motion.div>
    </Link>
  )

  
  export default PokeCard;