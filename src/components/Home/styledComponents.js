import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDark === true ? '#181818' : '#ffffff')};
`
export const SliderListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  height: 90vh;
  width: 100%;
  @media screen and (max-width: 767px) {
    min-height: 100vh;
  }
`
export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => (props.d === true ? 'transparent' : '#f1f1f1')};
  width: 100%;
`
export const PremiumContainer = styled.div`
  display: ${props => (props.show === true ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  padding: 20px;
`
export const LogoImage = styled.img`
  width: 150px;
`
export const LogoCloseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`
export const PremiumPara = styled.p`
  font-family: roboto;
  font-size: 15px;
  font-weight: 400;
  color: #181818;
  width: 60%;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const OutlineButton = styled.button`
  border-width: 1px;
  border-style: solid;
  border-color: #1e293b;
  color: #1e293b;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  width: 300px;
  border-style: solid;
  border-width: 1px;
  border-color: #94a3b8;
  background-color: ${props => (props.d === true ? '#212121' : 'transparent')};
  margin-left: 30px;
  margin-top: 15px;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const Input = styled.input`
  font-family: Roboto;
  font-size: 15px;
  outline: none;
  background-color: transparent;
  width: 100%;
  padding: 5px;
  color: #94a3b8;
  border-right-width: 1px;
  border-color: #cbd5e1;
  border-top-width: 0px;
  border-left-width: 0px;
  border-bottom-width: 0px;
`
export const UlContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  list-style: none;
  margin-left: 0px;
  flex-wrap: wrap;
  overflow: auto;
`

export const CloseButton = styled.button`
  border-width: 0px;
  background-color: transparent;
`
export const FailureBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
