import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const HeaderContainer = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFF;
`;

const HeaderText = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return ( 
        <HeaderContainer>
            <HeaderText>{titulo}</HeaderText>
        </HeaderContainer>
     );
}
 
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
export default Header;