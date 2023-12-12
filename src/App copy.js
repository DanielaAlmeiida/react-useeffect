import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  /*
  
  const [endereco, setEndereco] = useState({});
  const [enderecos, setEnderecos] = useState([])

  function manipularEndereco(e) {

    const cep = e.target.value
    
    setEndereco({
      cep: cep
    })

    if (cep && cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(dados => {

          setEnderecos(lista => [...lista, endereco])

          setEndereco(enderecoAntigo => (
           {
            ...enderecoAntigo,
            rua: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          }))
        })
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Buscar CEP</h1>

      <input placeholder="Digite o cep" onChange={manipularEndereco}/>
      <ul>
        <li>CEP: {endereco.cep}</li>
        <li>Rua: {endereco.rua}</li>
        <li>Bairro: {endereco.bairro}</li>
        <li>Cidade: {endereco.cidade}</li>
        <li>Estado: {endereco.estado}</li>
      </ul>

      </header>
    </div>
  );

  */
}

export default App;
