import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ResumeContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;
const Resumen = ({datos}) => {
    
    const {marca, year, plan} = datos;

    if (marca === '' || year === '' || plan === '')
        return true;
    
    return ( 
        <ResumeContainer>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {marca} </li>
                <li>Plan: {plan} </li>
                <li>Año del carro: {year} </li>
            </ul>
        </ResumeContainer>
     );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;