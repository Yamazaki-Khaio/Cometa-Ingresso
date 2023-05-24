import React from 'react';
import Tabela from './TabelaEvento';

const dados = [
  { evento: 'Sandy e Júnior: o retorno Pleno', ingressosVendidos: 52, totalArrecadado: 200000.00 },
  { evento: 'Patati Patatá Show do ano', ingressosVendidos: 157, totalArrecadado: 801200.00 },
  { evento: 'Zeca Pagodinho as melhores', ingressosVendidos: 80, totalArrecadado: 701000.00 },
  { evento: 'Bruno e Marrone as antigas', ingressosVendidos: 71, totalArrecadado: 502000.00 },
  { evento: 'O circo 07 anões', ingressosVendidos: 171, totalArrecadado: 902000.00 },
];

const App: React.FC = () => {
  return (
    <div >
      <div className="mt-4 p-4">
        <h1 className="text-2xl font-bold">Relatório de Eventos</h1>
      </div>
      <div className="p-4 bg-white-100 rounded-lg shadow-xl">
        <h3 className="text-xl font-semibold mt-4">Tabela de Eventos</h3>
        <Tabela dados={dados} />
      </div>
    </div>
  );
};

export default App;
