import styled from 'styled-components'

export const SidebarBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 220px;
  min-height: 90vh;
  background-color: ${props => (props.d === true ? '#231f20' : '#ffffff')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const UnorderList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-left: -40px;
`
export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 220px;
  padding-left: 40px;
  background-color: ${props =>
    (props.a === true && props.d === true && ' #383838') ||
    (props.a === true && '#e2e8f0')};
`

export const Para = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.d === true ? ' #e2e8f0' : '#1e293b')};
  font-weight: ${props => (props.a === true ? 'bold' : '450')};
  font-size: ${props => (props.a === true ? '15px' : '15px')};
`

export const ContactPara = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.d === true ? '#f9f9f9' : '#1e293b')};
`
export const ImagesContainer = styled.div``

export const Image = styled.img`
  width: 30px;
  margin-right: 10px;
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 30px;
  padding-bottom: 20px;
`
