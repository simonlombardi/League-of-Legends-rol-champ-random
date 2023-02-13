import React from "react";

export default function Champion({ champ, rol }){
    if (champ != null){
        return(
        <>
            <h3 className='rol'>{rol}</h3>
            <img className='champion-img' src={`//ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg`} alt={`${champ}`} />
            <h3 className='champ'>{champ}</h3>

        </>
        );
    }
}