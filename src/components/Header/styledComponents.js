import styled from 'styled-components'

export const HeaderBgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  background-color: ${props => (props.d === true ? '#231f20' : '#ffffff')};
  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`
export const LogoutThemeMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const LogoutButton = styled.button`
  border-style: solid;
  border-color: ${props => (props.d === true ? '#ffffff' : ' #3b82f6')};
  color: ${props => (props.d === true ? '#ffffff' : ' #3b82f6')};
  margin-left: 20px;
  font-family: Roboto;
  font-size: 15px;
  background-color: transparent;
  border-width: 1px;
  border-radius: 3px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  outline: none;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const PopupBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.d === true ? '#231f20' : '#ffffff')};
  padding-top: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 50px;
  border-radius: 5px;
`
export const PopupHeading = styled.p`
  width: 100%;
  font-family: Roboto;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.d === true ? '#ffffff' : '#000000')};
`
export const CancelButton = styled.button`
  border-style: solid;
  border-color: #64748b;
  color: #64748b;
  margin-left: 20px;
  font-family: Roboto;
  font-size: 15px;
  background-color: transparent;
  border-width: 1px;
  border-radius: 3px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  outline: none;
  margin-right: 10px;
`
export const ConformButton = styled.button`
  color: #ffffff;
  margin-left: 20px;
  font-family: Roboto;
  font-size: 15px;
  background-color: #3b82f6;
  border-width: 0px;
  border-radius: 3px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  outline: none;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Button = styled.button`
  border-width: 0px;
  background-color: transparent;
`
