import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import ProductCards from '../components/ProductCard';
import { useCartStore } from '../store/cartStore';
import { toast } from 'react-toastify';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 20px;
  width: 80%;
  max-width: 1200px;
`;

const CategoryCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardContent = styled.div`
  flex: 1;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
`;

const ProductImage = styled.img`
  max-width: 100px;
  height: auto;
`;


export default function Home() {
  const addItems = useCartStore((state) => state.addItem);

  const handleAddToCart = (product) => {
    addItems(product);

    // add toast notification
    toast.success('Item added to cart');
    console.log('Item added to cart');

  };

  return (
    <>
      <Hero />
      <ProductCards onAddToCart={handleAddToCart} />
      <FeaturedCategories /> 
    </>
  );
}

const FeaturedCategories = () => {
  return (
    <Container>
      <BackgroundImage src="https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/images/bg.jpg" alt="Background" />
      <ContentWrapper>
        <CategoryCard>
          <CardContent>
            <Subtitle>New Collections, Now Trendy</Subtitle>
            <Title>Smart Watches</Title>
            <Description>Sale up to 25% off all in store</Description>
          </CardContent>
          <ProductImage src="https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/images/off1.png" alt="Smart Watch" />
        </CategoryCard>
        <CategoryCard>
          <CardContent>
            <Subtitle>Top Brands, Lowest Prices</Subtitle>
            <Title>Smart Phones</Title>
            <Description>Free shipping order over $100</Description>
          </CardContent>
          <ProductImage src="https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/images/off2.png" alt="Smart Phone" />
        </CategoryCard>
      </ContentWrapper>
    </Container>
  );
};