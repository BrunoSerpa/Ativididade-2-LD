import styled from "styled-components";
import { ThemeProps } from "../../types";
import { useLoteria, useTema } from "../../hooks";

interface Props {
    theme: ThemeProps;
    dataProximoConcurso: string;
    valorEstimadoProximoConcurso: number;
};

function Estimativa(props: Props) {
    return (
        <WrapperAcumulou>
            <WrapperTexto theme={props.theme}>
                Estimativa de prêmio do próximo concurso.
                Sorteio em {props.dataProximoConcurso}:
            </WrapperTexto>
            <WrapperValor theme={props.theme}>
                {props.valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
                    style: "currency",
                    currency: "BRL"
                })}
            </WrapperValor>
        </WrapperAcumulou>
    );
};

export function EstimativaMegasena() {
    const { megasena } = useLoteria();
    const { themeMegasena } = useTema();

    return (
        <Estimativa dataProximoConcurso={megasena.dataProximoConcurso} valorEstimadoProximoConcurso={megasena.valorEstimadoProximoConcurso} theme={themeMegasena} />
    );
};

export function EstimativaQuina() {
    const { quina } = useLoteria();
    const { themeQuina } = useTema();

    return (
        <Estimativa dataProximoConcurso={quina.dataProximoConcurso} valorEstimadoProximoConcurso={quina.valorEstimadoProximoConcurso} theme={themeQuina} />
    );
};

export function EstimativaTimemania() {
    const { timemania } = useLoteria();
    const { themeTimemania } = useTema();

    return (
        <Estimativa dataProximoConcurso={timemania.dataProximoConcurso} valorEstimadoProximoConcurso={timemania.valorEstimadoProximoConcurso} theme={themeTimemania} />
    );
};

const WrapperAcumulou = styled.div`
    width: 240px;
    margin-left: 45px;
    margin-top: 15px;
`;

const WrapperTexto = styled.div`
    font-size: 15px;
    color: ${(props) => props.theme.data};
`;

const WrapperValor = styled.div`
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
    color: ${(props) => props.theme.estimativa};
`;