import { useState } from 'react';
import './App.css';
import Champion from './components/Champion';

const listChampsTop = ["Aatrox", "Akshan", "Camille", "Chogath", "Darius", "DrMundo", "Gangplank", "Garen", "Gnar", "Gwen", "Illaoi", "Irelia", "Jax", "Jayce", "KSante", "Kayle", "Kennen", "Kled", "Malphite", "Maokai", "Mordekaiser", "Nasus", "Nidalee", "Olaf", "Ornn", "Pantheon", "Poppy", "Quinn", "Renekton", "Riven", "Rumble", "Sett", "Shen", "Singed", "Sion", "Teemo", "Trundle", "Tryndamere", "Urgot", "Vladimir", "Volibear", "Wukong", "Yorick"];

const listChampsJg = ["Amumu", "Belveth", "Diana", "Ekko", "Elise", "Evelynn", "Fiddlesticks", "Graves", "Hecarim", "Ivern", "JarvanIV", "Karthus", "Kayn", "Khazix", "Kindred", "LeeSin", "Lillia", "MasterYi", "Maokai", "Nocturne", "Nunu", "Rammus", "RekSai", "Rengar", "Sejuani", "Shaco", "Shyvana", "Skarner", "Trundle", "Udyr", "Vi", "Viego", "volibear", "XinZhao", "Zac"];

const listChampsMid = ["Ahri", "Akali", "Akshan", "Anivia", "Annie", "AurelionSol", "Azir", "Brand", "Cassiopeia", "Corki", "Diana", "Ekko", "Fizz", "Galio", "Gragas", "Heimerdinger", "Jayce", "Karma", "Karthus", "Kassadin", "Katarina", "Leblanc", "Lissandra", "Lux", "Malzahar", "Neeko", "Orianna", "Qiyana", "Ryze", "Sylas", "Syndra", "Taliyah", "Talon", "Teemo", "TwistedFate", "Veigar", "Velkoz", "Vex", "Viktor","Vladimir", "Xerath", "Yasuo", "Yone", "Zed", "Ziggs","Zoe"];

const listChampsADC = ["Aphelios", "Ashe", "Caitlyn", "Draven", "Ezreal", "Jhin", "Jinx", "Kaisa", "Kalista", "KogMaw", "Lucian", "MissFortune", "Tristana", "Twitch", "Varus", "Vayne", "Xayah", "Zeri"];

const listChampsSupp = ["Alistar", "Bard", "Braum", "Janna", "Karma", "Leona", "Lulu", "Lux", "Morgana", "Nami", "Nautilus", "Pyke", "Rakkan", "Rell", "Renata glasc", "Senna", "Seraphine", "Sona", "Soraka", "TahmKench", "Taric", "Thresh", "Yuumi", "Zilean", "Zyra"];

const roles = ["Top", "Jg", "Mid", "ADC", "Supp"];
 


function App() {
  const [rol, setRol] = useState(null);
  const [champ, setChamp] = useState(null);

  function rolChampRandom() {
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


  return (
    <div className="App">
      <h1>ROL-CHAMPION RANDOM</h1>
      <button onClick={rolChampRandom}>RANDOM</button>
      <Champion rol={rol} champ={champ} />
    </div>
  );
}


export default App;
