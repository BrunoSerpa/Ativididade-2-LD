interface Props {
    trevo: string;
    loteria: string;
}

export default function NomeLoteria({ trevo, loteria }: Props) {
    return (
        <div>
            <img src={trevo} alt="" />
            <span>{loteria}</span>
        </div>
    );
}