import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './style2.css';
import axios from 'axios';

const PartnerForm = ({ cadastrarParceiro }) => {
  const [parceiroId, setParceiroId] = useState('');
  const [parceiroCnpj, setParceiroCnpj] = useState('');
  const [parceiroNome, setParceiroNome] = useState('');
  const [parceiroCidade, setParceiroCidade] = useState('');
  const [parceiroEstado, setParceiroEstado] = useState('');
  const [parceiroEmail, setParceiroEmail] = useState('');
  const [parceiroFixo, setParceiroFixo] = useState('');

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

  //Função que é chamada quando ocorre uma submissão, lidando com as informações recebidas.
  const handleSubmit = (e) => {
    e.preventDefault();
    cadastrarParceiro({
      parceiroId,
      parceiroCnpj,
      parceiroNome,
      parceiroCidade,
      parceiroEstado,
      parceiroEmail,
      parceiroFixo,
    });
    setParceiroId('');
    setParceiroCnpj('');
    setParceiroNome('');
    setParceiroCidade('');
    setParceiroEstado('');
    setParceiroEmail('');
    setParceiroFixo('');
  };

  const handleDelete = async () => {
    if (parceiroId) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/parceiros/${parceiroId}`);
        console.log('Parceiro excluído:', response.data);

        setParceiroId('');
        setParceiroCnpj('');
        setParceiroNome('');
        setParceiroCidade('');
        setParceiroEstado('');
        setParceiroEmail('');
        setParceiroFixo('');
      } catch (error) {
        console.error('Erro ao excluir Parceiro:', error.message);
      }
    } else {
      console.error('ID do Parceiro não fornecido');
    }
  };

  const handleUpdate = async () => {
    if (parceiroId) {
      try {
        const response = await axios.put(`http://localhost:3001/api/parceiros/${parceiroId}`, {
          parceiroCnpj,
          parceiroNome,
          parceiroCidade,
          parceiroEstado,
          parceiroEmail,
          parceiroFixo,
        });

        console.log('Parceiro atualizado:', response.data);

        setParceiroId('');
        setParceiroCnpj('');
        setParceiroNome('');
        setParceiroCidade('');
        setParceiroEstado('');
        setParceiroEmail('');
        setParceiroFixo('');
      } catch (error) {
        console.error('Erro ao atualizar Parceiro:', error.message);
      }
    } else {
      console.error('ID do Parceiro não fornecido');
    }
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            ID do Parceiro:
            <input type="number" value={parceiroId} onChange={(e) => setParceiroId(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Cnpj do Parceiro:
            <InputMask mask="99.999.999/9999-99" type="text" value={parceiroCnpj} onChange={(e) => setParceiroCnpj(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Nome do Parceiro:
            <input type="text" value={parceiroNome} onChange={(e) => onlyLetters(e, setParceiroNome)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Cidade do Parceiro:
            <input type="text" value={parceiroCidade} onChange={(e) => onlyLetters(e, setParceiroCidade)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Estado do Parceiro:
            <input type="text" maxLength="2" value={parceiroEstado} onChange={(e) => onlyLetters(e, setParceiroEstado)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Email do Parceiro:
            <input type="text" value={parceiroEmail} onChange={(e) => setParceiroEmail(e.target.value)} onKeyDown={noEnter}/>
          </label>
          <br />
          <label>
            Telefone Fixo do Parceiro:
            <InputMask mask="(99) 9999-9999" type="text" value={parceiroFixo} onChange={(e) => setParceiroFixo(e.target.value)} onKeyDown={noEnter}/>
          </label>
          <br />
          <button type="submit">Cadastrar Parceiro</button>
          <button type="button" onClick={handleDelete}>Excluir Parceiro</button>
          <button type="button" onClick={handleUpdate}>Atualizar Parceiro</button>
        </form>
      </div>
    </div>
  );
}

export default PartnerForm;
