import { useState } from "react";

const Compteur = ({ inc }) => {
    const [valeur, setValeur] = useState(0);

    const handleInc = () => {
        setValeur(valeurActuelle => valeurActuelle + inc)
    };

    const handleReset = () => {
        setValeur(0);
    }



    return (
        <>
            <h3>Increment de {inc}</h3>
            <p>{valeur}</p>
            <button onClick={handleInc}>++</button>
            {valeur !==0 && (
                <button onClick={handleReset}>Remise à Zero</button>
            )}
            
        </>
    )

};
Compteur.defaultProps = {
    inc: 1
};


export default Compteur;