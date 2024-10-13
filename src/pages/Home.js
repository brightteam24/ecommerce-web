import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { FaShoppingCart, FaTruck, FaGift } from 'react-icons/fa';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f59e0b;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #4b5563;
  &:hover {
    color: #f59e0b;
  }
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const HeroImage = styled.img`
  max-width: 50%;
  height: auto;
`;

const ProductsSection = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const SidebarSection = styled.aside`
  width: 250px;
  float: left;
  margin-right: 2rem;
`;

const CategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 0.5rem;
`;

const CategoryLink = styled(Link)`
  color: #4b5563;
  &:hover {
    color: #f59e0b;
  }
`;

const BannerSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const BannerItem = styled.div`
  flex: 1;
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
`;

const BannerImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Footer = styled.footer`
  background-color: #1f2937;
  color: white;
  padding: 2rem 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterColumn = styled.div`
  flex: 1;
`;

const FooterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FooterItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled(Link)`
  color: #9ca3af;
  &:hover {
    color: white;
  }
`;

export default function Home() {
  const { data: products, isLoading, error } = useProducts();
  const [email, setEmail] = useState('');

  const swiperParams = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };

  return (
    <Container>
      <Header>
        <Logo>Electronics Mart</Logo>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>
      </Header>

      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroTitle>Wide Range of Mobile Phones!</HeroTitle>
            <Link to="/products" className="btn btn-primary">Shop Now</Link>
          </motion.div>
        </HeroContent>
        <HeroImage src="/path-to-hero-image.jpg" alt="Mobile phones" />
      </HeroSection>

      <SidebarSection>
        <SectionTitle>Categories</SectionTitle>
        <CategoryList>
          <CategoryItem><CategoryLink to="/category/electronics">Electronics</CategoryLink></CategoryItem>
          <CategoryItem><CategoryLink to="/category/appliances">Appliances</CategoryLink></CategoryItem>
          {/* Add more categories */}
        </CategoryList>

        <SectionTitle>Customer Review</SectionTitle>
        {/* Add customer review component */}

        <SectionTitle>Price</SectionTitle>
        {/* Add price filter component */}

        <SectionTitle>Discount</SectionTitle>
        {/* Add discount filter component */}
      </SidebarSection>

      <ProductsSection>
        <SectionTitle>Our New Products</SectionTitle>
        {isLoading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p>Error loading products: {error.message}</p>
        ) : (
          <Swiper {...swiperParams}>
            {products.slice(0, 6).map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </Swiper>
        )}
      </ProductsSection>

      <BannerSection>
        <BannerItem>
          <BannerImage src="/path-to-smart-watches-banner.jpg" alt="Smart Watches" />
          <h3>Smart Watches</h3>
          <p>Stay connected with style</p>
        </BannerItem>
        <BannerItem>
          <BannerImage src="/path-to-smart-phones-banner.jpg" alt="Smart Phones" />
          <h3>Smart Phones</h3>
          <p>Discover the latest technology</p>
        </BannerItem>
      </BannerSection>

      <ProductsSection>
        <SectionTitle>Exciting Deals</SectionTitle>
        <ProductGrid>
          {products.slice(6, 12).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </ProductsSection>

      <Footer>
        <FooterContent>
          <FooterColumn>
            <FooterTitle>Categories</FooterTitle>
            <FooterList>
              <FooterItem><FooterLink to="/category/mobile-tablets">Mobile & Tablets</FooterLink></FooterItem>
              <FooterItem><FooterLink to="/category/computers">Computers</FooterLink></FooterItem>
              {/* Add more categories */}
            </FooterList>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterList>
              <FooterItem><FooterLink to="/about">About Us</FooterLink></FooterItem>
              <FooterItem><FooterLink to="/contact">Contact Us</FooterLink></FooterItem>
              {/* Add more quick links */}
            </FooterList>
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>Newsletter</FooterTitle>
            <form onSubmit={(e) => {
              e.preventDefault();
              // Handle newsletter subscription
              console.log('Subscribed:', email);
              setEmail('');
            }}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </FooterColumn>
        </FooterContent>
      </Footer>
    </Container>
  );
}