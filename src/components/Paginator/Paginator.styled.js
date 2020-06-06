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
    background: #8fb8f5;
    border: 1px solid #34abff;
    color: white;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
    &:hover {
      ${props => props.disabled ? '' :  'background: #6088c3'};
      transition: .3s;
    }
    &:disabled {
      cursor: auto;
    }
`