import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ContactForm from './ContactForm'
import { act } from 'react-dom/test-utils'

test('Render component with no errors' , () => {
    render (<ContactForm/>)
})

test('input fields work', () => {
   //Arrange
   act(()=>{
    render (<ContactForm/>)
    //Act
    // const fNameInput    = screen.getByLabelText("firstName")
    const fNameInput    = screen.getByTestId(/firstName/i)
    const lNameInput    = screen.getByTestId(/lastName/i)
    const emailInput    = screen.getByTestId(/email/i)
    const messageInput  = screen.getByTestId(/message/i)
    const button        = screen.getByTestId(/submit/i)

    
    userEvent.type(fNameInput, "James")
    userEvent.type(lNameInput , "Bond")
    userEvent.type(emailInput, "007@spy.com")
    userEvent.type(messageInput, "The names Bond, James Bond.")
    // userEvent.click(button)

    //Assert
    expect(fNameInput).toBeInTheDocument
    expect("James").toBeInTheDocument

    expect(lNameInput).toBeInTheDocument
    expect("Bond").toBeInTheDocument

    expect(emailInput).toBeInTheDocument
    expect("007@spy.com").toBeInTheDocument

    expect(messageInput).toBeInTheDocument
    expect("The names Bond, James Bond.").toBeInTheDocument
    
   })
    
})

