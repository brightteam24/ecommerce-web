import React, { useState } from 'react';
import styled from 'styled-components';
import { useCartStore } from '../store/cartStore';
import { FaLock, FaCreditCard, FaPaypal } from 'react-icons/fa';
import { formatCurrency } from '../utils/formatCurrency';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PaystackButton } from 'react-paystack';

const steps = ['Shipping', 'Payment', 'Review'];

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState(0);
  const { items, getTotalPrice } = useCartStore();
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const publicKey = 'pk_test_ebf4ca6ba11f038fa29b1e30eb5972083c7c5bbe';

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(1);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handlePlaceOrder = () => {
    // Here you would typically send the order to your backend
    const order = {
        ...shippingInfo,
        ...paymentInfo,
        email: shippingInfo.email,
        phone: shippingInfo.phone,
        amount: getTotalPrice(),
        items,
        onSuccess: () => {
            toast.success('Order placed successfully!');
        },
        onClose: () => {
            toast.error('Payment window closed!');
        },
        onError: () => {
            toast.error('Payment failed!');
        }
    };
    console.log('Order placed', order);
  };

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <form onSubmit={handleShippingSubmit}>
            <h2>Shipping Information</h2>
            <Input
              type="text"
              placeholder="Full Name"
              value={shippingInfo.fullName}
              onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
              required
            />
            <Input
              type="text"
              placeholder="Address"
              value={shippingInfo.address}
              onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
              required
            />
            <Input
              type="text"
              placeholder="City"
              value={shippingInfo.city}
              onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
              required
            />
            <Input
              type="text"
              placeholder="Country"
              value={shippingInfo.country}
              onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
              required
            />
            <Input
              type="text"
              placeholder="Postal Code"
              value={shippingInfo.postalCode}
              onChange={(e) => setShippingInfo({ ...shippingInfo, postalCode: e.target.value })}
              required
            />
            <Button type="submit">Continue to Payment</Button>
          </form>
        );
      case 1:
        return (
          <form onSubmit={handlePaymentSubmit}>
            <h2>Payment Information</h2>
            <PaymentOptions>
              <PaymentOption>
                <FaCreditCard /> Credit Card
              </PaymentOption>
              <PaymentOption>
                <FaPaypal /> PayPal
              </PaymentOption>
            </PaymentOptions>
            <Input
              type="text"
              placeholder="Card Number"
              value={paymentInfo.cardNumber}
              onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
              required
            />
            <Input
              type="text"
              placeholder="Name on Card"
              value={paymentInfo.cardName}
              onChange={(e) => setPaymentInfo({ ...paymentInfo, cardName: e.target.value })}
              required
            />
            <FlexContainer>
              <Input
                type="text"
                placeholder="MM/YY"
                value={paymentInfo.expiryDate}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })}
                required
              />
              <Input
                type="text"
                placeholder="CVV"
                value={paymentInfo.cvv}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                required
              />
            </FlexContainer>
            <Button type="submit">Review Order</Button>
          </form>
        );
      case 2:
        return (
          <div>
            <h2>Order Summary</h2>
            {items.map((item) => (
              <OrderItem key={item.id}>
                <span>{item.name}</span>
                <span>x{item.quantity}</span>
                <span>{formatCurrency(item.price * item.quantity)}</span>
              </OrderItem>
            ))}
            <TotalPrice>Total: {formatCurrency(getTotalPrice())}</TotalPrice>
            <PaystackButton className='paystack-button' text='Place Order' {...componentProps} />
          </div>
        );
      default:
        return null;
    }
  };

  const componentProps = {
    text: 'Place Order',
    publicKey: publicKey,
    email: "shippingInfo@gmail.com",
    amount: getTotalPrice() * 100,
    onSuccess: handlePlaceOrder,
  };

  return (
    <CheckoutContainer>
      <CheckoutSteps>
        {steps.map((step, index) => (
          <StepIndicator key={step}>
            <StepButton to={`/checkout?step=${index}`} active={index === currentStep} onClick={() => handleStepChange(index)}>{step}</StepButton>
          </StepIndicator>
        ))}
      </CheckoutSteps>
      <CheckoutContent>
        {renderStep()}
      </CheckoutContent>
      <SecurityNote>
        <FaLock /> Your information is secure and encrypted
      </SecurityNote>
    </CheckoutContainer>
  );
}

const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CheckoutSteps = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const StepIndicator = styled.div`
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: bold;
`;

const StepButton = styled(Link)`
  background-color: ${props => props.active ? '#3f51b5' : '#e0e0e0'};
  color: ${props => props.active ? 'white' : 'black'};
  border: none;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;

const CheckoutContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #3f51b5;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #303f9f;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const PaymentOptions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TotalPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SecurityNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  color: #666;
`;

