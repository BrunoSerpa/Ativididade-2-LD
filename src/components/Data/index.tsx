import styled from "styled-components";

interface Props {
    numeroDoConcurso: number;
    dataPorExtenso: string;
};

export default function Data({ numeroDoConcurso, dataPorExtenso }: Props) {
    return (
        <WrapperData>
            {
                `Concurso ${numeroDoConcurso} - ${dataPorExtenso}`
            }
        </WrapperData>
    );
};

const WrapperData = styled.div`
    margin-top: 15px;
    /* color: data; */
    padding-left: 15px;
    font-size: 15px;
`;