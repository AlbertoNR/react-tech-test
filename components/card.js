import React from 'react'
import Link from "next/link";
import Emoji from './emoji';
const PokeCard = ({ name, image, types}) => (
  <Link href="/[name]" as={`/${name}`}>
    <div className="card">       
      <div className="card-img">
      <img src={image} />
      </div>
      <div className="card-content">
          <span className="card-title">{name}</span>
          <span className="card-types">{types && types.map(type =><Emoji key={type} type={type} />)}</span>
      </div>
    </div>
    </Link>
  )

  
  export default PokeCard;