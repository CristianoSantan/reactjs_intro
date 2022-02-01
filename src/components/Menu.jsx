import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav>
            <Link to="/">home</Link><br/>
            <Link to="/Produtos">Produtos</Link><br/>
            <Link to="/Lojas">Lojas</Link><br/>
            <Link to="/Contato">Contato</Link>
        </nav>
    );
}
