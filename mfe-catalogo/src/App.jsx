import React from 'react';
import { Card, Button } from 'shared';

const produtos = [
  { id: 1, nome: 'Produto 1', preco: 10 },
  { id: 2, nome: 'Produto 2', preco: 20 }
];

function App() {
  const addToCart = (produto) => {
    window.dispatchEvent(
      new CustomEvent('add-to-cart', { detail: produto })
    );
  };

  return (
    <div>
      <h2>Catálogo</h2>
      {produtos.map(produto => (
        <Card key={produto.id}>
          <h3>{produto.nome}</h3>
          <p>R$ {produto.preco}</p>
          <Button onClick={() => addToCart(produto)}>Adicionar ao Carrinho</Button>
        </Card>
      ))}
    </div>
  );
}

export default App;