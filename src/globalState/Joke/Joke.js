import { selector } from 'recoil'

import { CategoryAtom } from '../Category'

import getJokeByCategory from './services/getJokeByCategory'

export const JokeSelector = selector({
  key: 'JokeSelector',
  get: async ({ get }) => {
    const { name } =  get(CategoryAtom)
    console.log(name)
    return await getJokeByCategory(name)
  }
})