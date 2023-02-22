import React from "react";

export default function Champion({ champ, rol, quantity }){
    if (champ != null){
        return(
        <>
            <h3 className='rol'>{rol}</h3>
            <img className={quantity === "5" ? "img-five-champs" : "img-champion"} src={`//ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg`} alt={`${champ}`} />
            <h3 className='champ'>{champ}</h3>

        </>
        );
    }
}