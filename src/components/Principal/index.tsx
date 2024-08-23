import styled from "styled-components";
import { PropsPage } from "../../types";
import Carregando from "../Carregando";
import Direita from "../Direita";
import Esquerda from "../Esquerda";

export default function Principal(principal: PropsPage) {
    return principal.loteria.dataApuracao ? (
        <WrapperPrincipal>
            <Esquerda
                titulo={principal.titulo}
                dataProximoConcurso={principal.loteria.dataProximoConcurso}
                valorEstimadoProximoConcurso={principal.loteria.valorEstimadoProximoConcurso}
            />
            <Direita
                dataPorExtenso={principal.loteria.dataPorExtenso}
                dezenas={principal.loteria.dezenas}
                numeroDoConcurso={principal.loteria.numeroDoConcurso}
                quantidadeGanhadores={principal.loteria.quantidadeGanhadores}
            />
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