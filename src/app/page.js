"use client";

import { useState } from 'react';
import ProductsForSaleList from './products';

export default function Home() {
  const [valor, setValor] = useState(0);

  function incrementar() {
    setValor(valor + 1);
  }

  return (
    <div>
      <h1>teste</h1>
      <p>Valor: {valor}</p>
      <button onClick={incrementar}>Contador</button>
      <ProductsForSaleList />
    </div>

  );
}
