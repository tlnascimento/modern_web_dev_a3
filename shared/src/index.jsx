import React from 'react';

export const Button = ({ children, onClick }) => (
  <button onClick={onClick} style={{ padding: '10px', margin: '5px' }}>
    {children}
  </button>
);

export const Card = ({ children }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
    {children}
  </div>
);