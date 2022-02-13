import React, { useRef } from 'react'
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

const Contact = () => {
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
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
          <ContactForm ref={formRef} onSubmit={handleSubmit}>
            <ContactInput type='text' placeholder='Name' name='user_name' />
            <ContactInput
              type='text'
              placeholder='Subject'
              name='user_subject'
            />
            <ContactInput type='email' placeholder='Email' name='user_email' />
            <ContactTextarea
              row='5'
              placeholder='Message'
              name='user_message'
            />
            <ContactButton>Submit</ContactButton>
          </ContactForm>
        </ContactRight>
      </ContactWrapper>
    </Container>
  )
}

export default Contact
