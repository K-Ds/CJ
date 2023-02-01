import React from 'react'
import '../styles/CallToAction.css'

const CallToAction = () => {
    return (
        <section className='container'>
            <a href='#' className='card'>
                <img className='card-img' src={require('../assets/gift-card-home.jpg')} />
            </a>
            <a href='#' className='card'>
                <img className='card-img' src={require('../assets/home-page-superfoods-brand-new.jpg')} />
            </a>

        </section>
    )
}

export default CallToAction;