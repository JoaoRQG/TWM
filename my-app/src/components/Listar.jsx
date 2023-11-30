import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style2.css';

const Listar = ({  }) => {
  const [source, setSource] = useState('cities'); 
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url;
        if (source === 'cities') {
          url = 'http://localhost:3001/api/cities';
        } else if (source === 'clients') {
          url = 'http://localhost:3001/api/clients';
        } else if (source === 'department') {
            url = 'http://localhost:3001/api/department';
        } else if (source === 'funcionarios') {
            url = 'http://localhost:3001/api/funcionarios';
        } else if (source === 'onibus') {
            url = 'http://localhost:3001/api/onibus';
        } else if (source === 'parceiros') {
            url = 'http://localhost:3001/api/parceiros';
        } else if (source === 'ticket') {
            url = 'http://localhost:3001/api/ticket';
        }
 
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [source]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //Dentro do return temos uma tabela que vai mostrar todos as informações do backend quando clicar no botão respectivo, sendo que os preenchimentos da tabela são feito com lógica
  //if else para dar o nome da coluna e também pegar o valor do backend.
  return (
    <div className="background-container">
      <div className="form-container">
        <div>
          <button className="button-container" onClick={() => setSource('cities')}>Listar Cidades</button>
          <button className="button-container" onClick={() => setSource('clients')}>Listar Clientes</button>
          <button className="button-container" onClick={() => setSource('department')}>Listar Departamentos</button>
          <button className="button-container" onClick={() => setSource('funcionarios')}>Listar Funcionários</button>
          <button className="button-container" onClick={() => setSource('onibus')}>Listar Ônibus</button>
          <button className="button-container" onClick={() => setSource('parceiros')}>Listar Parceiros</button>
          <button className="button-container" onClick={() => setSource('ticket')}>Listar Passagens</button>
        </div>
          <table onSubmit={handleSubmit}>
            <thead>
              <tr>
                <th>
                    {source === 'cities' 
                        ? 'ID' 
                        : source === 'clients' 
                        ? 'ID' 
                        : source === 'department'
                        ? 'ID'
                        : source === 'funcionarios'
                        ? 'ID'
                        : source === 'onibus'
                        ? 'ID'
                        : source === 'parceiros'
                        ? 'ID'
                        : 'ID' }
                </th>
                <th>
                    {source === 'cities' 
                        ? 'Nome' 
                        : source === 'clients' 
                        ? 'Cpf' 
                        : source === 'department'
                        ? 'Nome'
                        : source === 'funcionarios'
                        ? 'Nome'
                        : source === 'onibus'
                        ? 'ID Parceiro'
                        : source === 'parceiros'
                        ? 'Cnpj'
                        : 'ID Cliente' }
                </th>
                <th>
                    {source === 'cities' 
                        ? 'Estado' 
                        : source === 'clients' 
                        ? 'Nome' 
                        : source === 'department'
                        ? 'Email'
                        : source === 'funcionarios'
                        ? 'Sobrenome'
                        : source === 'onibus'
                        ? 'Placa'
                        : source === 'parceiros'
                        ? 'Nome'
                        : 'ID Ônibus' }
                </th>
                <th>
                    {source === 'cities' 
                        ? '' 
                        : source === 'clients' 
                        ? 'Sobrenome' 
                        : source === 'department'
                        ? 'Tel. Fixo'
                        : source === 'funcionarios'
                        ? 'ID Gerente'
                        : source === 'onibus'
                        ? 'Modelo'
                        : source === 'parceiros'
                        ? 'Cidade'
                        : 'ID Emb.' }
                </th>
                <th>
                    {source === 'cities' 
                        ? '' 
                        : source === 'clients' 
                        ? 'Data Nasc.' 
                        : source === 'department'
                        ? ''
                        : source === 'funcionarios'
                        ? 'ID Depart.'
                        : source === 'onibus'
                        ? 'Configuração'
                        : source === 'parceiros'
                        ? 'Estado'
                        : 'End. Emb.' }
                </th>
                <th>
                    {source === 'cities' 
                        ? '' 
                        : source === 'clients' 
                        ? 'Email' 
                        : source === 'department'
                        ? ''
                        : source === 'funcionarios'
                        ? 'Data Nasc.'
                        : source === 'onibus'
                        ? 'Ano'
                        : source === 'parceiros'
                        ? 'Email'
                        : 'Data Emb.' }
                </th>
                <th>
                    {source === 'cities' 
                        ? '' 
                        : source === 'clients' 
                        ? 'Endereço' 
                        : source === 'department'
                        ? ''
                        : source === 'funcionarios'
                        ? 'Salário'
                        : source === 'onibus'
                        ? 'Capacidade'
                        : source === 'parceiros'
                        ? 'Tel. Fixo'
                        : 'Hora Emb.' }
                </th>
                <th>
                    {source === 'cities' 
                        ? '' 
                        : source === 'clients' 
                        ? 'Número' 
                        : source === 'department'
                        ? ''
                        : source === 'funcionarios'
                        ? 'Cargo'
                        : source === 'onibus'
                        ? 'Licença'
                        : source === 'parceiros'
                        ? ''
                        : 'ID Cidade Des.' }
                </th>
                <th>
                    {source === 'cities' 
                        ? '' 
                        : source === 'clients' 
                        ? 'Compl.' 
                        : source === 'department'
                        ? ''
                        : source === 'funcionarios'
                        ? 'Email'
                        : source === 'onibus'
                        ? ''
                        : source === 'parceiros'
                        ? ''
                        : 'End. Des.' }
                </th>
                <th>
                    {source === 'cities' 
                        ? '' 
                        : source === 'clients' 
                        ? 'Cep' 
                        : source === 'department'
                        ? ''
                        : source === 'funcionarios'
                        ? 'Tel. Fixo'
                        : source === 'onibus'
                        ? ''
                        : source === 'parceiros'
                        ? ''
                        : 'Data Des.' }
                </th>
                <th>
                    {source === 'cities' 
                        ? '' 
                        : source === 'clients' 
                        ? 'Cidade' 
                        : source === 'department'
                        ? ''
                        : source === 'funcionarios'
                        ? 'Tel. Móvel'
                        : source === 'onibus'
                        ? ''
                        : source === 'parceiros'
                        ? ''
                        : 'Hora Des.' }
                </th>
                <th>
                    {source === 'cities' 
                        ? '' 
                        : source === 'clients' 
                        ? 'Estado' 
                        : source === 'department'
                        ? ''
                        : source === 'funcionarios'
                        ? ''
                        : source === 'onibus'
                        ? ''
                        : source === 'parceiros'
                        ? ''
                        : 'Preço' }
                </th>
                <th>
                    {source === 'cities' 
                        ? '' 
                        : source === 'clients' 
                        ? 'Tel. Fixo' 
                        : source === 'department'
                        ? ''
                        : source === 'funcionarios'
                        ? ''
                        : source === 'onibus'
                        ? ''
                        : source === 'parceiros'
                        ? ''
                        : '' }
                </th>
                <th>
                    {source === 'cities' 
                        ? '' 
                        : source === 'clients' 
                        ? 'Tel. Móvel' 
                        : source === 'department'
                        ? ''
                        : source === 'funcionarios'
                        ? ''
                        : source === 'onibus'
                        ? ''
                        : source === 'parceiros'
                        ? ''
                        : '' }
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                    <td>
                        {source === 'cities' 
                            ? item.cityId 
                            : source === 'clients' 
                            ? item.clientId 
                            : source === 'department'
                            ? item.departamentId
                            : source === 'funcionarios'
                            ? item.funcionarioId
                            : source === 'onibus'
                            ? item.onibusId
                            : source === 'parceiros'
                            ? item.parceiroId
                            : item.ticketId }
                    </td>
                    <td>
                        {source === 'cities' 
                            ? item.cityName 
                            : source === 'clients' 
                            ? item.clientCpf
                            : source === 'department'
                            ? item.departamentNome
                            : source === 'funcionarios'
                            ? item.funcionarioNome
                            : source === 'onibus'
                            ? item.onibusIdParceiro
                            : source === 'parceiros'
                            ? item.parceiroCnpj
                            : item.ticketIdCliente }
                    </td>
                    <td>
                        {source === 'cities' 
                            ? item.state 
                            : source === 'clients' 
                            ? item.clientNome
                            : source === 'department'
                            ? item.departamentEmail
                            : source === 'funcionarios'
                            ? item.funcionarioSobrenome
                            : source === 'onibus'
                            ? item.onibusPlaca
                            : source === 'parceiros'
                            ? item.parceiroNome
                            : item.ticketIdOnibus }
                    </td>
                    <td>
                        {source === 'cities' 
                            ? '' 
                            : source === 'clients' 
                            ? item.clientSobrenome 
                            : source === 'department'
                            ? item.departamentFixo
                            : source === 'funcionarios'
                            ? item.funcionarioIdGerente
                            : source === 'onibus'
                            ? item.onibusModelo
                            : source === 'parceiros'
                            ? item.parceiroCidade
                            : item.ticketIdCidadeEmbarque }
                    </td>
                    <td>
                        {source === 'cities' 
                            ? '' 
                            : source === 'clients' 
                            ? item.clientNascimento
                            : source === 'department'
                            ? ''
                            : source === 'funcionarios'
                            ? item.funcionarioIdDepartamento
                            : source === 'onibus'
                            ? item.onibusConfiguracao
                            : source === 'parceiros'
                            ? item.parceiroEstado
                            : item.ticketEnderecoEmbarque }
                    </td>
                    <td>
                        {source === 'cities' 
                            ? '' 
                            : source === 'clients' 
                            ? item.clientEmail 
                            : source === 'department'
                            ? ''
                            : source === 'funcionarios'
                            ? item.funcionarioNascimento
                            : source === 'onibus'
                            ? item.onibusAno
                            : source === 'parceiros'
                            ? item.parceiroEmail
                            : item.ticketDataEmbarque }
                    </td>
                    <td>
                        {source === 'cities' 
                            ? '' 
                            : source === 'clients' 
                            ? item.clientEndereco 
                            : source === 'department'
                            ? ''
                            : source === 'funcionarios'
                            ? item.funcionarioSalario
                            : source === 'onibus'
                            ? item.onibusCapacidade
                            : source === 'parceiros'
                            ? item.parceiroFixo
                            : item.ticketHoraEmbarque }
                    </td>
                    <td>
                        {source === 'cities' 
                            ? '' 
                            : source === 'clients' 
                            ? item.clientNumero
                            : source === 'department'
                            ? ''
                            : source === 'funcionarios'
                            ? item.funcionarioCargo
                            : source === 'onibus'
                            ? item.onibusLicenca
                            : source === 'parceiros'
                            ? ''
                            : item.ticketIdCidadeDesembarque }
                    </td>
                    <td>
                        {source === 'cities' 
                            ? '' 
                            : source === 'clients' 
                            ? item.clientComplemento
                            : source === 'department'
                            ? ''
                            : source === 'funcionarios'
                            ? item.funcionarioEmail
                            : source === 'onibus'
                            ? ''
                            : source === 'parceiros'
                            ? ''
                            : item.ticketEnderecoDesembarque }
                    </td>
                    <td>
                        {source === 'cities' 
                            ? '' 
                            : source === 'clients' 
                            ? item.clientCep
                            : source === 'department'
                            ? ''
                            : source === 'funcionarios'
                            ? item.funcionarioFixo
                            : source === 'onibus'
                            ? ''
                            : source === 'parceiros'
                            ? ''
                            : item.ticketDataDesembarque }
                    </td>
                    <td>
                        {source === 'cities' 
                            ? '' 
                            : source === 'clients' 
                            ? item.clientCidade
                            : source === 'department'
                            ? ''
                            : source === 'funcionarios'
                            ? item.funcionarioMovel
                            : source === 'onibus'
                            ? ''
                            : source === 'parceiros'
                            ? ''
                            : item.ticketHoraDesembarque }
                    </td>
                    <td>
                        {source === 'cities' 
                            ? '' 
                            : source === 'clients' 
                            ? item.clientEstado
                            : source === 'department'
                            ? ''
                            : source === 'funcionarios'
                            ? ''
                            : source === 'onibus'
                            ? ''
                            : source === 'parceiros'
                            ? ''
                            : item.tickerPreco }
                    </td>
                    <td>
                        {source === 'cities' 
                            ? '' 
                            : source === 'clients' 
                            ? item.clientFixo 
                            : source === 'department'
                            ? ''
                            : source === 'funcionarios'
                            ? ''
                            : source === 'onibus'
                            ? ''
                            : source === 'parceiros'
                            ? ''
                            : '' }
                    </td>
                    <td>
                        {source === 'cities' 
                            ? '' 
                            : source === 'clients' 
                            ? item.clientMovel 
                            : source === 'department'
                            ? ''
                            : source === 'funcionarios'
                            ? ''
                            : source === 'onibus'
                            ? ''
                            : source === 'parceiros'
                            ? ''
                            : '' }
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default Listar;
