import Carregando from "../Carregando";
import { EsquerdaMegasena, EsquerdaQuina, EsquerdaTimemania } from "../Esquerda";
import { DireitaMegasena, DireitaQuina, DireitaTimemania } from "../Direita";
import { useLoteria } from "../../hooks";
import styled from "styled-components";

export function Megasena() {
    const { megasena } = useLoteria();
    return megasena.dataApuracao ? (
            <WrapperPrincipal>
                <EsquerdaMegasena />
                <DireitaMegasena />
            </WrapperPrincipal>
    ) : (
        <Carregando />
    );
};

export function Quina() {
    const { quina } = useLoteria();
    return quina.dataApuracao ? (
            <WrapperPrincipal>
                <EsquerdaQuina />
                <DireitaQuina />
            </WrapperPrincipal>
    ) : (
        <Carregando />
    );
};

export function Timemania() {
    const { timemania } = useLoteria();
    return timemania.dataApuracao ? (
            <WrapperPrincipal>
                <EsquerdaTimemania />
                <DireitaTimemania />
            </WrapperPrincipal>
    ) : (
        <Carregando />
    );
};

const WrapperPrincipal = styled.div`
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
`;