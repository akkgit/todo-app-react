import React from 'react';

function Product(props) {
  return (
    <div>
      <div>Id:{props.product.id}</div>
      <h1>Title:{props.product.title}</h1>
      <p>Description:{props.product.desc}</p>
      <hr />
    </div>
  );
}

export default Product;
