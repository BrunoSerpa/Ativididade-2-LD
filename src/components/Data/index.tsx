import styled from "styled-components";
import { ThemeProps } from "../../types";
import { useLoteria, useTema } from "../../hooks";

interface Props {
    theme: ThemeProps;
    numeroDoConcurso: number;
    dataPorExtenso: string;
};

function Data(props: Props) {
    return (
        <WrapperData theme={props.theme}>
            Concurso ${props.numeroDoConcurso} - ${props.dataPorExtenso}
        </WrapperData>
    );
};

export function DataMegasena() {
    const { megasena } = useLoteria();
    const { themeMegasena } = useTema();

    return (
        <Data numeroDoConcurso={megasena.numeroDoConcurso} dataPorExtenso={megasena.dataPorExtenso} theme={themeMegasena} />
    );
};

export function DataQuina() {
    const { quina } = useLoteria();
    const { themeQuina } = useTema();

    return (
        <Data numeroDoConcurso={quina.numeroDoConcurso} dataPorExtenso={quina.dataPorExtenso} theme={themeQuina} />
    );
};

export function DataTimemania() {
    const { timemania } = useLoteria();
    const { themeTimemania } = useTema();

    return (
        <Data numeroDoConcurso={timemania.numeroDoConcurso} dataPorExtenso={timemania.dataPorExtenso} theme={themeTimemania} />
    );
};

const WrapperData = styled.div`
    margin-top: 15px;
    color: ${(props) => props.theme.data};
    padding-left: 15px;
    font-size: 15px;
`;