import React from 'react';
import { StyleCard } from './styles/Card.styled';
import Plan from './Plan';
import { StyledButton } from './styles/Button.styled';
import { StyledLink } from './styles/Link.styled';

const Card = () => {
  return ( 
    <StyleCard>
      <img src='./images/illustration-hero.svg' alt=""/>
      <h1>Order Summary</h1>
      <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
      <Plan />
      <StyledButton>Proceed to Payment</StyledButton>
      <p><a href="abc.html" style={ {color: 'gray', textDecoration: 'none', fontWeight: '700'}}>Cancel Order</a></p>
    </StyleCard>)
};

export default Card;
