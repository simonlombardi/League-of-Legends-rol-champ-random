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
  const [clearState, setClearState] = useState(false);

  function rolChampRandom() {
    clear();
    const randomRol = utils.selectRandomRol();
    setRol(utils.capitalize(randomRol));
    setChamp(utils.selectRandomChamp(randomRol))
    setClearState(true);
  }

  function rolRandom(){
    clear();
    const randomRol = utils.selectRandomRol();
    setRol(utils.capitalize(randomRol));
    setClearState(true);
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
    setClearState(true);
  }

  function clear(){
    setRol(null);
    setChamp(null);
    setTeam(null);
    setClearState(false);
  }

  return (
    <div className="App">
      <h1>ROL-CHAMPION RANDOM</h1>
      <div className='btn-container'>
        <div className='btn' onClick={rolChampRandom}>SINGLE ROL CHAMP</div>
        <div className='btn' onClick={rolFiveChamps}>FIVE ROL CHAMPS</div>
        <div className='btn' onClick={rolRandom}>SINGLE ROL</div>
      </div>
      <Champion rol={rol} champ={champ} quantity="1" />
      <Rol rol={rol} champ={champ}/>
      { team!= null && <Team champions={team}/> }
      <div className={clearState ? "btn" : "btn-clear-disabled"} onClick={clear}>CLEAR</div>
    </div>
  );
}

export default App;
