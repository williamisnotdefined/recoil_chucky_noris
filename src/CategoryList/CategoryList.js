import React from 'react'
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil'

import { CategoriesSelector, CategoryAtom } from '../globalState/Category'
import useLoadableResult from '../globalState/useLoadableResult'

import { Flex } from '../Grid'
import { Container } from './CategoryList.styles'

const CategoryList = () => {

  const setCategory = useSetRecoilState(CategoryAtom)

  const categoriesLoadable = useRecoilValueLoadable(CategoriesSelector)

  const {
    isLoading,
    hasError,
    hasValue,
    contents
  } = useLoadableResult(categoriesLoadable)

  return (
    <Container>
      {isLoading && (
        <Flex>Loading..</Flex>
      )}

      <ul>
        {hasValue && contents?.data.map((category) => (
          <li key={category} onClick={() => setCategory(category)}>
            {category}
          </li>
        ))}
      </ul>

      {hasError && (
        <Flex>{contents}</Flex>
      )}
    </Container>
  )
}

export default CategoryList