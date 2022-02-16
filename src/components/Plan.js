import React from 'react';
import { StyledPlan, StyledIcon, StyledOption, StyledCancel } from './styles/Plan.styled';
import { Flex } from './styles/Flex.styled';
import { FaMusic } from 'react-icons/fa';


const Plan = () => {
  return (
    <>
        <StyledPlan>
                <StyledIcon><a href="abc.html"><FaMusic /></a></StyledIcon>
                <StyledOption>Annual Plan <br /><span style={ {color: 'gray', fontWeight: '200'}}>$59.99/year</span></StyledOption>
                <StyledCancel><a href="abc.html">Change</a></StyledCancel>
        </StyledPlan>
    </>
    )
};

export default Plan;
