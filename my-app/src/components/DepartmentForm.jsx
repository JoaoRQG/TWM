import React, { useState } from 'react';
import './style2.css';
import InputMask from 'react-input-mask';
import axios from 'axios';

const DepartmentForm = ({ cadastrarDepartamento }) => {
  const [departamentId, setDepartamentId] = useState('');
  const [departamentNome, setDepartamentNome] = useState('');
  const [departamentEmail, setDepartamentEmail] = useState('');
  const [departamentFixo, setDepartamentFixo] = useState('');
  
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
    cadastrarDepartamento({
      departamentId,
      departamentNome,
      departamentEmail,
      departamentFixo,
    });
    setDepartamentId('');
    setDepartamentNome('');
    setDepartamentEmail('');
    setDepartamentFixo('');
  };

  const handleDelete = async () => {
    if (departamentId) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/department/${departamentId}`);
        console.log('Departamento excluído:', response.data);

        setDepartamentId('');
        setDepartamentNome('');
        setDepartamentEmail('');
        setDepartamentFixo('');
      } catch (error) {
        console.error('Erro ao excluir Departamento:', error.message);
      }
    } else {
      console.error('ID do Departamento não fornecido');
    }
  };

  const handleUpdate = async () => {
    if (departamentId) {
      try {
        const response = await axios.put(`http://localhost:3001/api/department/${departamentId}`, {
          departamentNome,
          departamentEmail,
          departamentFixo,
        });

        console.log('Departamento atualizado:', response.data);

        setDepartamentId('');
        setDepartamentNome('');
        setDepartamentEmail('');
        setDepartamentFixo('');
      } catch (error) {
        console.error('Erro ao atualizar Departamento:', error.message);
      }
    } else {
      console.error('ID do Departamento não fornecido');
    }
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            ID do Departamento:
            <input type="number" value={departamentId} onChange={(e) => setDepartamentId(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Nome do Departamento:
            <input type="text" value={departamentNome} onChange={(e) => onlyLetters(e, setDepartamentNome)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Email do Departamento:
            <input type="text" value={departamentEmail} onChange={(e) => setDepartamentEmail(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Telefone Fixo do Departamento:
            <InputMask mask="(99) 9999-9999" type="text" value={departamentFixo} onChange={(e) => setDepartamentFixo(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <button type="submit">Cadastrar Departamento</button>
          <button type="button" onClick={handleDelete}>Excluir Departamento</button>
          <button type="button" onClick={handleUpdate}>Atualizar Departamento</button>
        </form>
      </div>
    </div>
  );
}

export default DepartmentForm;
