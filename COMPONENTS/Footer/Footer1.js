import React from 'react'
import veges from '../../ASSETS/cat.png'
import './Footer1.css'
const Footer1 = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={veges} alt='veges' />
            </div>
            <div className='right'>
                <h1>A lot of shelter dogs are mutts like me
                </h1>
                <p>Rescued is my favorite breed.” “You can't buy love, but you can rescue it.” “Money can buy a fine dog, but only love can make him wag his tail.” “Do not pity a shelter dog
                </p>
            </div>
        </div>
    )
}

export default Footer1