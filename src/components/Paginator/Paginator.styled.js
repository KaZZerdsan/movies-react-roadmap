import styled from '@emotion/styled'

export const NavContainer = styled.div`
  width: 60%;

`

export const NavButton = styled.button`
    width: 35px;
    height: 35px;
    font-size: 12px;
    margin: 15px 8px;
    border-radius: 5px;
    background: white;
    border: 1px solid #34abff;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
    &:disabled {
      cursor: auto;
    }
`