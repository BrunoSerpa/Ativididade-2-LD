import { PropsTitle } from "../../types";
import Estimativa from "../Estimativa";
import NomeLoteria from "../NomeLoteria";

interface Props {
    titulo: PropsTitle;
    dataProximoConcurso: string;
    valorEstimadoProximoConcurso: number;
}

export default function Esquerda({ titulo, dataProximoConcurso, valorEstimadoProximoConcurso }: Props) {
    return (
        <div>
            <NomeLoteria trevo={titulo.trevo} loteria={titulo.nome} />
            <Estimativa dataProximoConcurso={dataProximoConcurso} valorEstimadoProximoConcurso={valorEstimadoProximoConcurso} />
        </div>
    )
}