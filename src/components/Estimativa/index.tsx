interface Props {
    dataProximoConcurso: string;
    valorEstimadoProximoConcurso: number;
}

export default function Estimativa({ dataProximoConcurso, valorEstimadoProximoConcurso }: Props) {
    return (
        <div>
            <div>
                Estimativa de prêmio do próximo concurso.
                Sorteio em {dataProximoConcurso}:
            </div>
            <div>
                {valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
                    style: "currency",
                    currency: "BRL"
                })}
            </div>
        </div>
    );
}