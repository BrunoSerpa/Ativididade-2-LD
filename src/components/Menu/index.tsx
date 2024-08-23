import styled from "styled-components";

export function Menu() {
    return (
        <WrapperMenu>
            <WrapperLink href="/timemania">Timemania</WrapperLink>
            <WrapperLink href="/megasena">Mega-sena</WrapperLink>
            <WrapperLink href="/quina">Quina</WrapperLink>
        </WrapperMenu>
    );
}

const WrapperMenu = styled.header`
    display: flex;
    gap: 15px;
    width: auto;
    font-weight: bold;
`;

const WrapperLink = styled.a`
    text-decoration: none;
    font-size: 18px;
    color: ${({ href }) => (window.location.pathname === href ? '#9f9f9f' : getLinkColor(href || "/timemania"))};
`;

const getLinkColor = (href: string) => {
    switch (href) {
        case '/timemania':
            return '#00ff48';
        case '/megasena':
            return '#260085';
        default:
            return '#209869';
    };
};