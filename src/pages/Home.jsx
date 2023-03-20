import React from 'react'
import products from './products.json'

const Home = () => {
  return (
    <>
    <div className="products">
  {products.map(product => {
    return (
      <div key={product.id} className="prodTitle">
        <img src={product.image} alt={`Preview of ${product.title}`} />
        <h3>{ product.title }</h3>
        <p>{ product.description }</p>
        <p>${ product.price }</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    );
  })}
</div>
    </>
  )
}

export default Home