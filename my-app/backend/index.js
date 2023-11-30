const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const cities = [];
const clients = [];
const department = [];
const funcionarios = [];
const onibus = [];
const parceiros = [];
const ticket = [];

//Rota para cadastrar cidade.
app.post('/api/cities', (req, res) => {
  const newCity = req.body;
  cities.push(newCity);
  console.log('Nova cidade cadastrada:', newCity);
  res.json(newCity);
});

//Rota para cadastrar cliente.
app.post('/api/clients', (req, res) => {
  const newClient = req.body;
  clients.push(newClient);
  console.log('Novo cliente cadastrado:', newClient);
  res.json(newClient);
});

//Rota para cadastrar departamento.
app.post('/api/department', (req, res) => {
  const newDepartment = req.body;
  department.push(newDepartment);
  console.log('Novo departamento cadastrado:', newDepartment);
  res.json(newDepartment);
});

//Rota para cadastrar funcionários.
app.post('/api/funcionarios', (req, res) => {
  const newFuncionarios = req.body;
  funcionarios.push(newFuncionarios);
  console.log('Novo funcionário cadastrado:', newFuncionarios);
  res.json(newFuncionarios);
});

//Rota para cadastrar ônibus.
app.post('/api/onibus', (req, res) => {
  const newOnibus = req.body;
  onibus.push(newOnibus);
  console.log('Novo ônibus cadastrado:', newOnibus);
  res.json(newOnibus);
});

//Rota para cadastrar parceiros.
app.post('/api/parceiros', (req, res) => {
  const newParceiro = req.body; 
  parceiros.push(newParceiro);
  console.log('Novo parceiro cadastrado:', newParceiro);
  res.json(newParceiro);
});

//Rota para cadastrar passagens.
app.post('/api/ticket', (req, res) => {
  const newTicket = req.body;
  ticket.push(newTicket);
  console.log('Nova passagem cadastrada:', newTicket);
  res.json(newTicket);
});

//Rota para obter todas as cidades cadastradas.
app.get('/api/cities', (req, res) => {
  res.json(cities);
});

//Rota para obter todos os clientes cadastrados.
app.get('/api/clients', (req, res) => {
  res.json(clients);
});

//Rota para obter todas os departamentos cadastrados.
app.get('/api/department', (req, res) => {
  res.json(department);
});

//Rota para obter todas os funcionários cadastrados.
app.get('/api/funcionarios', (req, res) => {
  res.json(funcionarios);
});

//Rota para obter todos os ônibus cadastrados.
app.get('/api/onibus', (req, res) => {
  res.json(onibus);
});

//Rota para obter todos os parceiros cadastrados.
app.get('/api/parceiros', (req, res) => {
  res.json(parceiros);
});

