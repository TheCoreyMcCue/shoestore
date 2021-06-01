import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';


import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();

  const [hovered, setHovered] = useState(false);

  return (
    <Card className={classes.root} onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)} >
      <CardMedia className={classes.media} image={hovered ? product.assets[1].url : product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography variant="body2" className={classes.soldOut}>
          {product.inventory.available === 0 ? 'out of stock' : ''}
          </Typography>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" disabled={product.inventory.available === 0} onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product
