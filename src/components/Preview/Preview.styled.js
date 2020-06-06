import styled from '@emotion/styled'

export const Poster = styled.div`
    width: 220px;
    height: 330px;
    margin: 15px 10px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 10px;
    user-select: none;
    box-shadow: 0 5px 10px black;

    @media (max-width: 295px) {
      width: 100%;
      height: auto;
    }
`

export const PosterImage = styled.img`
    &:hover {
        transition: all .3s ease;
        transform: scale(1.05);
    }
    @media (max-width: 295px) {
      width: 100%;
    }
`