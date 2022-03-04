import styled from 'styled-components'

export const ThumbnailImg = styled.img`
  width: 100%;
`
export const GamingListItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100px;
  margin-right: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 220px;
  }
`
export const LiTitle = styled.p`
  font-family: Roboto;
  font-size: 17px;
  font-weight: 500;
  color: ${props => (props.d === true ? '#ffffff' : '#000000')};
`

export const Para = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  color: #94a3b8;
  margin-top: 0px;
`
