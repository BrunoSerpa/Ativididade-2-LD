import styled from "styled-components";

interface Props {
    dataProximoConcurso: string;
    valorEstimadoProximoConcurso: number;
};

export default function Estimativa({ dataProximoConcurso, valorEstimadoProximoConcurso }: Props) {
    return (
        <WrapperAcumulou>
            <WrapperTexto>
                Estimativa de prêmio do próximo concurso.
                Sorteio em {dataProximoConcurso}:
            </WrapperTexto>
            <WrapperValor>
                {valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
                    style: "currency",
                    currency: "BRL"
                })}
            </WrapperValor>
        </WrapperAcumulou>
    );
};

const WrapperAcumulou = styled.div`
    width: 240px;
    margin-left: 45px;
    margin-top: 15px;
`;

const WrapperTexto = styled.div`
    font-size: 15px;
    /* color: {data}; */
`;

const WrapperValor = styled.div`
    font-size: 20px;
    margin-top: 15px;
    font-weight: bold;
    /* color: {estimativa}; */
`;