import styled from '@emotion/styled'
import bg from '../../assets-image/bg.jpg'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainContainer = styled.div`
    // background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 67%, rgba(0,0,0,0.8) 94%, rgba(182,182,182,0) 100%), url(${bg});
    // background-repeat: no-repeat;
    // background-size: 100%;
`

export const MovieContainer = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
`
