https://api.chucknorris.io/

useRecoilState ([value, setValue])
useRecoilValue (value)
useSetRecoilState (fnSetter)

useRecoilValueLoadable
  - state: hasValue | hasError | loading
  - contents:
    - hasValue => content
    - hasError => throwed error
    - loading => promise of the value (?)

atom({
  key..
  default..
})

selector({
  key:..
  set
  get
})


// ASYNC / NEED SUSPENSE!
selector({
  key:..
  set..
  get: async() => {
    const articles = await getArticles()

    return articles
  }
})


selectorFamily({
  key..
  get: (articleId) => async () => {
    const articles = await getArticlesById(articleId)

    return articles
  }
})
