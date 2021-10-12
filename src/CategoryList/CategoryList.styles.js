import styled from 'styled-components'

import { Flex } from '../Grid'

export const Container = styled(Flex)`
  width: 100%;

  ul {
    margin: 50px auto 0px auto;

    li {
      cursor: pointer;

      & + li {
        margin-top: 10px;
      }
    }
  }
`