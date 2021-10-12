import { selector } from 'recoil'

import { CategoryAtom } from '../Category'

import getJokeByCategory from './services/getJokeByCategory'

export const JokeSelector = selector({
  key: 'JokeSelector',
  get: async ({ get }) => {
    const category =  get(CategoryAtom)

    return await getJokeByCategory(category)
  }
})