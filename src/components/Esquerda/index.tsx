import styled from "styled-components";
import { NomeLoteriaMegasena, NomeLoteriaQuina, NomeLoteriaTimemania } from "../NomeLoteria";
import { EstimativaMegasena, EstimativaQuina, EstimativaTimemania } from "../Estimativa";

export function EsquerdaMegasena() {
    return (
        <WrapperEsquerda>
            <NomeLoteriaMegasena />
            <EstimativaMegasena />
        </WrapperEsquerda>
    );
};

export function EsquerdaQuina() {
    return (
        <WrapperEsquerda>
            <NomeLoteriaQuina />
            <EstimativaQuina />
        </WrapperEsquerda>
    );
};

export function EsquerdaTimemania() {
    return (
        <WrapperEsquerda>
            <NomeLoteriaTimemania />
            <EstimativaTimemania />
        </WrapperEsquerda>
    );
};

const WrapperEsquerda = styled.div`
    flex: 1;
`;