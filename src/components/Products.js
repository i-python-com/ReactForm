import React from 'react'
import products from './vschoolProducts'

function Products() {
  const productsComponents = products.map(product => (
    <div style={{ margin: 20, border: '1px solid red' }} key={product.id}>
      <h3>{product.id + '.' + product.name}</h3>
      <p>
        {'Price: ' +
          product.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })}
      </p>
      <p>{product.description}</p>
    </div>
  ))

  return <div>{productsComponents}</div>
}

export default Products
