import styled from "styled-components";
import { ThemeProps } from "../../types";
import { useLoteria, useTema } from "../../hooks";

interface Props {
    theme: ThemeProps;
    quantidadeGanhadores: number;
};

function Acumulou(props: Props) {
    return (
        <WrapperAcumulou theme={props.theme}>
            {
                props.quantidadeGanhadores === 0 ?
                    "ACUMULOU!" :
                    `${props.quantidadeGanhadores} GANHADORES`
            }
        </WrapperAcumulou>
    );
};

export function AcumulouMegasena() {
    const { megasena } = useLoteria();
    const { themeMegasena } = useTema();

    return (
        <Acumulou quantidadeGanhadores={megasena.quantidadeGanhadores} theme={themeMegasena} />
    );
};

export function AcumulouQuina() {
    const { quina } = useLoteria();
    const { themeQuina } = useTema();

    return (
        <Acumulou quantidadeGanhadores={quina.quantidadeGanhadores} theme={themeQuina} />
    );
};

export function AcumulouTimemania() {
    const { timemania } = useLoteria();
    const { themeTimemania } = useTema();

    return (
        <Acumulou quantidadeGanhadores={timemania.quantidadeGanhadores} theme={themeTimemania} />
    );
};

const WrapperAcumulou = styled.div`
    font-size: 28px;
    font-weight: bold;
    color: ${(props) => props.theme?.acumulou};
    margin-top: 15px;
    padding-left: 15px;
`;