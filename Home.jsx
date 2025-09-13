import React from 'react'
import {CategoryBarData, CarouselData, BestOf} from '../Datas'
import CategoryBar from '../Components/CategoryBar'
import BannerCarousel from '../Components/BannerCarousel'

const Home = () => {
  return (
    <div className='Home'>
      <div>
        <div>
          {CategoryBarData.map((item,index)=>(
            <CategoryBar
            key={index}
            ImgSrc={item.imageSrc}
            CategoryName={item.category} 
            />
          ))
          }
        </div>
      </div>
      <div className='Home-container'>
        <div className='Home-carousel'>
          <BannerCarousel data={CarouselData} />

        </div>
      </div>
    </div>

  )
}

export default Home