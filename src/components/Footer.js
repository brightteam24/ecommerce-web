import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaTruck, FaThumbsUp, FaPaperPlane, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <FooterWrapper>
      <ElectronicsSection>
        <h2>Electronics</h2>
        <p>
          If you're considering a new laptop, looking for a powerful new car stereo or shopping for a new HDTV, we make it easy to find exactly what you need at a price you can afford. We offer Every Day Low Prices on TVs, laptops, cell phones, tablets and iPads, video games, desktop computers, cameras and camcorders, audio, video and more.
        </p>
        <Features>
          <Feature>
            <FaShoppingCart />
            <FeatureText>
              <h3>Free Shipping</h3>
              <p>on orders over $100</p>
            </FeatureText>
          </Feature>
          <Feature>
            <FaTruck />
            <FeatureText>
              <h3>Fast Delivery</h3>
              <p>World Wide</p>
            </FeatureText>
          </Feature>
          <Feature>
            <FaThumbsUp />
            <FeatureText>
              <h3>Big Choice</h3>
              <p>of Products</p>
            </FeatureText>
          </Feature>
        </Features>
      </ElectronicsSection>
      <MainFooter>
        <FooterColumn>
          <h3>Categories</h3>
          <FooterLink href="#">Mobiles</FooterLink>
          <FooterLink href="#">Computers</FooterLink>
          <FooterLink href="#">TV, Audio</FooterLink>
          <FooterLink href="#">Smartphones</FooterLink>
          <FooterLink href="#">Washing Machines</FooterLink>
          <FooterLink href="#">Refrigerators</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <h3>Quick Links</h3>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterLink href="#">Help</FooterLink>
          <FooterLink href="#">FAQs</FooterLink>
          <FooterLink href="#">Terms of use</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <h3>Get in Touch</h3>
          <ContactInfo>
            <p>My Company, 42 Puffin street 12345 Puffinville France</p>
            <p>+1 234-5678</p>
            <p>+2 234-5678</p>
            <p>info@example.com</p>
          </ContactInfo>
        </FooterColumn>
        <FooterColumn>
          <h3>Newsletter</h3>
          <p>Free Delivery on your first order!</p>
          <NewsletterForm>
            <input type="email" placeholder="Email" />
            <button type="submit"><FaPaperPlane /></button>
          </NewsletterForm>
          <SocialLinks>
            <h4>Follow Us on</h4>
            <SocialIcon><FaFacebookF /></SocialIcon>
            <SocialIcon><FaTwitter /></SocialIcon>
            <SocialIcon><FaInstagram /></SocialIcon>
          </SocialLinks>
        </FooterColumn>
      </MainFooter>
      <Copyright>
        <p>Designed by <a href="https://www.brightteamhub.com.ng/">Bright TeamHub</a> &copy; 2024. All rights reserved.</p>
      </Copyright>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #f8f8f8;
`;

const ElectronicsSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 30px;
    line-height: 1.6;
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 24px;
    color: #ffa500;
    margin-right: 10px;
  }
`;

const FeatureText = styled.div`
  text-align: left;

  h3 {
    margin: 0;
    font-size: 18px;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #666;
  }
`;

const MainFooter = styled.div`
  background-color: #2c2c54;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 40px 20px;
  max-width: 100%;
`;

const FooterColumn = styled.div`
  flex: 1;
  margin-right: 20px;

  h3 {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;

const FooterLink = styled.a`
  display: block;
  color: #ccc;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 14px;

  &:hover {
    color: white;
  }
`;

const ContactInfo = styled.div`
  font-size: 14px;
  color: #ccc;

  p {
    margin-bottom: 10px;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  margin-bottom: 20px;

  input {
    flex-grow: 1;
    padding: 10px;
    border: none;
  }

  button {
    background-color: #ffa500;
    border: none;
    color: white;
    padding: 10px 15px;
    cursor: pointer;
  }
`;

const SocialLinks = styled.div`
  h4 {
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

const SocialIcon = styled.a`
  display: inline-block;
  margin-right: 10px;
  background-color: #3f51b5;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  font-size: 14px;

  &:hover {
    background-color: #ffa500;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding: 10px;
  background-color: #2c2c54;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }
`;