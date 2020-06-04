import React from 'react'
import { HeaderContainer, HeaderGradLine, Search } from './Header.styled'

const Header = props => {
    const { setQuery } = props
    const handleChange = (e) => setQuery(e.target.value)
    return (
        <HeaderContainer>
            <Search placeholder='Искать здесь' onChange={e => handleChange(e)} />
            <HeaderGradLine />
        </HeaderContainer>
    )
}

export default Header