import { useState } from 'react';
import './App.css';
import Rol from './components/Rol';
import Champion from './components/RolChampion';

const utils = require('./helper/utils.js');
 
function App() {
  const [rol, setRol] = useState(null);
  const [champ, setChamp] = useState(null);
  const [champTop, setChampTop] = useState(null);
  const [champJg, setChampJg] = useState(null);
  const [champMid, setChampMid] = useState(null);
  const [champADC, setChampADC] = useState(null);
  const [champSupp, setChampSupp] = useState(null);

  function rolChampRandom() {
    clear();
    const randomRol = utils.selectRandomRol();
    setRol(utils.capitalize(randomRol));
    setChamp(utils.selectChamp(randomRol))
  }

  function rolRandom(){
    clear();
    const randomRol = utils.selectRandomRol();
    setRol(utils.capitalize(randomRol));
  }

  function rolFiveChamps(){
    clear();
    setChampTop(utils.selectChamp("top"))
    setChampJg(utils.selectChamp("jungler"))
    setChampMid(utils.selectChamp("mid"))
    setChampADC(utils.selectChamp("adc"))
    setChampSupp(utils.selectChamp("support"))
  }

  function clear(){
    setRol(null);
    setChamp(null);
    setChampTop(null);
    setChampJg(null);
    setChampMid(null);
    setChampADC(null);
    setChampSupp(null);
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
      <div className='container-five-champs'>
        <div>
          <Champion rol="Top" champ={champTop} quantity="5" />
        </div>
        <div>
          <Champion rol="Jg" champ={champJg} quantity="5" />
        </div>
        <div>
          <Champion rol="Mid" champ={champMid} quantity="5" />
        </div>
        <div>
          <Champion rol="ADC" champ={champADC} quantity="5" />
        </div>
        <div>
          <Champion rol="Supp" champ={champSupp} quantity="5" />
        </div>
      </div>
    </div>
  );
}

export default App;
