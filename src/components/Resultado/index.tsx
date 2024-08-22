interface Props {
    dezenas: string[];
}

export default function Resultado({ dezenas }: Props) {
    return (
        <div>
            {
                dezenas.map(dezena =>
                    <div key={dezena}>{dezena}</div>
                )
            }
        </div>
    )
}