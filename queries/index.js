export const POKEMONS_1GEN = `
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

export const POKEMON = (name) => `
{
  pokemon(name: "${name}") {   
    number
    name
    image
    attacks {
      special {
        name
        type
        damage
      }
    }
    evolutions {
      number
      name
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
      }
    }
  }
}
`;

