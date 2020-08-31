import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Mssg =styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;
const ResultCotiza = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;
const CotizaText =styled.p`
    color: #00839F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Result = ({ cotizacion }) => {
    
    return ( 
    (cotizacion === 0) 
        ? <Mssg>Elige marca, año y tipo de seguro</Mssg>
        : ( <ResultCotiza> 
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition classNames="resultado" key={cotizacion} timeout={{ enter: 500, exit: 500}}>
                        <CotizaText>El total es: $ <span>{cotizacion}</span></CotizaText>
                    </CSSTransition>
                </TransitionGroup>
            </ResultCotiza>
            )
    );
}
 
Result.propTypes = {
    cotizacion: PropTypes.number.isRequired
}
export default Result;