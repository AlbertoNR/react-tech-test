import React from 'react'
import { cleanup, render } from '@testing-library/react'

import Emoji from '../components/emoji.js'

afterEach(cleanup)

test('Emoji is not null', () => {
  
    const { getByText, container } = render(<Emoji type={'Fire'} />)
    

    expect(getByText('🔥')).not.toBeNull()
})

test('Emoji type no exist', () => {
  
  const { getByTitle } = render(<Emoji type={'Acero'} />)

  
  expect(getByTitle('Acero').children.length).toBe(0);
})
