import styled from "styled-components";

interface Props {
    quantidadeGanhadores: number;
};

export default function Acumulou({ quantidadeGanhadores }: Props) {
    return (
        <WrapperAcumulou>
            {
                quantidadeGanhadores === 0 ?
                    "ACUMULOU!" :
                    `${quantidadeGanhadores} GANHADORES`
            }
        </WrapperAcumulou>
    );
};

const WrapperAcumulou = styled.div`
    font-size: 28px;
    font-weight: bold;
    /* color: {acumulou}; */
    margin-top: 15px;
    padding-left: 15px;
`;