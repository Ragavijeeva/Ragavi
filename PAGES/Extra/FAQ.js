import React, { useEffect, useState } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const [activesection, setactivesection] = useState(0)


  const faq = [
    {
      id: 1,
      question: 'What is pet adoption',
      answer: 'Pet adoption is an important aspect of animal welfare that helps in providing a second chance to homeless and abandoned animals.'
    },
    {
      id: 2,
      question: 'Why do we use it?',
      answer: 'Pet adoption is an important aspect of animal welfare that helps in providing a second chance to homeless and abandoned animals.'
    },
    {
      id: 3,
      question: 'Would You Adopt A Dog With A Disability?',
      answer: 'Tripod dogs who are missing a leg Partially paralyzed dogs who need specific dog wheelchairs to get around Deaf dogs Blind dogs Deaf and blind dogs'
    },
    {
      id: 4,
      question: 'What Kind Of Food Will You Feed Your Dog?',
      answer: 'Obviously, there’s a myriad of dog food options available these days.Anything from kibble, canned dog food, home cooked diets, dehydrated or freeze-dried dog foods, premade raw dog food or DIY raw dog food – the list is seemingly endless. '
    },
    {
      id: 5,
      question: 'Do You Have Other Pets?',
      answer: 'If you have other pets, the shelter wants to know so they can match you with a dog who does well with other dogs and/or cats, ferrets, guinea pigs, etc. '
    }
  ]

  return (
    <div className='extrapage'>
      <Navbar />
      <SingleBanner
        heading="FAQs"
        bannerimage='https://images.unsplash.com/photo-1665789318391-6057c533005e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
      />
      {/* <p>faq</p> */}

      <div className='faqcontainer'>
        {

        }


        {
          faq.map((item, index) => {
            return (
              activesection == item.id ?
                <div className='faq'>
                  <div className='faqhead'>
                    <h1>
                      {item.question}
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                      onClick={() => setactivesection(0)}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className='faqbody'>
                    <p>
                      {item.answer}
                    </p>
                  </div>
                </div>
                :
                <div className='faq'>
                  <div className='faqhead'>
                    <h1>{item.question}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                      onClick={() => setactivesection(item.id)}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                  </div>
                </div>
            )
          })
        }


      </div>


      <Footer1 />
      <Footer2 />
    </div>
  )
}

export default FAQ