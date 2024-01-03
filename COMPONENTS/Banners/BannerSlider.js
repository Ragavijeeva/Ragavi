import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'

const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: 'https://i.pinimg.com/236x/7e/e3/fc/7ee3fc8f02441ad86fcafa66406fcb12.jpg',
            title: 'Adopt a pet',
            description: 'Saving one dog will not change the world, but surely for that one dog, the world will change forever.',
            button: 'htttps://www.google.com'
        },
        
    ]


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='bannerslider'>
            <Slider className='bannerslider' {...settings}>
                {
                    data.map(item => {
                        return (
                            <div className='imagecont' key={item.id}>
                                <img src={item.image} alt='noimg' />
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <span>{item.description}</span>
                                    <button>Adopt More</button>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default BannerSlider