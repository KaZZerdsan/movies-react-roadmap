import styled from "@emotion/styled"

export const Wrapper = styled.div`
  width: 80vw;
  height: 80vh;
  border: 1px solid gray;
  overflow: hidden;
  display: flex;
  padding: 20px;

  @media (max-width: 950px) {
    overflow: auto;
    flex-direction: column;
    align-items: center;
  }
`

export const Poster = styled.img`
  margin-right: 15px;
  width: 300px;
  border-radius: 15px;
  box-shadow: 0 5px 10px #3c3c3c;
  @media (max-width: 950px) {
    margin-bottom: 20px;
  }
`

export const MovieTitle = styled.h1`
  margin: 0 10px 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const MovieRating = styled.p`
  color: #6f6f6f;
`

export const MovieDescription = styled.p`
  font-size: 20px;
  font-weight: 500;
`

export const MovieDate = styled.p`
  margin: 0;
  color: #6f6f6f;
`
