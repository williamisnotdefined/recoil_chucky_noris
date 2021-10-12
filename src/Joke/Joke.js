import React from 'react'
import { useRecoilValueLoadable, useRecoilValue } from 'recoil'

import { JokeSelector } from '../globalState/Joke'
import { CategoryAtom } from '../globalState/Category'
import useLoadableResult from '../globalState/useLoadableResult'

import { Container } from './Joke.styles'

const Joke = () => {

  const category = useRecoilValue(CategoryAtom)
  const jokeLoadable = useRecoilValueLoadable(JokeSelector)

  const { hasValue, contents } = useLoadableResult(jokeLoadable)

  return (
    <Container>
      {category !== null && hasValue && (
        <h2>{contents?.data?.value}</h2>
      )}
    </Container>
  )
}

export default Joke