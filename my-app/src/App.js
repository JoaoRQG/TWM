import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from './menu/Menu';
import axios from 'axios';
import CityForm from './components/CityForm';
import ClientForm from './components/ClientForm';
import DepartmentForm from './components/DepartmentForm';
import EmployeeForm from './components/EmployeeForm';
import BusForm from './components/BusForm';
import PartnerForm from './components/PartnerForm';
import TicketForm from './components/TicketForm';
import Listar from './components/Listar';
import FuncionarioDepartamentoView from './components/FuncionarioDepartamentoView';
import PassagemClienteView from './components/PassagemClienteView';

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/cities')
      .then(response => setData(response.data));
  }, []);

  const [novaCidade, setNovaCidade] = useState({
    cidadeId: '',
    nome: '',
    estado: '',
  });

  const [novoCliente, setNovoCliente] = useState({
    cidadeId: '',
    cpf: '',
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    email: '',
    endereco: '',
    numero: '',
    complemento: '',
    cep: '',
    cidade: '',
    estado: '',
    telefoneFixo: '',
    telefoneMovel: '',
  });

  const [novoDepartamento, setNovoDepartamento] = useState({
    departamentId: '',
    nome: '',
    email: '',
    telefoneFixo: '',
  });

  const [novoFuncionarios, setNovoFuncionario] = useState({
    funcionarioId: '',
    nome: '',
    sobrenome: '',
    gerenteId: '',
    departamentoId: '',
    dataNascimento: '',
    salario: '',
    cargo: '',
    email: '',
    telefoneFixo: '',
    telefoneMovel: '',
  });

  const [novoOnibus, setNovoOnibus] = useState({
    departamentId: '',
    nome: '',
    sobrenome: '',
    gerente: '',
    departamento: '',
    dataNascimento: '',
    salario: '',
    email: '',
    telefoneFixo: '',
    telefoneMovel: '',
  });

  const [novoParceiro, setNovoParceiro] = useState({
    parceiroId: '',
    cnpj: '',
    nome: '',
    cidade: '',
    estado: '',
    email: '',
    telefoneFixo: '',
  });

  const [novaPassagem, setNovaPassagem] = useState({
    ticketId: '',
    ticketIdCliente: '',
    ticketIdOnibus: '',
    ticketIdCidadeEmbarque: '',
    enderecoEmbarque: '',
    dataEmbarque: '',
    horaEmbarque: '',
    ticketIdCidadeDesembarque: '',
    enderecoDesembarque: '',
    dataDesembarque: '',
    horaDesembarque: '',
    preco: '',
  });

  //Função para cadastrar uma nova cidade.
  const cadastrarCidade = async (dadosCidade) => {
    try {
      const response = await axios.post('http://localhost:3001/api/cities', dadosCidade);

      if (response.status === 200) {
        const cidadeCadastrada = response.data;
        console.log('Nova cidade cadastrada:', cidadeCadastrada);

        // Atualiza o campo cidadeId no estado do novo cliente
        setNovoCliente((prevCliente) => ({
          ...prevCliente,
          cidadeId: cidadeCadastrada.id,
        }));

        // Limpa os campos após o cadastro
        setNovaCidade({
          cidadeId: '',
          nome: '',
          estado: '',
        });
      } else {
        console.error('Falha ao cadastrar cidade');
      }
    } catch (error) {
      console.error('Erro ao cadastrar cidade:', error.message);
    }
  };

  //Função para cadastrar um novo cliente.
  const cadastrarCliente = async (dadosCliente) => {
    try {
      const response = await axios.post('http://localhost:3001/api/clients', dadosCliente);

      if (response.status === 200) {
        const clienteCadastrado = response.data;
        console.log('Novo cliente cadastrado:', clienteCadastrado);

        //Limpa os campos após o cadastro.
        setNovoCliente({
          cidadeId: '',
          cpf: '',
          nome: '',
          sobrenome: '',
          dataNascimento: '',
          email: '',
          endereco: '',
          numero: '',
          complemento: '',
          cep: '',
          cidade: '',
          estado: '',
          telefoneFixo: '',
          telefoneMovel: '',
        });
      } else {
        console.error('Falha ao cadastrar cliente');
      }
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error.message);
    }
  };

  //Função para cadastrar um novo departamento.
  const cadastrarDepartamento = async (dadosDepartamento) => {
    try {
      const response = await axios.post('http://localhost:3001/api/department', dadosDepartamento);

      if (response.status === 200) {
        const departamentoCadastrado = response.data;
        console.log('Novo cliente cadastrado:', departamentoCadastrado);

        //Limpa os campos após o cadastro.
        setNovoDepartamento({
          departamentId: '',
          nome: '',
          email: '',
          telefoneFixo: '',
        });
      } else {
        console.error('Falha ao cadastrar departamento');
      }
    } catch (error) {
      console.error('Erro ao cadastrar departamento:', error.message);
    }
  };

  //Função para cadastrar um novo funcionário.
  const cadastrarFuncionario = async (dadosFuncionarios) => {
    try {
      const response = await axios.post('http://localhost:3001/api/funcionarios', dadosFuncionarios);

      if (response.status === 200) {
        const funcionariosCadastrado = response.data;
        console.log('Novo funcionário cadastrado:', funcionariosCadastrado);

        //Limpa os campos após o cadastro.
        setNovoFuncionario({
          funcionarioId: '',
          nome: '',
          sobrenome: '',
          gerenteId: '',
          departamentoId: '',
          dataNascimento: '',
          salario: '',
          cargo: '',
          email: '',
          telefoneFixo: '',
          telefoneMovel: '',
        });
      } else {
        console.error('Falha ao cadastrar funcionário');
      }
    } catch (error) {
      console.error('Erro ao cadastrar funcionário:', error.message);
    }
  };

  //Função para cadastrar um novo ônibus.
  const cadastrarOnibus = async (dadosOnibus) => {
    try {
      const response = await axios.post('http://localhost:3001/api/onibus', dadosOnibus);

      if (response.status === 200) {
        const onibusCadastrado = response.data;
        console.log('Novo onibus cadastrado:', onibusCadastrado);

        //Limpa os campos após o cadastro.
        setNovoOnibus({
          departamentId: '',
          nome: '',
          sobrenome: '',
          gerente: '',
          departamento: '',
          dataNascimento: '',
          salario: '',
          email: '',
          telefoneFixo: '',
          telefoneMovel: '',
        });
      } else {
        console.error('Falha ao cadastrar onibus');
      }
    } catch (error) {
      console.error('Erro ao cadastrar onibus:', error.message);
    }
  };

  //Função para cadastrar um novo parceiro.
  const cadastrarParceiro = async (dadosParceiro) => {
    try {
      const response = await axios.post('http://localhost:3001/api/parceiros', dadosParceiro);

      if (response.status === 200) {
        const parceiroCadastrado = response.data;
        console.log('Novo parceiro cadastrado:', parceiroCadastrado);

        //Limpa os campos após o cadastro.
        setNovoParceiro({
          parceiroId: '',
          cnpj: '',
          nome: '',
          cidade: '',
          estado: '',
          email: '',
          telefoneFixo: '',
        });
      } else {
        console.error('Falha ao cadastrar parceiro');
      }
    } catch (error) {
      console.error('Erro ao cadastrar parceiro:', error.message);
    }
  };

  //Função para cadastrar uma nova passagem.
  const cadastrarPassagem = async (dadosTicket) => {
    try {
      const response = await axios.post('http://localhost:3001/api/ticket', dadosTicket);

      if (response.status === 200) {
        const ticketCadastrado = response.data;
        console.log('Nova passagem cadastrada:', ticketCadastrado);

        //Limpa os campos após o cadastro.
        setNovaPassagem({
          ticketId: '',
          ticketIdCliente: '',
          ticketIdOnibus: '',
          ticketIdCidadeEmbarque: '',
          enderecoEmbarque: '',
          dataEmbarque: '',
          horaEmbarque: '',
          ticketIdCidadeDesembarque: '',
          enderecoDesembarque: '',
          dataDesembarque: '',
          horaDesembarque: '',
          preco: '',
        });
      } else {
        console.error('Falha ao cadastrar passagem');
      }
    } catch (error) {
      console.error('Erro ao cadastrar passagem:', error.message);
    }
  };

  return (
    <Router>
      <div>
        <Menu />
        <div>
          <Routes>
            <Route path="/listar" element={<Listar  />}/>
            <Route path="/fdv" element={<FuncionarioDepartamentoView  />}/>
            <Route path="/pcv" element={<PassagemClienteView  />}/>
            <Route path="/city" element={<CityForm cadastrarCidade={cadastrarCidade} />}/>
            <Route path="/client" element={<ClientForm cadastrarCliente={cadastrarCliente} />}/>
            <Route path="/department" element={<DepartmentForm cadastrarDepartamento={cadastrarDepartamento} />}/>
            <Route path="/employee" element={<EmployeeForm cadastrarFuncionario={cadastrarFuncionario} />}/>
            <Route path="/bus" element={<BusForm cadastrarOnibus={cadastrarOnibus} />}/>
            <Route path="/partner" element={<PartnerForm cadastrarParceiro={cadastrarParceiro} />}/>
            <Route path="/ticket" element={<TicketForm cadastrarPassagem={cadastrarPassagem} />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


