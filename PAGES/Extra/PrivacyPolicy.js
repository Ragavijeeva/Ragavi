import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        bannerimage='https://i.pinimg.com/564x/9c/7f/44/9c7f4477f92b958e9ab6bb3258b2dd6f.jpg'
        heading="Privacy Policy"
      />
      <div className='pgcont1'>
        <h4>This privacy policy (“policy”) will help you understand how PAWS Animal Adoption Center (“us”, “we”, “our”) uses and protects the data you provide to us when you visit <br></br>

We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page</h4>
<h2>Restricting the Collection of your Personal Data</h2>
<h5>
At some point, you might wish to restrict the use and collection of your personal data. You can achieve this by doing the following:<br></br>

When you are filling the forms on the website, make sure to check if there is a box which you can leave unchecked, if you don’t want to disclose your personal information.<br></br>
If you have already agreed to share your information with us, feel free to contact us via email and we will be more than happy to change this for you.<br></br>
PAWS Animal Adoption Center will not lease, sell or distribute your personal information to any third parties unless we have your permission. We might do so if the law forces us. Your personal information will be used when we need to send you promotional materials if you agree to this privacy policy.</h5>
       </div>
      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default PrivacyPolicy