import styled from "styled-components";

interface Props {
    dezenas: string[];
};

export default function Resultado({ dezenas }: Props) {
    return (
        <WrapperResultado>
            {
                dezenas.map(dezena =>
                    <WrapperBolas key={dezena}>{dezena}</WrapperBolas>
                )
            }
        </WrapperResultado>
    );
};

const WrapperResultado = styled.div`
    display: flex;
`;

const WrapperBolas = styled.div`
    font-size: 18px;
    font-weight: bold;
    /* background-color: {bola}; */
    /* color: {bolafonte}; */
    border-radius: 25px;
    padding: 10px;
    margin: 0px 10px;
`;