//Rota para obter todas as passagens cadastradas.
app.get('/api/ticket', (req, res) => {
  res.json(ticket);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.delete('/api/cities/:id', (req, res) => {
  const cityId = req.params.id;
  const index = cities.findIndex(city => city.cityId === cityId);

  if (index !== -1) {
    const deletedCity = cities.splice(index, 1)[0];
    console.log('Cidade excluída:', deletedCity);
    res.json(deletedCity);
  } else {
    res.status(404).json({ error: 'Cidade não encontrada' });
  }
});

app.delete('/api/clients/:id', (req, res) => {
  const clientId = req.params.id;
  const index = clients.findIndex(client => client.clientId === clientId);

  if (index !== -1) {
    const deletedClient = clients.splice(index, 1)[0];
    console.log('Cliente excluído:', deletedClient);
    res.json(deletedClient);
  } else {
    res.status(404).json({ error: 'Cidade não encontrado' });
  }
});

app.delete('/api/department/:id', (req, res) => {
  const departamentId = req.params.id;
  const index = department.findIndex(departament => departament.departamentId === departamentId);

  if (index !== -1) {
    const deletedDepartment = department.splice(index, 1)[0];
    console.log('Departamento excluído:', deletedDepartment);
    res.json(deletedDepartment);
  } else {
    res.status(404).json({ error: 'Departamento não encontrado' });
  }
});

app.delete('/api/funcionarios/:id', (req, res) => {
  const funcionarioId = req.params.id;
  const index = funcionarios.findIndex(funcionario => funcionario.funcionarioId === funcionarioId);

  if (index !== -1) {
    const deleteFuncionario = funcionarios.splice(index, 1)[0];
    console.log('Funcionário excluído:', deleteFuncionario);
    res.json(deleteFuncionario);
  } else {
    res.status(404).json({ error: 'Funcionário não encontrado' });
  }
});

app.delete('/api/onibus/:id', (req, res) => {
  const onibusId = req.params.id;
  const index = onibus.findIndex(onibus => onibus.onibusId === onibusId);

  if (index !== -1) {
    const deleteOnibus = onibus.splice(index, 1)[0];
    console.log('Ônibus excluído:', deleteOnibus);
    res.json(deleteOnibus);
  } else {
    res.status(404).json({ error: 'Ônibus não encontrado' });
  }
});

app.delete('/api/parceiros/:id', (req, res) => {
  const parceiroId = req.params.id;
  const index = parceiros.findIndex(parceiros => parceiros.parceiroId === parceiroId);

  if (index !== -1) {
    const deleteParceiros = parceiros.splice(index, 1)[0];
    console.log('Parceiro excluído:', deleteParceiros);
    res.json(deleteParceiros);
  } else {
    res.status(404).json({ error: 'Parceiro não encontrado' });
  }
});

app.delete('/api/ticket/:id', (req, res) => {
  const ticketId = req.params.id;
  const index = ticket.findIndex(ticket => ticket.ticketId === ticketId);

  if (index !== -1) {
    const deleteTicket = ticket.splice(index, 1)[0];
    console.log('Passagem excluída:', deleteTicket);
    res.json(deleteTicket);
  } else {
    res.status(404).json({ error: 'Passagem não encontrada' });
  }
});

app.put('/api/cities/:id', (req, res) => {
  const cityId = req.params.id;
  const updatedCity = req.body;

  const index = cities.findIndex(city => city.cityId === cityId);

  if (index !== -1) {
    cities[index] = { ...cities[index], ...updatedCity };
    console.log('Cidade atualizada:', cities[index]);
    res.json(cities[index]);
  } else {
    res.status(404).json({ error: 'Cidade não encontrada' });
  }
});

app.put('/api/clients/:id', (req, res) => {
  const clientId = req.params.id;
  const updatedClient = req.body;

  const index = clients.findIndex(client => client.clientId === clientId);

  if (index !== -1) {
    clients[index] = { ...clients[index], ...updatedClient };
    console.log('Cliente atualizado:', clients[index]);
    res.json(clients[index]);
  } else {
    res.status(404).json({ error: 'Cliente não encontrado' });
  }
});

app.put('/api/department/:id', (req, res) => {
  const departamentId = req.params.id;
  const updatedDepartament = req.body;

  const index = department.findIndex(department => department.departamentId === departamentId);

  if (index !== -1) {
    department[index] = { ...department[index], ...updatedDepartament };
    console.log('Departamento atualizado:', department[index]);
    res.json(department[index]);
  } else {
    res.status(404).json({ error: 'Departamento não encontrado' });
  }
});

app.put('/api/funcionarios/:id', (req, res) => {
  const funcionarioId = req.params.id;
  const updatedFuncionario = req.body;

  const index = funcionarios.findIndex(funcionarios => funcionarios.funcionarioId === funcionarioId);

  if (index !== -1) {
    funcionarios[index] = { ...funcionarios[index], ...updatedFuncionario };
    console.log('Funcionário atualizado:', funcionarios[index]);
    res.json(funcionarios[index]);
  } else {
    res.status(404).json({ error: 'Funcionário não encontrado' });
  }
});

app.put('/api/onibus/:id', (req, res) => {
  const onibusId = req.params.id;
  const updatedOnibus = req.body;

  const index = onibus.findIndex(onibus => onibus.onibusId === onibusId);

  if (index !== -1) {
    onibus[index] = { ...onibus[index], ...updatedOnibus };
    console.log('Ônibus atualizado:', onibus[index]);
    res.json(onibus[index]);
  } else {
    res.status(404).json({ error: 'Ônibus não encontrado' });
  }
});

app.put('/api/parceiros/:id', (req, res) => {
  const parceiroId = req.params.id;
  const updatedParceiro = req.body;

  const index = parceiros.findIndex(parceiros => parceiros.parceiroId === parceiroId);

  if (index !== -1) {
    parceiros[index] = { ...parceiros[index], ...updatedParceiro };
    console.log('Parceiro atualizado:', parceiros[index]);
    res.json(parceiros[index]);
  } else {
    res.status(404).json({ error: 'Parceiro não encontrado' });
  }
});

app.put('/api/ticket/:id', (req, res) => {
  const ticketId = req.params.id;
  const updatedTicket = req.body;

  const index = ticket.findIndex(ticket => ticket.ticketId === ticketId);

  if (index !== -1) {
    ticket[index] = { ...ticket[index], ...updatedTicket };
    console.log('Parceiro atualizado:', ticket[index]);
    res.json(ticket[index]);
  } else {
    res.status(404).json({ error: 'Parceiro não encontrado' });
  }
});

