import { Banner } from "./components/Banner";
import { Form } from "./components/Forms/Form"
import "./App.css";
import { useState } from "react";
import { Time } from "./components/Time/Time";

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    }
  ]

  const NomesTimes = times.map(time => time.nome)


const [colaboradores, setColaboradores] = useState([])

function aoNovoColaboradorAdicionado(colaborador){
    setColaboradores([...colaboradores], colaborador)
    console.log(colaboradores);
    
}

  return (
    <div>
  
          <Banner />
          <Form times={NomesTimes} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

          {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}

          
    </div>
  );
}

export default App;
