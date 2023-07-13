import React from 'react';
import './Produto.css';

function Produto() {
    // Array de objetos representando produtos de café
    const produtosCafe = [
        { id: 1, nome: 'Long Size', preco: 109,99, imagem: 'imagens/longsize.jpg' },
        { id: 2, nome: 'Camisa vermelha', preco: 100.00, imagem: 'imagens/vermelha.jpg' },
        { id: 3, nome: 'Camisa azul', preco: 89,90, imagem: 'imagens/camisa-azul.jpg' },
        { id: 4, nome: 'Camisa verde', preco: 90.99, imagem: 'imagens/camisavered.jpeg' },
        { id: 5, nome: 'Camisa amarela', preco: 79.89, imagem: 'imagens/amarela.jpg' },
        { id: 6, nome: 'Camisa roxa', preco: 69.99, imagem: 'imagens/roxa.png' },
        
    ];

    return ( <
        div className = "produto-container" >
        <
        h2 className = 'titulo' > Produtos < /h2> <
        ul className = "produto-lista" > { /* Mapeia o array de produtos e renderiza um item para cada produto */ } {
            produtosCafe.map((produto) => ( <
                li key = { produto.id }
                className = "produto-item" >
                <
                img src = { produto.imagem }
                alt = { produto.nome }
                /> <
                div >
                <
                h3 > { produto.nome } < /h3> { produto.preco ? < p > Preço : R$ { produto.preco } < /p>:<p></p > } <
                /div> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
}

export default Produto;