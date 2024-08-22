interface Props {
    quantidadeGanhadores: number;
}

export default function Acumulou({ quantidadeGanhadores }: Props) {
    
    return (
        <div>
            {
                quantidadeGanhadores === 0 ?
                    "ACUMULOU!" :
                    `${quantidadeGanhadores} GANHADORES`
            }
        </div>
    )
}