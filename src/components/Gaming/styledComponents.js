import styled from 'styled-components'

export const GamingBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => (props.d === true ? '#0f0f0f' : '#f1f1f1')};
  min-height: 100vh;
`
export const GamingSidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-height: 90vh;
  width: 100%;
`

export const GamingSecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 90vh;
  overflow: auto;
  width: 100%;
`

export const FailureBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 700px;
`

export const Image = styled.img`
  width: 300px;
`

export const ErrorPara = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.d === true ? '#ffffff' : '#181818')};
`
export const Para = styled.p`
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
export const GamingListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
export const GamingIconContainer = styled.div`
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
export const GamingUlContainer = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`
