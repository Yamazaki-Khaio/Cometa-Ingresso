import React from 'react';

interface DadosEvento {
  evento: string;
  ingressosVendidos: number;
  totalArrecadado: number;
}

interface TabelaProps {
  dados: DadosEvento[];
}

const Tabela: React.FC<TabelaProps> = ({ dados }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Eventos</th>
          <th>Total de Ingressos Vendidos</th>
          <th>Total Arrecadado</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <tr key={index}>
            <td>{item.evento}</td>
            <td>{item.ingressosVendidos}</td>
            <td>{item.totalArrecadado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
