import React from 'react';

function Shop({ children }) {
  return (
    <section id='shop'>
      <h2>Elegant Clothing For Everyone</h2>
      {children}
      <ul id='products'></ul>
    </section>
  );
}

export default Shop;
