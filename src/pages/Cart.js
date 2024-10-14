import React from 'react';
import styled from 'styled-components';
import CartItem from '../components/CartItem';
import { useCartStore } from '../store/cartStore';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/formatCurrency';


const Cart = () => {
    const { items, updateQuantity, removeItem, clearCart, getTotalPrice } = useCartStore();

    return (
        <CartContainer>
            <CartHeader>
                <h1><FaShoppingCart /> Your Cart</h1>
                {items.length > 0 && (
                    <ClearCartButton onClick={clearCart}>
                        <FaTrash /> Clear Cart
                    </ClearCartButton>
                )}
            </CartHeader>
            {items.length === 0 ? (
                <EmptyCart>
                    <p>Your cart is empty</p>
                    <Link to="/">
                        <ContinueShoppingButton>Continue Shopping</ContinueShoppingButton>
                    </Link>
                </EmptyCart>
            ) : (
                <>
                    <CartItemsContainer>
                        {items.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onUpdateQuantity={updateQuantity}
                                onRemoveItem={removeItem}
                            />
                        ))}
                    </CartItemsContainer>
                    <CartSummary>
                        <TotalPrice>Total: {formatCurrency(getTotalPrice())}</TotalPrice>
                        <CheckoutButton as={Link} to="/checkout">Proceed to Checkout</CheckoutButton>
                    </CartSummary>
                </>
            )}
        </CartContainer>
    );
};

const CartContainer = styled.div`
    max-width: 1000px;
    margin: 40px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 10px;

    h1 {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #333;
    }
`;

const EmptyCart = styled.div`
    text-align: center;
    font-style: italic;
    color: #888;
    padding: 40px 0;
`;

const CartItemsContainer = styled.div`
    margin-bottom: 20px;
`;

const CartSummary = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 2px solid #f0f0f0;
`;

const TotalPrice = styled.div`
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
`;

const ClearCartButton = styled(Button)`
    background-color: #f44336;
    color: white;

    &:hover {
        background-color: #d32f2f;
    }
`;

const CheckoutButton = styled(Button)`
    background-color: #4CAF50;
    color: white;
    font-weight: bold;

    &:hover {
        background-color: #45a049;
    }
`;

const ContinueShoppingButton = styled(Button)`
    background-color: #2196F3;
    color: white;

    &:hover {
        background-color: #1e88e5;
    }
`;

export default Cart;
