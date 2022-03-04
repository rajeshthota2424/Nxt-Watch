import styled from 'styled-components'

export const VideoItemDetailsBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  background-color: ${props => (props.d === true ? '#0f0f0f' : '#f1f1f1')};
  background-size: cover;
`

export const SideBarAndVideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 90vh;
  background-size: cover;
`

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`
export const Title = styled.p`
  font-family: Roboto;
  font-size: 17px;
  font-weight: 500;
  color: ${props => (props.d === true ? '#ffffff' : '#1e293b')};
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`
export const ViewsLikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const Para = styled.p`
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  color: ${props =>
    props.l === true ||
    props.dis === true ||
    props.s === true ||
    props.sa === true
      ? '#2563eb'
      : '#64748b'};
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const ViewsYearContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const UlContainer = styled.ul`
  list-style: ${props => (props.n ? 'none' : 'disc')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: -30px;
`
export const Image = styled.img`
  width: 50px;
  margin-right: 10px;
`
export const ChannelDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
`
export const NameAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const Name = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: -5px;
  color: ${props => (props.d === true ? '#ffffff' : '#1e293b')};
`
export const FailureBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

export const ErrorPara = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.d === true ? '#ffffff' : '#181818')};
`
export const FailurePara = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  color: #475569;
  text-align: center;
`
export const RetryButton = styled.button`
  font-family: 'roboto';
  font-size: 13px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #4f46e5;
  border-width: 0px;
  color: #ffffff;
  outline: none;
  border-radius: 5px;
`
export const ImageError = styled.img`
  width: 300px;
`
export const Button = styled.button`
  border-width: 0px;
  background-color: transparent;
`
