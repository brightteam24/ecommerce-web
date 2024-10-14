import React, { useState, useEffect } from 'react';
import { FaHeart, FaMapMarkerAlt, FaMoon, FaSearch, FaShoppingCart, FaUser, FaUserPlus, FaAngleDown } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useCartStore } from '../store/cartStore';
import { useSpring, animated } from '@react-spring/web';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

export default function Header() {
    const [isFixed, setIsFixed] = useState(false);
    const location = useLocation();
    const cartItemCount = useCartStore(state => state.getItemCount());

    const headerAnimation = useSpring({
        opacity: isFixed ? 0 : 1,
        transform: isFixed ? 'translateY(-100%)' : 'translateY(0)',
    });

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsFixed(offset > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleCartClick = () => {
        if (cartItemCount === 0) {
            toast.info("Your cart is empty!");
        }
    };

    return (
        <HeaderWrapper>
            <TopSection>
                <TopBar>
                    <WelcomeText>Welcome to our store</WelcomeText>
                    <TopBarRight>
                        <TopBarLink><FaMapMarkerAlt /> Select Location</TopBarLink>
                        <TopBarLink><FaUser /> Log In</TopBarLink>
                        <TopBarLink><FaUserPlus /> Register</TopBarLink>
                    </TopBarRight>
                </TopBar>
                <MainHeader>
                    <Logo>
                        <Link to="/">
                            <span style={{ color: '#f59e0b', fontSize: '30px' }}>E</span>lectronics <span style={{ color: '#f59e0b', fontSize: '30px' }}>S</span>tore
                        </Link>
                    </Logo>
                    <SearchBar>
                        <SearchInput type="text" placeholder="Search for products, brands and more" aria-label="Search" />
                        <SearchButton aria-label="Search"><FaSearch /></SearchButton>
                    </SearchBar>
                    <IconGroup>
                        <IconButton aria-label="Toggle dark mode"><FaMoon /></IconButton>
                        <IconButton aria-label="Favorites"><FaHeart /></IconButton>
                        <CartButton onClick={handleCartClick} as={Link} to="/cart" aria-label="Shopping cart">
                            <FaShoppingCart />
                            {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
                        </CartButton>
                    </IconGroup>
                </MainHeader>
            </TopSection>
            <animated.div style={headerAnimation}>
                <NavBar isFixed={isFixed}>
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <CategoryDropdown>
                            <select aria-label="Select category">
                                <option value="all">All Categories</option>
                                <option value="electronics">Electronics</option>
                                <option value="clothing">Clothing</option>
                                <option value="home">Home</option>
                                <option value="beauty">Beauty</option>
                                <option value="sports">Sports</option>
                                <option value="books">Books</option>
                                <option value="toys">Toys</option>
                                <option value="other">Other</option>
                            </select>
                        </CategoryDropdown>
                    </motion.div>
                    <NavLinks>
                        <NavLink to="/" $active={location.pathname === "/"}>Home</NavLink>
                        <NavLinkWithDropdown>
                            Electronics <FaAngleDown />
                            <DropdownContent>
                                <DropdownColumn>
                                    <h4>Mobiles, Computers</h4>
                                    <Link to="/products/mobile-phones">All Mobile Phones</Link>
                                    <Link to="/products/mobile-accessories">All Mobile Accessories</Link>
                                    <Link to="/products/cases-covers">Cases & Covers</Link>
                                    <Link to="/products/screen-protectors">Screen Protectors</Link>
                                    <Link to="/products/power-banks">Power Banks</Link>
                                    <Link to="/products/certified-refurbished">All Certified Refurbished</Link>
                                    <Link to="/products/tablets">Tablets</Link>
                                    <Link to="/products/wearable-devices">Wearable Devices</Link>
                                    <Link to="/products/smart-home">Smart Home</Link>
                                </DropdownColumn>
                                <DropdownColumn>
                                    <h4>&nbsp;</h4>
                                    <Link to="/products/laptops">Laptops</Link>
                                    <Link to="/products/drives-storage">Drives & Storage</Link>
                                    <Link to="/products/printers-ink">Printers & Ink</Link>
                                    <Link to="/products/networking-devices">Networking Devices</Link>
                                    <Link to="/products/computer-accessories">Computer Accessories</Link>
                                    <Link to="/products/game-zone">Game Zone</Link>
                                    <Link to="/products/software">Software</Link>
                                </DropdownColumn>
                            </DropdownContent>
                        </NavLinkWithDropdown>
                        <NavLink to="/appliances" $active={location.pathname === "/appliances"}>Appliances</NavLink>
                        <NavLink to="/about" $active={location.pathname === "/about"}>About us</NavLink>
                        <NavLink to="/new-arrivals" $active={location.pathname === "/new-arrivals"}>New arrivals</NavLink>
                        <NavLink to="/pages" $active={location.pathname === "/pages"}>Pages</NavLink>
                        <NavLink to="/contact" $active={location.pathname === "/contact"}>Contact us</NavLink>
                    </NavLinks>
                </NavBar>
            </animated.div>
            {isFixed && <Placeholder />}
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
    font-family: 'Arial', sans-serif;
`;

const TopSection = styled.div`
    position: relative;
    z-index: 1;
    background-color: #fff;
`;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 80px;
    background-color: #f8f8f8;
    font-size: 12px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 5px 20px;
    }
`;

const WelcomeText = styled.h1`
    font-size: 12px;
    color: #333;
`;

const TopBarRight = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 768px) {
        margin-top: 5px;
    }
`;

const TopBarLink = styled.a`
    color: #333;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: color 0.3s ease;

    &:hover {
        color: #f59e0b;
    }
`;

const MainHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 80px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 10px 20px;
    }
`;

const Logo = styled(motion.h1)`
    font-size: 24px;
    font-weight: bold;
    margin: 0;

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const SearchBar = styled.div`
    display: flex;
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
        margin: 10px 0;
    }
`;

const SearchInput = styled.input`
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-right: none;
`;

const SearchButton = styled.button`
    background-color: #ffa500;
    border: none;
    padding: 10px 15px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #ff8c00;
    }
`;

const IconGroup = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`;

const IconButton = styled.button`
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #f59e0b;
    }
`;

const CartButton = styled(motion(Link))`
    text-decoration: none;
    color: #000;
    position: relative;
    transition: color 0.3s ease;

    &:hover {
        color: #f59e0b;
    }
`;

const CartCount = styled.span`
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: #f59e0b;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
`;

const NavBar = styled.nav`
    display: flex;
    background-color: #2c2c54;
    justify-content: space-between;
    align-items: center;
    padding: 10px 80px;
    position: ${props => props.isFixed ? 'fixed' : 'static'};
    top: ${props => props.isFixed ? '0' : 'auto'};
    left: 0;
    right: 0;
    z-index: 1000;
    height: 60px;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 10px 20px;
    }
`;

const CategoryDropdown = styled.div`
    select {
        padding: 10px 20px;
        background-color: #fff;
        color: #3c3c74;
        border: none;
        cursor: pointer;
    }
`;

const NavLinks = styled.div`
    display: flex;
    gap: 20px;
    margin-left: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin-left: 0;
        margin-top: 10px;
    }
`;

const NavLink = styled(Link)`
    color: ${props => props.$active ? '#ffa500' : 'white'};
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    transition: color 0.3s ease;
    
    &:hover {
        color: #ffa500;
    }
`;

const NavLinkWithDropdown = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
        color: #ffa500;
    }

    &:hover > div {
        display: flex;
    }
`;

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    min-width: 400px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    padding: 20px;
    justify-content: space-between;

    @media (max-width: 768px) {
        position: static;
        min-width: 100%;
        flex-direction: column;
    }
`;

const DropdownColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h4 {
        color: #f59e0b;
        margin: 0 0 10px 0;
    }

    a {
        color: #333;
        text-decoration: none;
        text-transform: none;
        font-weight: normal;
        font-size: 14px;
        transition: color 0.3s ease;

        &:hover {
            color: #f59e0b;
        }
    }
`;

const Placeholder = styled.div`
    height: 60px;
`;
