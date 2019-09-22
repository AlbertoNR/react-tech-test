export const POKEMONS_1GEN =  /* GraphQL */ `
{
  pokemons(first: 151) {
    id
    number
    name
    types
    image
    attacks {
      special {
        name
        type
        damage
      }
    }
  }
}
`;

export const POKEMON = (name) => /* GraphQL */ `
{
  pokemon(name: "${name}") {   
    number
    name
    image
    weight{
      maximum
    }
    height{
      maximum
    }
    classification
    weaknesses
    resistant
  }
}
`;

