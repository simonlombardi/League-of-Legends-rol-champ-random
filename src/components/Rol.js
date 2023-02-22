import React from "react";

export default function Rol({ rol, champ }){
    if (rol != null && champ == null){
    return(
        <h2 className="rol">
            {rol}
        </h2>
    );
    }
}