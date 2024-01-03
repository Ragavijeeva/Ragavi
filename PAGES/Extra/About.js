import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './Extrapages.css'

const About = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  return (
    <div className='extrapage'>
        <Navbar reloadnavbar={false}/>
        <SingleBanner
        heading="About Us"
        bannerimage= 'https://i.pinimg.com/236x/79/be/2b/79be2b5635d0987f42a727ce7de93015.jpg'
        />
        <div className='pgleft pgcommon'>
            <img src='https://i.pinimg.com/236x/e9/2c/7c/e92c7c3e3b2806f60d4afc54c07acc7d.jpg'  />

            <div>
                <h1>Our Story</h1>
                <p> a trust under certificate no. 998/2006 under section 12A (a) of the IT act 1961. Consequently, all financial contributions are tax-exempt under section 80(g).


The mission statement of HAS is to mitigate animal suffering through humane ABC, rescue, treatment and rehabilitation. To spread awareness about animal rights through education in schools. To empower humans by providing them with a platform to contribute to the cause in their own unique way. Our vision is of a compassionate society where exploitation and abuse of animals is a thing of the past, and a future where all animals can claim their place on this Earth.</p>
            </div>
        </div>
        <div className='pgright pgcommon'>
            <img src='https://i.pinimg.com/236x/e9/2c/7c/e92c7c3e3b2806f60d4afc54c07acc7d.jpg' alt='noimg' />

            <div>
                <h1>Who are we</h1>
                <p>Pet adoption is the process of transferring responsibility for a pet that was previously owned by another party. Common sources for adoptable pets are animal shelters, rescue groups, or other pet owners. Some organizations give adopters ownership of the pet, while others use a guardianship model wherein the organization retains some control over the animal's future use or care.

Online pet adoption sites have databases, searchable by the public, of pets being housed by thousands of animal shelters and rescue groups.</p>

            </div>
        </div>
        
    
        <Footer1/>
        <Footer2/>
        </div>
  )
}

export default About