import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='product-card'>
        <div className='product-card-img'><img src={item?.img} alt=''/></div>
        <div className='product-info'>
          <span className='title'>{item?.title}</span>
          <span className='price'>₩{item?.price}</span>
          <span className='conscious-choice'>{item?.choice === true ? 'Conscious choice' : ''}</span>
          <span className='new-item'>{item?.new === true ? '신제품' : ''}</span>
        </div>
    </div>
  )
}

export default ProductCard