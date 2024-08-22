import { Link } from "react-router-dom";
import styled from "styled-components";

export function Menu(){
    return(
        <header>
            <Link to="/timemania">Timemania</Link>
            <Link to="/megasena">Mega-sena</Link>
            <Link to="/quina">Quina</Link>
        </header>
    )
}