import React from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import Emoji from './emoji';
const PokeCard = ({ name, image, types}) => (
  <Link href="/[name]" as={`/${name}`}>
    <motion.div whileHover={{ scale: 1.2 }}  className="card">       
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