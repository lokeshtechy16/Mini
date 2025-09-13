import React from 'react'

const CategoryBar = ({ImgSrc, CategoryName}) => {
  return (
    <div className='h-auto flex flex-col items-center'>
        <div className='w-[60px]'>
            <img src={ImgSrc} alt="CategoryImg" className='w-full'/>
        </div>
        <p className='w-full text-[13px] font-medium p-1'>{CategoryName}</p>
    </div>
  )
}

export default CategoryBar