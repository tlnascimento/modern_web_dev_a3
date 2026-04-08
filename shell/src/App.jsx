import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from 'shared';

const Catalogo = React.lazy(() => import('catalogo/App'));
const Carrinho = React.lazy(() => import('carrinho/App'));
const Checkout = React.lazy(() => import('checkout/App'));

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/"><Button>Home</Button></Link>
          <Link to="/catalogo"><Button>Catálogo</Button></Link>
          <Link to="/carrinho"><Button>Carrinho</Button></Link>
          <Link to="/checkout"><Button>Checkout</Button></Link>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<h1>Bem-vindo ao Portal de E-commerce</h1>} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;