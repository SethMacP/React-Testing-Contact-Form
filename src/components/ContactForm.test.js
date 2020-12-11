import React from 'react'
import {render, screen} from '@testing-library/react'
import {userEvent} from `@testing-library/user-event`

import ContactForm from './ContactForm'

test('Ensure the component will render' , () => {
    render (<ContactForm/>)
})
test('input fields work', () => {
    render(<ContactForm />)
    
})