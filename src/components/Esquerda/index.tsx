import styled from "styled-components";
import { PropsTitle } from "../../types";
import Estimativa from "../Estimativa";
import NomeLoteria from "../NomeLoteria";

interface Props {
    titulo: PropsTitle;
    dataProximoConcurso: string;
    valorEstimadoProximoConcurso: number;
};

export default function Esquerda({ titulo, dataProximoConcurso, valorEstimadoProximoConcurso }: Props) {
    return (
        <WrapperEsquerda>
            <NomeLoteria trevo={titulo.trevo} nomeLoteria={titulo.nome} />
            <Estimativa dataProximoConcurso={dataProximoConcurso} valorEstimadoProximoConcurso={valorEstimadoProximoConcurso} />
        </WrapperEsquerda>
    );
};

const WrapperEsquerda = styled.div `
    flex: 1;
`;