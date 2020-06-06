import React from 'react'
import { HeaderContainer, HeaderGradLine, Search } from './Header.styled'

const Header = props => {
    const { setQuery, setPageNumber } = props
    const handleChange = (e) => {
      setQuery(e.target.value)
      setPageNumber(1)
    }
    return (
        <HeaderContainer>
            <Search placeholder='Искать здесь' onChange={e => handleChange(e)} />
            <HeaderGradLine />
        </HeaderContainer>
    )
}

export default Header