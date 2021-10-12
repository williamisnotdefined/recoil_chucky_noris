import { atom, selector } from 'recoil'

import getCategories from './services/getCategories'

export const CategoryAtom = atom({
  key: 'Category',
  default: null
})

export const CategoriesSelector = selector({
  key: 'CategoriesSelector',
  get: async () => {
    return await getCategories()
  }
})