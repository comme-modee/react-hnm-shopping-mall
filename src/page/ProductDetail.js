import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

const ProductDetail = () => {
  //주소 뒤에 파라미터값을 useParams를 이용해 받아온다.
  let {id} = useParams()

  //UI에 보여줄 정보는 useState에 담는다
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/comme-modee/react-hnm-shopping-mall/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data)
  }
  useEffect(() => {
    getProductDetail()
  }, [])
  return (
    <div className='product-detail-page'>
        <div className='product-img'><img src={product?.img} alt=''/></div>
        <div className='product-detail-info'>
          <div className='title'>{product?.title}</div>
          <div className='price'>₩{product?.price}</div>
          <p className='size-title'>사이즈</p>
          <div className='size-wrap'>{product?.size.map((option) => <span>{option}</span>)}</div>
          <button className='add-cart-btn'><FontAwesomeIcon icon={faBagShopping}/>추가</button>
        </div>
    </div>
  )
}

export default ProductDetail