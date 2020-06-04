import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: #2A2B2DFF;
    box-shadow: 0 0 10px gray;
`

export const HeaderGradLine = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    // background: blue;
    filter: blur(1px);
    background: linear-gradient(90deg, rgba(195,193,0,1) 0%, rgba(200,0,0,1) 50%, rgba(182,0,205,1) 100%);
`

export const Search = styled.input`
    background: none;
    width: 40%;
    height: 30px;
    font-size: 14px;
    font-family: 'Roboto';
    padding: 0 15px;
    border: 2px solid #78a7ac;
`