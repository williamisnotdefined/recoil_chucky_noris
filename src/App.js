import { RecoilRoot } from 'recoil'

import CategoryList from './CategoryList'
import Joke from './Joke'
import GlobalStyles, { AppContainer } from './App.styles'

function App() {
  return (
    <RecoilRoot>
      <AppContainer>
        <GlobalStyles />
        <Joke />
        <CategoryList />
      </AppContainer>
    </RecoilRoot>
  );
}

export default App;
