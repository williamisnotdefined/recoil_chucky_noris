import { atom, selector } from 'recoil'

import getCategories from './services/getCategories'

export const CategoryAtom = atom({
  key: 'Category',
  default: {
    name: null,
    v: 0 // to force refresh
  }
})

export const setCategorySelector = selector({
  key: 'setCategory',
  set: ({ set, get }, value) => {
    const { v } = get(CategoryAtom)
    set(CategoryAtom, {
      name: value,
      v: v + 1
    })
  }
})

export const CategoriesSelector = selector({
  key: 'CategoriesSelector',
  get: async () => {
    return await getCategories()
  }
})