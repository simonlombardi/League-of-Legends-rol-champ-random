import React from "react";

export default function Champion({ champ, rol, quantity }){
  if (champ != null){
    return(
      <div>
        <h3 className='rol'>{rol}</h3>
        <a href={`https://www.leagueofgraphs.com/es/champions/builds/${champ.toLowerCase()}`} target="_blank" rel="noreferrer">
          <img className={quantity === "5" ? "img-five-champs" : "img-champion"} src={`//ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg`} alt={`${champ}`} />
        </a>
        <h3 className='champ'>{champ}</h3>
      </div>
    );
  }
}
