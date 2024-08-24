import { BrowserRouter } from "react-router-dom";
import { Menu } from "../components/Menu";
import Rotas from "../routes";

export default function Principal() {
    return (
        <BrowserRouter>
            <Menu />
            <Rotas />
        </BrowserRouter>
    );
}
