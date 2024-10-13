import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { formatCurrency } from '../utils/formatCurrency'

const Card = styled(motion.div)`
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

const ProductImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
`

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProductName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const ProductPrice = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
`

const ViewButton = styled(Link)`
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }
`

const ProductDescription = styled.p`
  color: #4b5563;
`

export default function ProductCard({ product }) {
    return (
        <Card
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
                <ViewButton to={`/products/${product.id}`}>View</ViewButton>
            </ProductInfo>
            <ProductDescription>{product.description}</ProductDescription>
        </Card>
    )
}
