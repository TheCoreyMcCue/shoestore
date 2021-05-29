import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// const products = [
//   { id: 1, name: 'Adidas Running Shoes', description: 'Comfortable Adidas running shoes', price: '€59.99', image: 'https://images-na.ssl-images-amazon.com/images/I/61QfR0Vy7lL._AC_UX395_.jpg' },
//   { id: 2, name: 'Nike Male Running Shoes', description: 'Comfortable Nike running shoes', price: '€59.99', image: 'https://static01.nyt.com/images/2020/02/25/well/PHYSED-SHOES1/merlin_168154896_a69879b8-d43a-40d0-8297-dd7086d7d784-superJumbo.jpg?quality=90&auto=webp' },
//   { id: 3, name: 'New Balance Running Shoes', description: 'Comfortable New Balance running shoes', price: '€59.99', image: 'https://www.rei.com/media/04bb9578-39c3-4c6e-894c-bc1ead50917c?size=784x588' },
//   { id: 4, name: 'Puma Running Shoes', description: 'Comfortable Puma running shoes', price: '€59.99', image: 'https://specials-images.forbesimg.com/imageserve/6037b7147a965ab7491f7676/960x0.jpg?fit=scale' }
// ]

const Products = ({ products }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;