import React from 'react'
import './footer.css'
import '../Fontawesome/Fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer() {
    return (
        <div className='contact'>
            <h3>Contact</h3>
            <div className="email-wraper">
                <FontAwesomeIcon icon="envelope" />
                <p>pigeon.bloger@gmail.com</p>
            </div>
            <div className="social-media-contact">
                <FontAwesomeIcon icon={['fab', 'facebook']} />
                <FontAwesomeIcon icon={['fab', 'twitter']} />
                <FontAwesomeIcon icon={['fab', 'youtube']} />
            </div>
        </div>
    )
}