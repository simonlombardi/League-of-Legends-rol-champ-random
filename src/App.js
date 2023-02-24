import { useState } from 'react';
import './App.css';
import Rol from './components/Rol';
import Champion from './components/RolChampion';
import Team from './components/Team';

const utils = require('./helper/utils.js');

function App() {
  const [rol, setRol] = useState(null);
  const [champ, setChamp] = useState(null);
  const [team, setTeam] = useState(null);

  function rolChampRandom() {
    clear();
    const randomRol = utils.selectRandomRol();
    setRol(utils.capitalize(randomRol));
    setChamp(utils.selectRandomChamp(randomRol))
  }

  function rolRandom(){
    clear();
    const randomRol = utils.selectRandomRol();
    setRol(utils.capitalize(randomRol));
  }

  function rolFiveChamps(){
    clear();
    setTeam({
      top: utils.selectRandomChamp("top"),
      jungler: utils.selectRandomChamp("jungler"),
      mid: utils.selectRandomChamp("mid"),
      adc: utils.selectRandomChamp("adc"),
      support: utils.selectRandomChamp("support")
    });
  }

  function clear(){
    setRol(null);
    setChamp(null);
    setTeam(null);
  }

  return (
    <div className="App">
      <h1>ROL-CHAMPION RANDOM</h1>
      <button className='btn-rol-champ' onClick={rolChampRandom}>ROL-CHAMP</button>
      <button className='btn-rol' onClick={rolRandom}>ROL</button>
      <button className='btn-rol-five-champs' onClick={rolFiveChamps}>ROL FIVE CHAMPS</button>
      <button className='btn-rol-five-champs' onClick={clear}>CLEAR</button>
      <Champion rol={rol} champ={champ} quantity="1" />
      <Rol rol={rol} champ={champ}/>
      { team!= null && <Team champions={team}/> }
    </div>
  );
}

export default App;
