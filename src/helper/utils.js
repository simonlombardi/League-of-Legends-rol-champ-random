const roles = ["top", "jungler", "mid", "adc", "support"];

const Champs = {
  top: ["Aatrox", "Akshan", "Camille", "Chogath", "Darius", "DrMundo", "Gangplank", "Garen", "Gnar", "Gwen", "Illaoi", "Irelia", "Jax", "Jayce", "KSante", "Kayle", "Kennen", "Kled", "Malphite", "Maokai", "Mordekaiser", "Nasus", "Nidalee", "Olaf", "Ornn", "Pantheon", "Poppy", "Quinn", "Renekton", "Riven", "Rumble", "Sett", "Shen", "Singed", "Sion", "Teemo", "Trundle", "Tryndamere", "Urgot", "Vladimir", "Volibear", "Wukong", "Yorick"],
  jungler: ["Amumu", "Belveth", "Diana", "Ekko", "Elise", "Evelynn", "Fiddlesticks", "Graves", "Hecarim", "Ivern", "JarvanIV", "Karthus", "Kayn", "Khazix", "Kindred", "LeeSin", "Lillia", "MasterYi", "Maokai", "Nocturne", "Nunu", "Rammus", "RekSai", "Rengar", "Sejuani", "Shaco", "Shyvana", "Skarner", "Trundle", "Udyr", "Vi", "Viego", "volibear", "XinZhao", "Zac"],
  mid: ["Ahri", "Akali", "Akshan", "Anivia", "Annie", "AurelionSol", "Azir", "Brand", "Cassiopeia", "Corki", "Diana", "Ekko", "Fizz", "Galio", "Gragas", "Heimerdinger", "Jayce", "Karma", "Karthus", "Kassadin", "Katarina", "Leblanc", "Lissandra", "Lux", "Malzahar", "Neeko", "Orianna", "Qiyana", "Ryze", "Sylas", "Syndra", "Taliyah", "Talon", "Teemo", "TwistedFate", "Veigar", "Velkoz", "Vex", "Viktor","Vladimir", "Xerath", "Yasuo", "Yone", "Zed", "Ziggs","Zoe"],
  adc: ["Aphelios", "Ashe", "Caitlyn", "Draven", "Ezreal", "Jhin", "Jinx", "Kaisa", "Kalista", "KogMaw", "Lucian", "MissFortune", "Tristana", "Twitch", "Varus", "Vayne", "Xayah", "Zeri"],
  support: ["Alistar", "Bard", "Braum", "Janna", "Karma", "Leona", "Lulu", "Lux", "Morgana", "Nami", "Nautilus", "Pyke", "Rakkan", "Rell", "Renata glasc", "Senna", "Seraphine", "Sona", "Soraka", "TahmKench", "Taric", "Thresh", "Yuumi", "Zilean", "Zyra"]
};

function selectRandomRol(){
  return roles[Math.floor(Math.random() * roles.length)];
}

function selectRandomChamp(roles) {
  return Champs[roles][Math.floor(Math.random() * Champs[roles].length)];
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
  roles,
  Champs,
  selectRandomRol,
  selectRandomChamp,
  capitalize
};