import React from 'react'
import { useRecoilValueLoadable, useRecoilValue } from 'recoil'

import { JokeSelector } from '../globalState/Joke'
import { CategoryAtom } from '../globalState/Category'
import useLoadableResult from '../globalState/useLoadableResult'

import { Container } from './Joke.styles'

const Joke = () => {

  const { name: categoryName } = useRecoilValue(CategoryAtom)
  const jokeLoadable = useRecoilValueLoadable(JokeSelector)

  const {
    isLoading,
    hasValue,
    contents
  } = useLoadableResult(jokeLoadable)

  return (
    <Container>
      {isLoading && (
        <p>
          Loading joke..
        </p>
      )}
      {categoryName !== null && hasValue && (
        <h2>{contents?.data?.value}</h2>
      )}
    </Container>
  )
}

export default Joke