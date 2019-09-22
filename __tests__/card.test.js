import React from 'react'
import { cleanup, render } from '@testing-library/react'
import PokeCard from '../components/card.js'

afterEach(cleanup)

test('PokeCard is not null', () => {
  
    const data = { name: 'Pikachu', number: '026', image: '' , types: ['Electric']};
    const { types, ...rest } = data;
    const { getByText, container } = render(<PokeCard type={types} {...rest} />)
    console.log(container);

    expect(getByText('Pikachu')).not.toBeNull();

})