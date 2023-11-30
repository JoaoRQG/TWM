import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './style2.css';
import axios from 'axios';

const TicketForm = ({ cadastrarPassagem }) => {
  const [ticketId, setTicketId] = useState('');
  const [ticketIdCliente, setTicketIdCliente] = useState('');
  const [ticketIdOnibus, seTicketIdOnibus] = useState('');
  const [ticketIdCidadeEmbarque, setTicketIdCidadeEmbarque] = useState('');
  const [ticketEnderecoEmbarque, setTicketEnderecoEmbarque] = useState('');
  const [ticketDataEmbarque, setTicketDataEmbarque] = useState('');
  const [ticketHoraEmbarque, setTicketHoraEmbarque] = useState('');
  const [ticketIdCidadeDesembarque, setTicketIdCidadeDesembarque] = useState('');
  const [ticketEnderecoDesembarque, setTicketEnderecoDesembarque] = useState('');
  const [ticketDataDesembarque, setTicketDataDesembarque] = useState('');
  const [ticketHoraDesembarque, setTicketHoraDesembarque] = useState('');
  const [tickerPreco, setTicketPreco] = useState('');

  //Função que não permite que o Enter envie as informações ao backend.
  const noEnter  = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  //Função que é chamada quando ocorre uma submissão, lidando com as informações recebidas.
  const handleSubmit = (e) => {
    e.preventDefault();
    cadastrarPassagem({
      ticketId,
      ticketIdCliente,
      ticketIdOnibus,
      ticketIdCidadeEmbarque,
      ticketEnderecoEmbarque,
      ticketDataEmbarque,
      ticketHoraEmbarque,
      ticketIdCidadeDesembarque,
      ticketEnderecoDesembarque,
      ticketDataDesembarque,
      ticketHoraDesembarque,
      tickerPreco,
    });
    setTicketId('');
    setTicketIdCliente('');
    seTicketIdOnibus('');
    setTicketIdCidadeEmbarque('');
    setTicketEnderecoEmbarque('');
    setTicketDataEmbarque('');
    setTicketHoraEmbarque('');
    setTicketIdCidadeDesembarque('');
    setTicketEnderecoDesembarque('');
    setTicketDataDesembarque('');
    setTicketHoraDesembarque('');
    setTicketPreco('');
  };

  const handleDelete = async () => {
    if (ticketId) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/ticket/${ticketId}`);
        console.log('Passagem excluída:', response.data);

        setTicketId('');
        setTicketIdCliente('');
        seTicketIdOnibus('');
        setTicketIdCidadeEmbarque('');
        setTicketEnderecoEmbarque('');
        setTicketDataEmbarque('');
        setTicketHoraEmbarque('');
        setTicketIdCidadeDesembarque('');
        setTicketEnderecoDesembarque('');
        setTicketDataDesembarque('');
        setTicketHoraDesembarque('');
        setTicketPreco('');
      } catch (error) {
        console.error('Erro ao excluir Passagem:', error.message);
      }
    } else {
      console.error('ID da Passagem não fornecido');
    }
  };

  const handleUpdate = async () => {
    if (ticketId) {
      try {
        const response = await axios.put(`http://localhost:3001/api/ticket/${ticketId}`, {
          ticketIdCliente,
          ticketIdOnibus,
          ticketIdCidadeEmbarque,
          ticketEnderecoEmbarque,
          ticketDataEmbarque,
          ticketHoraEmbarque,
          ticketIdCidadeDesembarque,
          ticketEnderecoDesembarque,
          ticketDataDesembarque,
          ticketHoraDesembarque,
          tickerPreco,
        });

        console.log('Passagem atualizada:', response.data);

        setTicketId('');
        setTicketIdCliente('');
        seTicketIdOnibus('');
        setTicketIdCidadeEmbarque('');
        setTicketEnderecoEmbarque('');
        setTicketDataEmbarque('');
        setTicketHoraEmbarque('');
        setTicketIdCidadeDesembarque('');
        setTicketEnderecoDesembarque('');
        setTicketDataDesembarque('');
        setTicketHoraDesembarque('');
        setTicketPreco('');
      } catch (error) {
        console.error('Erro ao atualizar Passagem:', error.message);
      }
    } else {
      console.error('ID da Passagem não fornecido');
    }
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            ID da Passagem:
            <input type="number" value={ticketId} onChange={(e) => setTicketId(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            ID do Cliente:
            <input type="number" value={ticketIdCliente} onChange={(e) => setTicketIdCliente(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            ID do Ônibus:
            <input type="number" value={ticketIdOnibus} onChange={(e) => seTicketIdOnibus(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            ID da Cidade Embarque:
            <input type="number" value={ticketIdCidadeEmbarque} onChange={(e) => setTicketIdCidadeEmbarque(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Endereço do Embarque:
            <input type="text" value={ticketEnderecoEmbarque} onChange={(e) => setTicketEnderecoEmbarque(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Data do Embarque:
            <InputMask mask="99/99/9999" type="text" value={ticketDataEmbarque} onChange={(e) => setTicketDataEmbarque(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Hora do Embarque:
            <InputMask mask="99:99" type="text" value={ticketHoraEmbarque} onChange={(e) => setTicketHoraEmbarque(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            ID da Cidade do Desembarque:
            <input type="number" value={ticketIdCidadeDesembarque} onChange={(e) => setTicketIdCidadeDesembarque(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Endereço do Desembarque:
            <input type="text" value={ticketEnderecoDesembarque} onChange={(e) => setTicketEnderecoDesembarque(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Data do Desembarque:
            <InputMask mask="99/99/9999" type="text" value={ticketDataDesembarque} onChange={(e) => setTicketDataDesembarque(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Hora do Desembarque:
            <InputMask mask="99:99" type="text" value={ticketHoraDesembarque} onChange={(e) => setTicketHoraDesembarque(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Preço da Passagem:
            <input type="text" value={tickerPreco} onChange={(e) => setTicketPreco(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <button type="submit">Cadastrar Passagem</button>
          <button type="button" onClick={handleDelete}>Excluir Passagem</button>
          <button type="button" onClick={handleUpdate}>Atualizar Passagem</button>
        </form>
      </div>
    </div>
  );
}

export default TicketForm;
