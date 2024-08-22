import Acumulou from "../Acumulou";
import Data from "../Data";
import Resultado from "../Resultado";

interface Props {
    quantidadeGanhadores: number;
    dezenas: string[];
    numeroDoConcurso: number;
    dataPorExtenso: string;
}

export default function Direita({ dezenas, quantidadeGanhadores, dataPorExtenso, numeroDoConcurso }: Props) {
    return (
        <div>
            <Resultado dezenas={dezenas} />
            <Acumulou quantidadeGanhadores={quantidadeGanhadores} />
            <Data dataPorExtenso={dataPorExtenso} numeroDoConcurso={numeroDoConcurso} />
        </div>
    )
}