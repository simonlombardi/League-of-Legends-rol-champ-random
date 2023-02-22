import { useState } from 'react';
import './App.css';
import Rol from './components/Rol';
import Champion from './components/RolChampion';

const listChampsTop = ["Aatrox", "Akshan", "Camille", "Chogath", "Darius", "DrMundo", "Gangplank", "Garen", "Gnar", "Gwen", "Illaoi", "Irelia", "Jax", "Jayce", "KSante", "Kayle", "Kennen", "Kled", "Malphite", "Maokai", "Mordekaiser", "Nasus", "Nidalee", "Olaf", "Ornn", "Pantheon", "Poppy", "Quinn", "Renekton", "Riven", "Rumble", "Sett", "Shen", "Singed", "Sion", "Teemo", "Trundle", "Tryndamere", "Urgot", "Vladimir", "Volibear", "Wukong", "Yorick"];

const listChampsJg = ["Amumu", "Belveth", "Diana", "Ekko", "Elise", "Evelynn", "Fiddlesticks", "Graves", "Hecarim", "Ivern", "JarvanIV", "Karthus", "Kayn", "Khazix", "Kindred", "LeeSin", "Lillia", "MasterYi", "Maokai", "Nocturne", "Nunu", "Rammus", "RekSai", "Rengar", "Sejuani", "Shaco", "Shyvana", "Skarner", "Trundle", "Udyr", "Vi", "Viego", "volibear", "XinZhao", "Zac"];

const listChampsMid = ["Ahri", "Akali", "Akshan", "Anivia", "Annie", "AurelionSol", "Azir", "Brand", "Cassiopeia", "Corki", "Diana", "Ekko", "Fizz", "Galio", "Gragas", "Heimerdinger", "Jayce", "Karma", "Karthus", "Kassadin", "Katarina", "Leblanc", "Lissandra", "Lux", "Malzahar", "Neeko", "Orianna", "Qiyana", "Ryze", "Sylas", "Syndra", "Taliyah", "Talon", "Teemo", "TwistedFate", "Veigar", "Velkoz", "Vex", "Viktor","Vladimir", "Xerath", "Yasuo", "Yone", "Zed", "Ziggs","Zoe"];

const listChampsADC = ["Aphelios", "Ashe", "Caitlyn", "Draven", "Ezreal", "Jhin", "Jinx", "Kaisa", "Kalista", "KogMaw", "Lucian", "MissFortune", "Tristana", "Twitch", "Varus", "Vayne", "Xayah", "Zeri"];

const listChampsSupp = ["Alistar", "Bard", "Braum", "Janna", "Karma", "Leona", "Lulu", "Lux", "Morgana", "Nami", "Nautilus", "Pyke", "Rakkan", "Rell", "Renata glasc", "Senna", "Seraphine", "Sona", "Soraka", "TahmKench", "Taric", "Thresh", "Yuumi", "Zilean", "Zyra"];

const roles = ["Top", "Jg", "Mid", "ADC", "Supp"];
 
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
    const randomRol = roles[Math.floor(Math.random() * roles.length)];
    setRol(randomRol);

    if (randomRol === "Top"){
      let randomChamp = listChampsTop[Math.floor(Math.random() * listChampsTop.length)];
      setChamp(randomChamp);
      console.log(champ)
    }
    

    else if (randomRol === "Jg"){
      let randomChamp = listChampsJg[Math.floor(Math.random() * listChampsJg.length)];
      setChamp(randomChamp);
      console.log(champ)
    }

    else if (randomRol === "Mid"){
      let randomChamp = listChampsMid[Math.floor(Math.random() * listChampsMid.length)];
      setChamp(randomChamp);
      console.log(champ)
    }

    else if (randomRol === "ADC"){
      let randomChamp = listChampsADC[Math.floor(Math.random() * listChampsADC.length)];
      setChamp(randomChamp);
      console.log(champ)
    }

    else if (randomRol === "Supp"){
      let randomChamp = listChampsSupp[Math.floor(Math.random() * listChampsSupp.length)];
      setChamp(randomChamp);
      console.log(champ)
    }
  }

  function rolRandom(){
    clear();
    const randomRol = roles[Math.floor(Math.random() * roles.length)];
    setRol(randomRol);

  }

  function rolFiveChamps(){
    clear();
    setChampTop(listChampsTop[Math.floor(Math.random() * listChampsTop.length)])
    setChampJg(listChampsJg[Math.floor(Math.random() * listChampsJg.length)])
    setChampMid(listChampsMid[Math.floor(Math.random() * listChampsMid.length)])
    setChampADC(listChampsADC[Math.floor(Math.random() * listChampsADC.length)])
    setChampSupp(listChampsSupp[Math.floor(Math.random() * listChampsSupp.length)])
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
