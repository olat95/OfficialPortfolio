import styled from 'styled-components'
import { PhoneInTalk } from '@material-ui/icons'
import { Email } from '@material-ui/icons'
import { Home } from '@material-ui/icons'

export const Container = styled.div`
  height: 100vh;
  position: relative;
`
export const ContactBg = styled.div`
  width: 20px;
  height: 100%;
  background-color: #2e86de;
  position: absolute;
`
export const ContactWrapper = styled.div`
  padding: 50px;
  display: flex;
`
export const ContactLeft = styled.div`
  flex: 1;
`
export const ContactTitle = styled.h1`
  font-size: 60px;
  width: 80%;
`
export const ContactInfo = styled.div``
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
  font-weight: 300;
  width: 70%;
`
export const ContactPhone = styled(PhoneInTalk)`
  width: 50px !important;
  height: 50px !important;
  color: red;
  margin-right: 30px;
`
export const ContactEmail = styled(Email)`
  width: 50px !important;
  height: 50px !important;
  margin-right: 30px;
`
export const ContactAddress = styled(Home)`
  width: 50px !important;
  height: 50px !important;
  margin-right: 30px;
`
export const ContactRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const ContactDesc = styled.p`
  font-weight: 400;
`
export const ContactForm = styled.form`
  margin-top: 30px;
`
export const ContactInput = styled.input`
  width: 70%;
  height: 50px;
  border: none;
  border-bottom: 2px solid #747d8c;
  margin: 10px 0;
  font-size: 16px;
  padding-left: 10px;
`
export const ContactTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  font-size: 16px;
  padding-left: 10px;
  margin: 10px 0;
`
export const ContactButton = styled.button`
  padding: 15px 30px;
  border: none;
  background-color: #2e86de;
  color: #fff;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
`
// export const Container = styled.div``
// export const Container = styled.div``
