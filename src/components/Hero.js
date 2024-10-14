import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
    const slides = [
        {
            image: 'https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/images/off1.png',
            title: 'EXCITING DEALS ON LAPTOPS',
            subtitle: 'Save up to 50% off on selected laptops',
            buttonText: 'Shop Now',
            buttonLink: '/products'
        },
        {
            image: 'https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/images/off2.png',
            title: 'BEST DEALS ON SMARTPHONES',
            subtitle: 'Save up to 50% off on selected smartphones',
            buttonText: 'Shop Now',
            buttonLink: '/products'
        },
        {
            image: 'https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/images/off3.png',
            title: 'BEST DEALS ON SMARTPHONES',
            subtitle: 'Save up to 50% off on selected smartphones',
            buttonText: 'Shop Now',
            buttonLink: '/products'
        }
    ];

    return (
        <SliderWrapper>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                }}
                pagination={{ clickable: true }}
                loop={true}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <SlideContent>
                            <TextContent>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <Subtitle>{slide.subtitle}</Subtitle>
                                    <Title>{slide.title}</Title>
                                    <ShopNowButton as={Link} to={slide.buttonLink}>
                                        {slide.buttonText}
                                    </ShopNowButton>
                                </motion.div>
                            </TextContent>
                            <ImageWrapper>
                                <motion.img
                                    src={slide.image}
                                    alt={slide.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                />
                            </ImageWrapper>
                        </SlideContent>
                    </SwiperSlide>
                ))}
            </Swiper>
            <NavigationButton direction="left">
                <FaChevronLeft size={20} style={{ color: '#2c2c54' }} />
            </NavigationButton>
            <NavigationButton direction="right">
                <FaChevronRight size={20} style={{ color: '#2c2c54' }} />
            </NavigationButton>
        </SliderWrapper>
    );
}

const SliderWrapper = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
`;

const SlideContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ShopNowButton = styled(Link)`
  background-color: #ffa500;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color: #ff8c00;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  text-align: right;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const NavigationButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction}: 10px;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;