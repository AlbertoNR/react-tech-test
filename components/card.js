import React from 'react'
import {  Card } from 'semantic-ui-react'
import Link from "next/link";
import Emoji from './emoji';
const PokeCard = ({ name, types}) => (
   
    <Card>  
       <Link href="/[name]" as={`/${name}`}>
      <Card.Content>
        <Card.Header>{name}</Card.Header>      
        <Card.Description>
          Type: {types && types.map(type =><Emoji type={type} />)}
        </Card.Description>
      </Card.Content>
      </Link>
    </Card>
    
  )

  
  export default PokeCard;