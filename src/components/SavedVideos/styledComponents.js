import styled from 'styled-components'

export const SavedVideosBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  background-color: ${props => (props.d === true ? '#0f0f0f' : '#f1f1f1')};
`
export const SavedVideosSidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`
export const SavedVideosSecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 90vh;
  width: 100%;
`
export const TrendingListContainer = styled.div`
  height: 90vh;
  overflow: auto;
  width: 100%;
`
export const TrendingSecondContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TrendingIconContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.d === true ? '#181818' : '#ebebeb')};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-top: 10px;
  margin-top: 10px;
`
export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.d === true ? '#ffffff' : '#000000')};
`
export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.d === true ? '#000000' : '#e2e8f0')};
  border-radius: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 10px;
`
export const TrendingUlContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: -20px;
  width: 100%;
`
export const NoSavedList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const NoSavedImage = styled.img`
  width: 300px;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`
export const NoSavedHeading = styled.h1`
  font-family: Roboto;
  font-size: '18px';
  font-weight: 500;
  color: ${props => (props.d === true ? '#ffffff' : '#000000')};
`
export const NoSavedPara = styled.p`
  font-family: Roboto;
  font-size: '15px';
  font-weight: 400;
  color: #94a3b8;
`
