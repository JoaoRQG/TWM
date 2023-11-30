import React, { useState } from 'react';
import './style2.css';
import InputMask from 'react-input-mask';
import axios from 'axios';

const ClientForm = ({ cadastrarCliente }) => {
  const [clientId, setClientId] = useState('');
  const [clientCpf, setClientCpf] = useState('');
  const [clientNome, setClientNome] = useState('');
  const [clientSobrenome, setClientSobrenome] = useState('');
  const [clientNascimento, setClientNascimento] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientEndereco, setClientEndereco] = useState('');
  const [clientNumero, setClientNumero] = useState('');
  const [clientComplemento, setClientComplemento] = useState('');
  const [clientCep, setClientCep] = useState('');
  const [clientCidade, setClientCidade] = useState('');
  const [clientEstado, setClientEstado] = useState('');
  const [clientFixo, setClientFixo] = useState('');
  const [clientMovel, setClientMovel] = useState('');

  //Função que limita somente letras a caixa de texto.
  const onlyLetters = (e, setterFunction) => {
    const inputValue = e.target.value;
    const onlyLettersValue = inputValue.replace(/[^\na-zA-ZÀ-ÖØ-öø-ÿ\s]/g, '').replace(/[\n\r]/g, '');

    setterFunction(onlyLettersValue);
  };

  //Função que não permite que o Enter envie as informações ao backend.
  const noEnter  = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  //Função que busca o CEP usando o endereço viacep.com e completa os dados que faltam no formulário que ele fornece.
  const buscarEnderecoPorCep = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${clientCep}/json/`);
      const { logradouro, complemento, localidade, uf } = response.data;
      setClientEndereco(logradouro);
      setClientComplemento(complemento);
      setClientCidade(localidade);
      setClientEstado(uf);
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
    }
  };

  //Função que é chamada quando ocorre uma submissão, lidando com as informações recebidas.
  const handleSubmit = (e) => {
    e.preventDefault();
    buscarEnderecoPorCep();
    cadastrarCliente({
      clientId,
      clientCpf,
      clientNome,
      clientSobrenome,
      clientNascimento,
      clientEmail,
      clientEndereco,
      clientNumero,
      clientComplemento,
      clientCep,
      clientCidade,
      clientEstado,
      clientFixo,
      clientMovel,
    });
    setClientId('');
    setClientCpf('');
    setClientNome('');
    setClientSobrenome('');
    setClientNascimento('');
    setClientEmail('');
    setClientEndereco('');
    setClientNumero('');
    setClientComplemento('');
    setClientCep('');
    setClientCidade('');
    setClientEstado('');
    setClientFixo('');
    setClientMovel('');
  };

  const handleDelete = async () => {
    if (clientId) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/clients/${clientId}`);
        console.log('Cliente excluído:', response.data);

        setClientId('');
        setClientCpf('');
        setClientNome('');
        setClientSobrenome('');
        setClientNascimento('');
        setClientEmail('');
        setClientEndereco('');
        setClientNumero('');
        setClientComplemento('');
        setClientCep('');
        setClientCidade('');
        setClientEstado('');
        setClientFixo('');
        setClientMovel('');
      } catch (error) {
        console.error('Erro ao excluir Cliente:', error.message);
      }
    } else {
      console.error('ID do Cliente não fornecido');
    }
  };

  const handleUpdate = async () => {
    if (clientId) {
      try {
        const response = await axios.put(`http://localhost:3001/api/clients/${clientId}`, {
          clientCpf,
          clientNome,
          clientSobrenome,
          clientNascimento,
          clientEmail,
          clientEndereco,
          clientNumero,
          clientComplemento,
          clientCep,
          clientCidade,
          clientEstado,
          clientFixo,
          clientMovel,
        });

        console.log('Cliente atualizado:', response.data);

        setClientId('');
        setClientCpf('');
        setClientNome('');
        setClientSobrenome('');
        setClientNascimento('');
        setClientEmail('');
        setClientEndereco('');
        setClientNumero('');
        setClientComplemento('');
        setClientCep('');
        setClientCidade('');
        setClientEstado('');
        setClientFixo('');
        setClientMovel('');
      } catch (error) {
        console.error('Erro ao atualizar Cliente:', error.message);
      }
    } else {
      console.error('ID do Cliente não fornecido');
    }
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            ID do Cliente:
            <input type="number" value={clientId} onChange={(e) => setClientId(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Cpf:
            <InputMask mask="999.999.999-99" type="text" value={clientCpf} onChange={(e) => setClientCpf(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Nome:
            <input type="text" value={clientNome} onChange={(e) => onlyLetters(e, setClientNome)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Sobrenome:
            <input type="text" value={clientSobrenome} onChange={(e) => onlyLetters(e, setClientSobrenome)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Data de Nascimento:
            <InputMask mask="99/99/9999" type="text" value={clientNascimento} onChange={(e) => setClientNascimento(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Email:
            <input type="text" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Endereço:
            <input type="text" value={clientEndereco} onChange={(e) => onlyLetters(e, setClientEndereco)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Número:
            <input type="number" value={clientNumero} onChange={(e) => setClientNumero(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Complemento:
            <input type="text" value={clientComplemento} onChange={(e) => setClientComplemento(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Cep:
            <InputMask mask="99999-999" type="text" value={clientCep} onChange={(e) => setClientCep(e.target.value)} onBlur={buscarEnderecoPorCep} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Cidade:
            <input type="text" value={clientCidade} onChange={(e) => onlyLetters(e, setClientCidade)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Estado:
            <input type="text" maxLength="2" value={clientEstado} onChange={(e) => onlyLetters(e, setClientEstado)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Telefone Fixo:
            <InputMask mask="(99) 9999-9999"  type="text" value={clientFixo} onChange={(e) => setClientFixo(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Telefone Móvel:
            <InputMask mask="(99) 99999-9999" type="text" value={clientMovel} onChange={(e) => setClientMovel(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <button type="submit">Cadastrar Cliente</button>
          <button type="button" onClick={handleDelete}>Excluir Cliente</button>
          <button type="button" onClick={handleUpdate}>Atualizar Cliente</button>
        </form>
      </div>
    </div>
  );
}

export default ClientForm;
