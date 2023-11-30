import React, { useState } from 'react';
import './style2.css';
import axios from 'axios'

const CityForm = ({ cadastrarCidade }) => {
  const [cityId, setCityId] = useState('');
  const [cityName, setCityName] = useState('');
  const [state, setState] = useState('');

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
    cadastrarCidade({
      cityId,
      cityName,
      state,
    });
    setCityId('');
    setCityName('');
    setState('');
  };

  const handleDelete = async () => {
    if (cityId) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/cities/${cityId}`);
        console.log('Cidade excluída:', response.data);

        setCityId('');
        setCityName('');
        setState('');
      } catch (error) {
        console.error('Erro ao excluir cidade:', error.message);
      }
    } else {
      console.error('ID da cidade não fornecido');
    }
  };

  const handleUpdate = async () => {
    if (cityId) {
      try {
        const response = await axios.put(`http://localhost:3001/api/cities/${cityId}`, {
          cityName,
          state,
        });

        console.log('Cidade atualizada:', response.data);

        setCityId('');
        setCityName('');
        setState('');
      } catch (error) {
        console.error('Erro ao atualizar cidade:', error.message);
      }
    } else {
      console.error('ID da cidade não fornecido');
    }
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            ID da Cidade:
            <input type="number" value={cityId} onChange={(e) => setCityId(e.target.value)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Nome:
            <input type="text" value={cityName} onChange={(e) => onlyLetters(e, setCityName)} onKeyDown={noEnter} />
          </label>
          <br />
          <label>
            Estado:
            <input type="text" maxLength="2" value={state} onChange={(e) => onlyLetters(e, setState)} onKeyDown={noEnter} />
          </label>
          <br /> 
          <button className="form button" type="submit">Cadastrar Cidade</button>
          <button type="button" onClick={handleDelete}>Excluir Cidade</button>
          <button type="button" onClick={handleUpdate}>Atualizar Cidade</button>
        </form>       
      </div>
    </div>
  );
}

export default CityForm;
