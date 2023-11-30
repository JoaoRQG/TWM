import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './style2.css';
import axios from 'axios';

const EmployeeForm = ({ cadastrarFuncionario }) => {
  const [funcionarioId, setFuncionarioId] = useState('');
  const [funcionarioNome, setFuncionarioNome] = useState('');
  const [funcionarioSobrenome, setFuncionarioSobrenome] = useState('');
  const [funcionarioIdGerente, setFuncionarioIdGerente] = useState('');
  const [funcionarioIdDepartamento, setFuncionarioIdDepartamento] = useState('');
  const [funcionarioNascimento, setFuncionarioNascimento] = useState('');
  const [funcionarioSalario, setFuncionarioSalario] = useState('');
  const [funcionarioCargo, setFuncionarioCargo] = useState('');
  const [funcionarioEmail, setFuncionarioEmail] = useState('');
  const [funcionarioFixo, setFuncionarioFixo] = useState('');
  const [funcionarioMovel, setFuncionarioMovel] = useState('');

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
    cadastrarFuncionario({
      funcionarioId,
      funcionarioNome,
      funcionarioSobrenome,
      funcionarioIdGerente,
      funcionarioIdDepartamento,
      funcionarioNascimento,
      funcionarioSalario,
      funcionarioCargo,
      funcionarioEmail,
      funcionarioFixo,
      funcionarioMovel,
    });
    setFuncionarioId('');
    setFuncionarioNome('');
    setFuncionarioSobrenome('');
    setFuncionarioIdGerente('');
    setFuncionarioIdDepartamento('');
    setFuncionarioNascimento('');
    setFuncionarioSalario('');
    setFuncionarioCargo('');
    setFuncionarioEmail('');
    setFuncionarioFixo('');
    setFuncionarioMovel('');
  };

  const handleDelete = async () => {
    if (funcionarioId) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/funcionarios/${funcionarioId}`);
        console.log('Funcionário excluído:', response.data);

        setFuncionarioId('');
        setFuncionarioNome('');
        setFuncionarioSobrenome('');
        setFuncionarioIdGerente('');
        setFuncionarioIdDepartamento('');
        setFuncionarioNascimento('');
        setFuncionarioSalario('');
        setFuncionarioCargo('');
        setFuncionarioEmail('');
        setFuncionarioFixo('');
        setFuncionarioMovel('');
      } catch (error) {
        console.error('Erro ao excluir funcionário:', error.message);
      }
    } else {
      console.error('ID do funcionário não fornecido');
    }
  };

  const handleUpdate = async () => {
    if (funcionarioId) {
      try {
        const response = await axios.put(`http://localhost:3001/api/funcionarios/${funcionarioId}`, {
          funcionarioNome,
          funcionarioSobrenome,
          funcionarioIdGerente,
          funcionarioIdDepartamento,
          funcionarioNascimento,
          funcionarioSalario,
          funcionarioCargo,
          funcionarioEmail,
          funcionarioFixo,
          funcionarioMovel,
        });

        console.log('Funcionário atualizado:', response.data);

        setFuncionarioId('');
        setFuncionarioNome('');
        setFuncionarioSobrenome('');
        setFuncionarioIdGerente('');
        setFuncionarioIdDepartamento('');
        setFuncionarioNascimento('');
        setFuncionarioSalario('');
        setFuncionarioCargo('');
        setFuncionarioEmail('');
        setFuncionarioFixo('');
        setFuncionarioMovel('');
      } catch (error) {
        console.error('Erro ao atualizar Funcionário:', error.message);
      }
    } else {
      console.error('ID do Funcionário não fornecido');
    }
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            ID do Funcionário:
            <input type="number" value={funcionarioId} onChange={(e) => setFuncionarioId(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Nome do Funcionário:
            <input type="text" value={funcionarioNome} onChange={(e) => onlyLetters(e, setFuncionarioNome)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Sobrenome do Funcionário:
            <input type="text" value={funcionarioSobrenome} onChange={(e) => onlyLetters(e, setFuncionarioSobrenome)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            ID de Gerente:
            <input type="number" value={funcionarioIdGerente} onChange={(e) => setFuncionarioIdGerente(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            ID do Departamento do Funcionário:
            <input type="number" value={funcionarioIdDepartamento} onChange={(e) => setFuncionarioIdDepartamento(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Data de Nascimento do Funcionário:
            <InputMask mask="99/99/9999" type="text" value={funcionarioNascimento} onChange={(e) => setFuncionarioNascimento(e.target.value)} onKeyDown={noEnter} />
          </label> 
          <br />
          <label>
            Salário do Funcionário:
            <input type="number" value={funcionarioSalario} onChange={(e) => setFuncionarioSalario(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Cargo do Funcionário:
            <input type="text" value={funcionarioCargo} onChange={(e) => onlyLetters(e, setFuncionarioCargo)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Email do Funcionário:
            <input type="text" value={funcionarioEmail} onChange={(e) => setFuncionarioEmail(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Telefone Fixo do Funcionário:
            <InputMask mask="(99) 9999-9999" type="text" value={funcionarioFixo} onChange={(e) => setFuncionarioFixo(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Telefone Móvel do Funcionário:
            <InputMask mask="(99) 99999-9999" type="text" value={funcionarioMovel} onChange={(e) => setFuncionarioMovel(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <button type="submit">Cadastrar Funcionário</button>
          <button type="button" onClick={handleDelete}>Excluir Funcionário</button>
          <button type="button" onClick={handleUpdate}>Atualizar Departamento</button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;
