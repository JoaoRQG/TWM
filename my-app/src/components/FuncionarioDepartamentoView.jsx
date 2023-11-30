import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FuncionarioDepartamentoView = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/funcionarios')
      .then(response => {
        setFuncionarios(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter dados de funcionários:', error);
      });

    axios.get('http://localhost:3001/api/department')
      .then(response => {
        setDepartamentos(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter dados de departamentos:', error);
      });
  }, []);

  const combinarDados = (funcionarios, departamentos) => {
    return funcionarios.map(funcionario => {
      const departamento = departamentos.find(dep => dep.departamentId === funcionario.funcionarioIdDepartamento);
      return {
        ...funcionario, ...departamento,
      };
    });
  };

  const dadosCombinados = combinarDados(funcionarios, departamentos);

  return (
    <div className="background-container">
      <div className="form-container">
        <forms>
          <table>
            <thead>
              <tr>  
                <th>ID Funcionário</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Cargo</th>
                <th>Telefone</th>
                <th>ID Departamento</th>
                <th>Departamento</th>
                <th>Email Departamento</th>
                <th>Telefone Fixo Departamento</th>
              </tr>
            </thead>
            <tbody>
              {dadosCombinados.map(item => (
                <tr key={item.funcionarioId}>
                  <td>{item.funcionarioId}</td>
                  <td>{item.funcionarioNome}</td>
                  <td>{item.funcionarioSobrenome}</td>
                  <td>{item.funcionarioCargo}</td>
                  <td>{item.funcionarioFixo}</td>
                  <td>{item.funcionarioIdDepartamento}</td>
                  <td>{item.departamentNome}</td>
                  <td>{item.departamentEmail}</td>
                  <td>{item.departamentFixo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </forms>
      </div>
    </div>
  );
};

export default FuncionarioDepartamentoView;
