import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCarousel = ({data}) => {
    const setting ={
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        autoplaySpeed: 3000
    };
  return (
    <div className='BannerCarousel'>
        <Slider {...setting}>
          {data.map((items)=>(
            <div key={items.id}>
              <img src={items.Imgsrc} alt="" className='BannerCarousel-Image' />
            </div>
          ))}
        </Slider>
    </div>
  )
}

export default BannerCarousel