import styled from "styled-components";
import { ResultadoMegasena, ResultadoQuina, ResultadoTimemania } from "../Resultado";
import { AcumulouMegasena, AcumulouQuina, AcumulouTimemania } from "../Acumulou";
import { DataMegasena, DataQuina, DataTimemania } from "../Data";

export function DireitaMegasena() {
    return (
        <WrapperDireita>
            <ResultadoMegasena />
            <AcumulouMegasena />
            <DataMegasena />
        </WrapperDireita>
    );
};

export function DireitaQuina() {
    return (
        <WrapperDireita>
            <ResultadoQuina />
            <AcumulouQuina />
            <DataQuina />
        </WrapperDireita>
    );
};

export function DireitaTimemania() {
    return (
        <WrapperDireita>
            <ResultadoTimemania />
            <AcumulouTimemania />
            <DataTimemania />
        </WrapperDireita>
    );
};

const WrapperDireita = styled.div`
    flex: 2;
`;