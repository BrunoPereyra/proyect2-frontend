import React from 'react'

import "../static/styles/login.css"

import { Form_login } from '../components/Form_login'

function PresentationPage() {
    return (
        <div className='presentation-page-root'>
            <div className='presentation-page-root-logo'>
                <h2 className='presentation-page-root-logo-icon'>LOGO</h2>
            </div>
            <h2 className='presentation-page-root-logo'>
                ¡Te damos la bienvenida a tu comunidad profesional!
            </h2>
            <div className='presentation-page-root-form'>
                <Form_login />
            </div>
        </div>
    )
}

export default PresentationPage