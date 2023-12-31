import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

import {
   MenuItemContainer,
   BackgroundImageContainer,
   ContentContainer,
   ContentTitle,
   ContentSubtitle
 } from './menu-item.styles';
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
   <MenuItemContainer
     size={size}
     onClick={() => history.push(`${match.url}${linkUrl}`)}
   >
     <BackgroundImageContainer
       className='background-image'
       imageUrl={imageUrl}
     />
     <ContentContainer className='content'>
       <ContentTitle>{title.toUpperCase()}</ContentTitle>
       <ContentSubtitle>SHOP NOW</ContentSubtitle>
     </ContentContainer>
   </MenuItemContainer>
 );

export default MenuItem;
