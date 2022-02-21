import React, { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  ContactAddress,
  ContactBg,
  ContactButton,
  ContactDesc,
  ContactEmail,
  ContactForm,
  ContactInfo,
  ContactInput,
  ContactItem,
  ContactLeft,
  ContactPhone,
  ContactRight,
  ContactTextarea,
  ContactTitle,
  ContactWrapper,
  Container,
} from './ContactElement'
import { ThemeContext } from '../../context'

const Contact = () => {
  const form = useRef()
  const [success, setSuccess] = useState(false)
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_4a4x48n',
        'template_34v3pdq',
        form.current,
        'user_VmwJb1TskhzLuRl9tkUgD'
      )
      .then(
        (result) => {
          console.log(result.text)
          setSuccess(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <Container>
      <ContactBg></ContactBg>
      <ContactWrapper>
        <ContactLeft>
          <ContactTitle>Let us talk about your project</ContactTitle>
          <ContactInfo>
            <ContactItem>
              <ContactPhone />
              +2348166266326
            </ContactItem>
            <ContactItem>
              <ContactEmail />
              samsontunj@gmail.com
            </ContactItem>
            <ContactItem>
              <ContactAddress />
              No 14, Oladunni Street, Glory Estate, Ifako, Gbagada.
            </ContactItem>
          </ContactInfo>
        </ContactLeft>
        <ContactRight>
          <ContactDesc>
            <b>Please reach out.😄</b> Always available for freelancing if it's
            the right project.😉
          </ContactDesc>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactInput
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              placeholder='Name'
              name='user_name'
            />
            <ContactInput
              style={{ backgroundColor: darkMode && '#333' }}
              type='text'
              placeholder='Subject'
              name='user_subject'
            />
            <ContactInput
              style={{ backgroundColor: darkMode && '#333' }}
              type='email'
              placeholder='Email'
              name='user_email'
            />
            <ContactTextarea
              style={{ backgroundColor: darkMode && '#333' }}
              row='5'
              placeholder='Message'
              name='user_message'
            />
            <ContactButton>Submit</ContactButton>
            {success && <ContactDesc>Message sent successfully</ContactDesc>}
          </ContactForm>
        </ContactRight>
      </ContactWrapper>
    </Container>
  )
}

export default Contact
