import React, { useState } from 'react';
import { Card, Button } from 'shared';

function App() {
  const [endereco, setEndereco] = useState('');

  const finalizar = () => {
    alert(`Pedido finalizado para o endereço: ${endereco}`);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <Card>
        <label>Endereço:</label>
        <input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <Button onClick={finalizar}>Finalizar Pedido</Button>
      </Card>
    </div>
  );
}

export default App;