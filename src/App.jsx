import './App.css'
import Pokecard from './components/Pokecard'
import Laercio from "../src/img/laercio.png"
import Ingrid from "../src/img/ingrid.jfif"
import cris from "../src/img/cris.png"
import giovanni from "../src/img/giovanni.png"
function App() {

  return (
    <div className='card-conteiner'>
    <Pokecard Nomepkmn="Lalárxs" Tipo="Sombrio/psic" Ataque="Feedback" Poder="Mestre do C#/Mega visão/Super audição/Onipresença" imagem={Laercio}/>
    <Pokecard Nomepkmn="Ingridnator" Tipo="Fada/normal" Ataque="Fala mansa" Poder="Sênior de HTML/Sabia dos code/Mestra do React" imagem={Ingrid}/>
    <Pokecard Nomepkmn="Crislix" Tipo="Elétrico/Psíquico" Ataque="Localweber" Poder="Dormir na sala/Saber só de Back-end" imagem={cris}/>
    <Pokecard Nomepkmn="Bitruco" Tipo="Fogo/Pedra" Ataque="Saber de carros" Poder="Mago das foto/Sabio do C#/Inimigo do truco" imagem={giovanni}/>
  </div>
  )
}

export default App
