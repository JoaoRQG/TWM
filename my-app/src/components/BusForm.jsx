import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './style2.css';
import axios from 'axios';

const BusForm = ({ cadastrarOnibus }) => {
  const [onibusId, setOnibusId] = useState('');
  const [onibusIdParceiro, setOnibusIdParceiro] = useState('');
  const [onibusPlaca, setOnibusPlaca] = useState('');
  const [onibusModelo, setOnibusModelo] = useState('');
  const [onibusConfiguracao, setOnibusConfiguracao] = useState('');
  const [onibusAno, setOnibusAno] = useState('');
  const [onibusCapacidade, setOnibusCapacidade] = useState('');
  const [onibusLicenca, setOnibusLicenca] = useState('');

  //Função que limita somente letras a caixa de texto.
  const onlyLetters = (e, setterFunction) => {
    const inputValue = e.target.value;
    const onlyLettersValue = inputValue.replace(/[^\na-zA-ZÀ-ÖØ-öø-ÿ\s]/g, '').replace(/[\n\r]/g, '');

    setterFunction(onlyLettersValue);
  };

  //Função que não permite que o Enter envie as informações ao backend.
  const noEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  //Função que é chamada quando ocorre uma submissão, lidando com as informações recebidas.
  const handleSubmit = (e) => {
    e.preventDefault();
    cadastrarOnibus({
      onibusId,
      onibusIdParceiro,
      onibusPlaca,
      onibusModelo,
      onibusConfiguracao,
      onibusAno,
      onibusCapacidade,
      onibusLicenca,
    });
    setOnibusId('');
    setOnibusIdParceiro('');
    setOnibusPlaca('');
    setOnibusModelo('');
    setOnibusConfiguracao('');
    setOnibusAno('');
    setOnibusCapacidade('');
    setOnibusLicenca('');
  };

  const handleDelete = async () => {
    if (onibusId) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/onibus/${onibusId}`);
        console.log('Ônibus excluído:', response.data);

        setOnibusId('');
        setOnibusIdParceiro('');
        setOnibusPlaca('');
        setOnibusModelo('');
        setOnibusConfiguracao('');
        setOnibusAno('');
        setOnibusCapacidade('');
        setOnibusLicenca('');
      } catch (error) {
        console.error('Erro ao excluir Ônibus:', error.message);
      }
    } else {
      console.error('ID do Ônibus não fornecido');
    }
  };

  const handleUpdate = async () => {
    if (onibusId) {
      try {
        const response = await axios.put(`http://localhost:3001/api/onibus/${onibusId}`, {
          onibusIdParceiro,
          onibusPlaca,
          onibusModelo,
          onibusConfiguracao,
          onibusAno,
          onibusCapacidade,
          onibusLicenca,
        });

        console.log('Ônibus atualizado:', response.data);

        setOnibusId('');
        setOnibusIdParceiro('');
        setOnibusPlaca('');
        setOnibusModelo('');
        setOnibusConfiguracao('');
        setOnibusAno('');
        setOnibusCapacidade('');
        setOnibusLicenca('');
      } catch (error) {
        console.error('Erro ao atualizar Ônibus:', error.message);
      }
    } else {
      console.error('ID do Ônibus não fornecido');
    }
  };


  return (
    <div className="background-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            ID do Ônibus:
            <input type="number" value={onibusId} onChange={(e) => setOnibusId(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            ID do Parceiro:
            <input type="number" value={onibusIdParceiro} onChange={(e) => setOnibusIdParceiro(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Placa:
            <InputMask mask="aaa-9999" type="text" value={onibusPlaca} onChange={(e) => setOnibusPlaca(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Modelo:
            <input type="text" value={onibusModelo} onChange={(e) => onlyLetters(e, setOnibusModelo)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Configuração:
            <input type="text" value={onibusConfiguracao} onChange={(e) => onlyLetters(e, setOnibusConfiguracao)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Ano:
            <input type="number"  value={onibusAno} onChange={(e) => setOnibusAno(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Capacidade:
            <input type="number" value={onibusCapacidade} onChange={(e) => setOnibusCapacidade(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Licença:
            <input type="text" value={onibusLicenca} onChange={(e) => onlyLetters(e, setOnibusLicenca)} onKeyDown={noEnter} />
          </label>
          <br />
          <button type="submit">Cadastrar Ônibus</button>
          <button type="button" onClick={handleDelete}>Excluir Ônibus</button>
          <button type="button" onClick={handleUpdate}>Atualizar Ônibus</button>
        </form>
      </div>
    </div>
  );
}

export default BusForm;
