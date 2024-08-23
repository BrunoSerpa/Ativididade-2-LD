import styled from "styled-components";

interface Props {
    trevo: string;
    nomeLoteria: string;
};

export default function NomeLoteria({ trevo, nomeLoteria }: Props) {
    return (
        <WrapperNomeLoteria>
            <img src={trevo} alt="" />
            <WrapperNome>{nomeLoteria}</WrapperNome>
        </WrapperNomeLoteria>
    );
};


const WrapperNomeLoteria = styled.div`
    display: flex;
`;

const WrapperNome = styled.span`
    font-size: 28px;
    font-weight: bold;
    /* color: {loteria}; */
    margin-left: 10px;
`;