import styled from "styled-components";

export default function Carregando() {
    return (
        <WrapperCarregando>
            <h3>Carregando...</h3>
        </WrapperCarregando>
    );
};

const WrapperCarregando = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    font-family: roboto;
`;