import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';
import Resumen from './components/Resumen';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;

`;

const FormContainer = styled.div`
    background-color: #FFF;
    padding: 3rem;
`;

function App() {

    const [resumen, setResumen] = useState({
        cotizacion: 0,
        datos: {
            marca: '',
            plan: '',
            year: ''
        }
    });

    const [ loading, setLoading] = useState(false);

    const { cotizacion, datos} = resumen;
    return (
        <Container>
            <Header titulo="Mi cotizador" />

            <FormContainer>
                <Form  setResumen={setResumen} setLoading={setLoading} />
                { loading ? <Spinner /> : null }
                <Resumen datos={datos} /> 
                { !loading ? <Result cotizacion={cotizacion} /> : null }
            </FormContainer>
        </Container >
    );
}

export default App;
