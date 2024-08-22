interface Props {
    numeroDoConcurso: number;
    dataPorExtenso: string;
}

export default function Data({numeroDoConcurso, dataPorExtenso}: Props) {
    return (
        <div>
            {
                `Concurso ${numeroDoConcurso} - ${dataPorExtenso}`
            }
        </div>
    )
}