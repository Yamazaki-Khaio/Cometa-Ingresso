import React from 'react';
import Tabela from './TabelaEvento';

const dados = [
  { evento: 'Evento 1', ingressosVendidos: 100, totalArrecadado: 5000 },
  { evento: 'Evento 2', ingressosVendidos: 150, totalArrecadado: 7500 },
  { evento: 'Evento 3', ingressosVendidos: 80, totalArrecadado: 4000 },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Tabela de Eventos</h1>
      <Tabela dados={dados} />
    </div>
  );
};

export default App;
