import styled from "styled-components";
import useLoteria from "../../hooks/useLoteria";
import { ThemeProps } from "../../types";
import { useTema } from "../../hooks";

interface Props {
    theme: ThemeProps;
    dezenas: string[];
};

function Resultado(props: Props) {
    return (
        <WrapperResultado>
            {
                props.dezenas.map(dezena =>
                    <WrapperBolas key={dezena} theme={props.theme}>
                        {dezena}
                    </WrapperBolas>
                )
            }
        </WrapperResultado>
    );
};

export function ResultadoMegasena() {
    const { megasena } = useLoteria();
    const { themeMegasena } = useTema();

    return (
        <Resultado dezenas={megasena.dezenas} theme={themeMegasena} />
    );
};

export function ResultadoQuina() {
    const { quina } = useLoteria();
    const { themeQuina } = useTema();
    return (
        <Resultado dezenas={quina.dezenas} theme={themeQuina} />
    );
};

export function ResultadoTimemania() {
    const { timemania } = useLoteria();
    const { themeTimemania } = useTema();

    return (
        <Resultado dezenas={timemania.dezenas} theme={themeTimemania} />
    );
};

const WrapperResultado = styled.div`
    display: flex;
`;

const WrapperBolas = styled.div`
    font-size: 18px;
    font-weight: bold;
    background-color: ${(props) => props.theme.bola};
    color: ${(props) => props.theme.bolafonte};
    border-radius: 25px;
    padding: 10px;
    margin: 0px 10px;
`;