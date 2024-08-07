import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../Data/Data';
import styles from './Product.module.css'; 

const Product = () => {
  const { id } = useParams();
  const product = Data.find((e) => e.id === parseInt(id, 10)); 

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.productPage}>
      <h1 className={styles.productTitle}>{product.title}</h1>
      <img className={styles.productImage} src={product.image} alt={product.title} />
      <p className={styles.productDescription}>{product.description}</p>
    </div>
  );
};

export default Product;


