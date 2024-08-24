import styled from "styled-components";
import trevoMegasena from "../../assets/trevo-megasena.png";
import trevoQuina from "../../assets/trevo-quina.png";
import trevoTimemania from "../../assets/trevo-timemania.png";
import { ThemeProps } from "../../types";
import { useTema } from "../../hooks";

interface Props {
    theme: ThemeProps;
    trevo: string;
    nomeLoteria: string;
};

function NomeLoteria(props: Props) {
    return (
        <WrapperNomeLoteria>
            <img src={props.trevo} alt="" />
            <WrapperNome theme={props.theme}>
                {props.nomeLoteria}
            </WrapperNome>
        </WrapperNomeLoteria>
    );
};

export function NomeLoteriaMegasena() {
    const { themeMegasena } = useTema();
    return (
        <NomeLoteria trevo={trevoMegasena} nomeLoteria="Mega-Sena" theme={themeMegasena} />
    );
};

export function NomeLoteriaQuina() {
    const { themeQuina } = useTema();
    return (
        <NomeLoteria trevo={trevoQuina} nomeLoteria="Quina" theme={themeQuina} />
    );
};

export function NomeLoteriaTimemania() {
    const { themeTimemania } = useTema();
    return (
        <NomeLoteria trevo={trevoTimemania} nomeLoteria="Timemania" theme={themeTimemania} />
    );
};

const WrapperNomeLoteria = styled.div`
    display: flex;
`;

const WrapperNome = styled.span`
    font-size: 28px;
    font-weight: bold;
    color: ${(props) => props.theme?.loteria};
    margin-left: 10px;
`;