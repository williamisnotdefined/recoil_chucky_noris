import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { Box } from './Grid'

export default createGlobalStyle`
  ${reset}
`

export const AppContainer = styled(Box)`
  width: 100%;
`