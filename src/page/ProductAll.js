import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  //UI에 보여줘야하는 부분은 useState에 저장해야한다
  const [productList, setProductList] = useState([]);
  // eslint-disable-next-line
  const [query, setQuery] = useSearchParams();

  //api호출은 lifecycle function 중 하나인 useEffect에서 해줘야함
  const getProducts = async () => {
    let searchQuery = query.get("q")||"";
    console.log("searchQuery: ", searchQuery);
    let url = `https://my-json-server.typicode.com/comme-modee/react-hnm-shopping-mall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data)
  }
  useEffect(() => {
    getProducts();

    //query값을 주시하고 있는다는 뜻.
    //query값이 바뀌면 getProducts함수를 다시 호출해줄래?
  }, [query])
  return (
    <div className='product-card-container'>
      {productList.map(item => <Link to={`/product/${item.id}`}><ProductCard item={item}/></Link>)}
    </div>
  )
}

export default ProductAll