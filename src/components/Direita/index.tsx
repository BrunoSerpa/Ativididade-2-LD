import styled from "styled-components";
import Acumulou from "../Acumulou";
import Data from "../Data";
import Resultado from "../Resultado";

interface Props {
    quantidadeGanhadores: number;
    dezenas: string[];
    numeroDoConcurso: number;
    dataPorExtenso: string;
};

export default function Direita({ dezenas, quantidadeGanhadores, dataPorExtenso, numeroDoConcurso }: Props) {
    return (
        <WrapperDireita>
            <Resultado dezenas={dezenas} />
            <Acumulou quantidadeGanhadores={quantidadeGanhadores} />
            <Data dataPorExtenso={dataPorExtenso} numeroDoConcurso={numeroDoConcurso} />
        </WrapperDireita>
    );
};

const WrapperDireita = styled.div`
    flex: 2;
`;