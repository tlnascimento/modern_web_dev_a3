import React, { useState, useEffect } from 'react';
import { Card, Button } from 'shared';

function App() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const handleAddToCart = (event) => {
      setCarrinho(prev => [...prev, event.detail]);
    };

    window.addEventListener('add-to-cart', handleAddToCart);
    return () => window.removeEventListener('add-to-cart', handleAddToCart);
  }, []);

  return (
    <div>
      <h2>Carrinho</h2>
      {carrinho.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        carrinho.map((item, index) => (
          <Card key={index}>
            <h3>{item.nome}</h3>
            <p>R$ {item.preco}</p>
          </Card>
        ))
      )}
    </div>
  );
}

export default App;