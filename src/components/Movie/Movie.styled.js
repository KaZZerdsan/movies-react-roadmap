import styled from '@emotion/styled'

export const Wrapper = styled.div`
    width: 80vw;
    height: 80vh;
    border: 1px solid gray;
    overflow: hidden;
`

export const Header = styled.div`
    width: 100%;
    height: 10%;
    border-bottom: 1px solid black;
    display: flex;
`

export const Title = styled.p`
    padding-left: 24px;
    font-family: 'Roboto';
    font-weight: bold;
`

export const Info = styled.div`
    height: 90%;
    display: flex;
    flex-direction: row;
    padding: 20px;
`

export const Poster = styled.img`
    margin-right: 15px;
    float: right;
    height: 60%;
    border-radius: 15px;
    box-shadow: 0 5px 10px #3C3C3C;
`

export const MovieTitle = styled.h1`
    margin-top: 0;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
`

export const MovieDate = styled.p`
    margin: 0;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png');
`