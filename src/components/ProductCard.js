import React, { useState } from 'react';
import styled from 'styled-components';
import { FaStar, FaStarHalfAlt, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { formatCurrency } from '../utils/formatCurrency';

export default function ProductCards({ onAddToCart }) {
  const [priceFilter, setPriceFilter] = useState([]);
  const [discountFilter, setDiscountFilter] = useState([]);

  const products = [
    { id: 1, name: 'Mi 4A Horizon', price: 499.00, oldPrice: 699.00, image: 'https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/images/off1.png', isNew: true, rating: 4.5 },
    { id: 2, name: 'Smart AC with Wi-fi', price: 699.00, oldPrice: 799.00, image: 'https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/images/off2.png', isNew: true, rating: 4 },
    { id: 3, name: 'Microwave Oven', price: 399.00, oldPrice: 499.00, image: 'https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/images/si3.png', rating: 3.5 },
    { id: 4, name: 'Air Cooler', price: 199.00, oldPrice: 249.00, image: 'https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/images/si1.png', isNew: true, rating: 5 },
    { id: 5, name: 'Washing Machine', price: 599.00, oldPrice: 699.00, image: 'https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/images/off1.png', rating: 4 },
    { id: 6, name: 'Water Purifier', price: 299.00, oldPrice: 349.00, image: 'https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/images/off2.png', rating: 3.5 },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaStar key={i} style={{ opacity: 0.3 }} />);
      }
    }
    return stars;
  };

  return (
    <Container>
      <Title>Our New Products</Title>
      <Content>
        <Sidebar>
          <FilterSection>
            <h3>CUSTOMER REVIEW</h3>
            {[5, 4, 3.5, 3, 2.5].map((rating) => (
              <StarRating key={rating}>
                {renderStars(rating)}
                <span>{rating.toFixed(1)}</span>
              </StarRating>
            ))}
          </FilterSection>
          <FilterSection>
            <h3>PRICE</h3>
            {['Under N1,000', 'N1,000 - N5,000', 'N5,000 - N10,000', 'N10,000 - N20,000', 'N20,000-N30,000', 'Over N30,000'].map((range) => (
              <Checkbox key={range}>
                <input
                  type="checkbox"
                  checked={priceFilter.includes(range)}
                  onChange={() => setPriceFilter(prev => 
                    prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]
                  )}
                />
                <span>{range}</span>
              </Checkbox>
            ))}
          </FilterSection>
          <FilterSection>
            <h3>DISCOUNT</h3>
            {['5% or More', '10% or More', '20% or More'].map((discount) => (
              <Checkbox key={discount}>
                <input
                  type="checkbox"
                  checked={discountFilter.includes(discount)}
                  onChange={() => setDiscountFilter(prev => 
                    prev.includes(discount) ? prev.filter(d => d !== discount) : [...prev, discount]
                  )}
                />
                <span>{discount}</span>
              </Checkbox>
            ))}
          </FilterSection>
        </Sidebar>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {product.isNew && <NewTag>New</NewTag>}
              <ProductImage src={product.image} alt={product.name} />
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <StarRating>{renderStars(product.rating)}</StarRating>
                <PriceContainer>
                  <CurrentPrice>{formatCurrency(product.price)}</CurrentPrice>
                  <OldPrice>{formatCurrency(product.oldPrice)}</OldPrice>
                </PriceContainer>
                <AddToCartButton onClick={() => onAddToCart(product)}>
                  <FaShoppingCart /> Add to Cart
                </AddToCartButton>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
  color: #333;
`;

const Content = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  width: 250px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FilterSection = styled.div`
  margin-bottom: 20px;
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;

  h3 {
    margin-bottom: 10px;
    color: #333;
  }
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #ffc107;
  margin-bottom: 5px;
`;

const Checkbox = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #3f51b5;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  flex-grow: 1;
`;

const ProductCard = styled(motion.div)`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

const NewTag = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff4081;
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
  z-index: 1;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductName = styled.h3`
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #333;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const CurrentPrice = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: #3f51b5;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
`;

const AddToCartButton = styled.button`
  background-color: #3f51b5;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    background-color: #303f9f;
  }
`;