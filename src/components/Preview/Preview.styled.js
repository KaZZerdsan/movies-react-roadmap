import styled from '@emotion/styled'

export const Poster = styled.div`
    width: 20%;
    height: 330px;
    margin: 15px 10px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 10px;
    user-select: none;
    box-shadow: 0 5px 10px black;
`

export const PosterImage = styled.img`
    max-height: 100%;
    min-width: 100%;
    &:hover {
        transition: all .3s ease;
        transform: scale(1.05);
    }
`