import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/product-card'
import macbook from '../assets/macbook.jpg'

const Home = () => {
  const addToCartHandler=()=>{

  }
  return (
    <div className='home'>
      <section></section>
      <h1>Latest Product</h1>
      <Link to="/search" className='findmore'>More</Link>
      <main>
        <ProductCard productId='asa' name="Macbook" price="999" stock={122} handler={addToCartHandler} photo={macbook}></ProductCard>
      </main>
    </div>
  )
}

export default Home
