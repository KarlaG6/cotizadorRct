import React, {useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { getDifYear, calcMarca, getPlan } from '../Helper';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 0.7rem 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
    border-radius: 0.7rem;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        cursor: pointer;
        background-color:#26C6DA
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = ({ setResumen, setLoading }) => {
    const [datos, handleDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState(false);

    const { marca, year, plan} = datos;

    const getInfo = e => {
        handleDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = e => {
        e.preventDefault();
        if( marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        let rslt = 2000;

        const difference = getDifYear(year);

        rslt -= (( difference * 3) * rslt)/100;

        rslt = calcMarca(marca)*rslt;
        const planIncrement = getPlan(plan);
        rslt = parseFloat( planIncrement * rslt ).toFixed(2);
        
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            //pasa la info al main component
            setResumen({
                cotizacion: Number(rslt), 
                datos
            });
        }, 3000);

    }

    return ( 
        <form onSubmit={cotizarSeguro}>
            { error ? <Error>Todos los campos son obligatorios</Error> : null}
            <Campo>
                <Label>Marca</Label>
                <Select name="marca" value={marca} onChange={getInfo}>
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select name="year" value={year} onChange={getInfo}>
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio type="radio" name="plan" value="basico" checked={plan === "basico"} onChange={getInfo}/>Básico
                <InputRadio type="radio" name="plan" value="completo" checked={plan === "completo"} onChange={getInfo}/>Completo

            </Campo>
            <Button type="submit">Cotizar</Button>
        </form>


    );
}
Form.propTypes = {
    setResumen: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired
}
export default Form;