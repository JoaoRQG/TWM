import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PassagemClienteView = () => {
  const [tickets, setTickets] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [onibuss, setOnibuss] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/ticket')
      .then(response => {
        setTickets(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter dados de passagem:', error);
      });

    axios.get('http://localhost:3001/api/clients')
      .then(response => {
        setClientes(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter dados de clientes:', error);
      });

    axios.get('http://localhost:3001/api/onibus')
      .then(response => {
        setOnibuss(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter dados de ônibus:', error);
      });
  }, []);

  const combinarDados = (tickets, clientes, onibuss) => {
    return tickets.map(ticket => {
      const cliente = clientes.find(cli => cli.clientId === ticket.ticketIdCliente);
      const onibus = onibuss.find(oni => oni.onibusId === ticket.ticketIdOnibus);
      return {
        ...ticket, ...cliente, ...onibus,
      };
    });
  };

  const dadosCombinados = combinarDados(tickets, clientes, onibuss);

  return (
    <div className="background-container">
      <div className="form-container">
        <forms>
          <table>
            <thead>
              <tr>  
                <th>ID Passagem</th>
                <th>Preço</th>
                <th>ID Cliente</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Email</th>
                <th>CEP</th>
                <th>Telefone Móvel</th>
                <th>ID Ônibus</th>
                <th>Placa</th>
                <th>Configuração</th>
              </tr>
            </thead>
            <tbody>
              {dadosCombinados.map(item => (
                <tr key={item.ticketId}>
                  <td>{item.ticketId}</td>
                  <td>{item.tickerPreco}</td>
                  <td>{item.clientId}</td>
                  <td>{item.clientNome}</td>
                  <td>{item.clientSobrenome}</td>
                  <td>{item.clientEmail}</td>
                  <td>{item.clientCep}</td>
                  <td>{item.clientMovel}</td>
                  <td>{item.onibusId}</td>
                  <td>{item.onibusPlaca}</td>
                  <td>{item.onibusConfiguracao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </forms>
      </div>
    </div>
  );
};

export default PassagemClienteView;
