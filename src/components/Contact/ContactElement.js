import styled from 'styled-components'
import { PhoneInTalk } from '@material-ui/icons'
import { Email } from '@material-ui/icons'
import { Home } from '@material-ui/icons'
import { mobile } from '../../responsive'

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

  ${mobile({ flexDirection: 'column', padding: '0 50px' })}
`
export const ContactLeft = styled.div`
  flex: 1;
`
export const ContactTitle = styled.h1`
  font-size: 60px;
  width: 80%;

  ${mobile({ fontSize: '30px' })}
`
export const ContactInfo = styled.div``
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
  font-weight: 300;
  width: 70%;

  ${mobile({ margin: '20px 0', width: '100%' })}
`
export const ContactPhone = styled(PhoneInTalk)`
  width: 50px !important;
  height: 50px !important;
  color: #27ae60;
  margin-right: 30px;
`
export const ContactEmail = styled(Email)`
  width: 50px !important;
  height: 50px !important;
  color: #2980b9;
  margin-right: 30px;
`
export const ContactAddress = styled(Home)`
  width: 50px !important;
  height: 50px !important;
  color: #9b59b6;
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

  ${mobile({ display: 'none' })}
`
export const ContactForm = styled.form`
  margin-top: 30px;

  ${mobile({ marginTop: '0', display: 'flex', flexWrap: 'wrap' })}
`
export const ContactInput = styled.input`
  width: 70%;
  height: 70px;
  border: none;
  border-bottom: 2px solid #747d8c;
  margin: 10px 0;
  font-size: 16px;
  padding-left: 10px;

  ${mobile({
    width: '35%',
    height: '40px',
    margin: '10px',
    marginLeft: '0',
  })}
`
export const ContactTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  font-size: 16px;
  padding-left: 10px;
  margin: 10px 0;

  ${mobile({ height: '90px' })}
`
export const ContactButton = styled.button`
  padding: 15px 30px;
  border: none;
  background-color: #2e86de;
  color: #fff;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;

  ${mobile({
    padding: '9px',
  })}
`
