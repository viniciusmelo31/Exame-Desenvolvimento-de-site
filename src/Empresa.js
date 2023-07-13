import React from 'react';
import './Empresa.css';

function Empresa() {
    return ( <
        div >
        <
        h2 > Sobre Nós < /h2> <
        p >
        Bem Vindo a Style Spot < br / >
        Na Style Spot, entendemos que cada pessoa é única e tem seu próprio estilo. É por isso que nos dedicamos a oferecer uma ampla seleção de roupas modernas e elegantes que atendem a todos os gostos e preferências. Seja você alguém que adora acompanhar as últimas tendências da moda ou prefere um visual mais clássico e atemporal, temos algo especial para você. <
                    /p> <
                    div className = "image-container" >
                    <
                    img src = "imagens/logotipo.png"
                alt = 'Logo-marca' / >
                <
                /div> <
                /div>
    );
}

export default Empresa;