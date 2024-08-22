import { Props, PropsTitle } from "../../types";
import Carregando from "../Carregando";
import Direita from "../Direita";
import Esquerda from "../Esquerda";

interface PrincipalProps {
    dados: Props;
    titulo: PropsTitle;
}

export default function Principal(principal: PrincipalProps) {
    return principal.dados.dataApuracao ? (
        <div>
            <Esquerda
                titulo={principal.titulo}
                dataProximoConcurso={principal.dados.dataProximoConcurso}
                valorEstimadoProximoConcurso={principal.dados.valorEstimadoProximoConcurso}
            />
            <Direita
                dataPorExtenso={principal.dados.dataPorExtenso}
                dezenas={principal.dados.dezenas}
                numeroDoConcurso={principal.dados.numeroDoConcurso}
                quantidadeGanhadores={principal.dados.quantidadeGanhadores}
            />
        </div>
    ) : (
        <Carregando />
    )
}