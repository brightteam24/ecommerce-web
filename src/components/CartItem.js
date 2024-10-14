import React from 'react'
import styled from 'styled-components'
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa'
import { formatCurrency } from '../utils/formatCurrency';

export default function CartItem({ item, onUpdateQuantity, onRemoveItem }) {
    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1) {
            onUpdateQuantity(item.id, newQuantity);
        }
    };

    return (
        <CartItemContainer>
            <CartItemImage src={item.image} alt={item.name} />
            <CartItemDetails>
                <CartItemName>{item.name}</CartItemName>
                <CartItemPrice>{formatCurrency(item.price)}</CartItemPrice>
                <CartItemQuantity>
                    <QuantityButton onClick={() => handleQuantityChange(item.quantity - 1)}>
                        <FaMinus />
                    </QuantityButton>
                    <QuantityInput 
                        type="number" 
                        value={item.quantity} 
                        onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                        min="1"
                    />
                    <QuantityButton onClick={() => handleQuantityChange(item.quantity + 1)}>
                        <FaPlus />
                    </QuantityButton>
                </CartItemQuantity>
            </CartItemDetails>
            <CartItemTotal>
                {formatCurrency(item.price * item.quantity)}
            </CartItemTotal>
            <RemoveButton onClick={() => onRemoveItem(item.id)}>
                <FaTrash />
            </RemoveButton>
        </CartItemContainer>
    )
}

const CartItemContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #e0e0e0;
    padding: 15px;
    border-radius: 8px;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
`;

const CartItemImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 20px;
    border-radius: 4px;
`;

const CartItemDetails = styled.div`
    flex: 1;
`;

const CartItemName = styled.h3`
    margin: 0 0 5px 0;
    font-size: 18px;
    color: #333;
`;

const CartItemPrice = styled.p`
    margin: 0 0 10px 0;
    font-size: 16px;
    font-weight: bold;
    color: #4CAF50;
`;

const CartItemQuantity = styled.div`
    display: flex;
    align-items: center;
`;

const QuantityButton = styled.button`
    background-color: #f0f0f0;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e0e0e0;
    }
`;

const QuantityInput = styled.input`
    width: 40px;
    text-align: center;
    margin: 0 10px;
    padding: 5px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
`;

const CartItemTotal = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin: 0 20px;
    color: #333;
`;

const RemoveButton = styled.button`
    background-color: transparent;
    border: none;
    color: #f44336;
    cursor: pointer;
    font-size: 18px;
    transition: color 0.3s ease;

    &:hover {
        color: #d32f2f;
    }
`;
