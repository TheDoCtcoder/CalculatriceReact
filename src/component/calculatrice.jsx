

import {useState} from 'react';

const Calculatrice = () => {

    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [operateur, setOperateur] = useState('');
    const [resultat, setResultat] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();

      
        if (operateur ==="-") {
            setResultat( parseFloat(number1-number2))
        }
        else if (operateur ==="+") {
            setResultat( parseFloat(number1+number2))
        }
        else if (operateur ==="*") {
            setResultat( parseFloat(number1*number2))
        }
        else if (operateur ==="/") {
            setResultat( parseFloat(number1/number2))
        }
       
        // setResultat(parseInt(number1)+number2);
        // console.log( number1, operateur,  number2)
        // console.log('Formulaire validé !', data);
    };
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='number1'>Nombre 1 : </label>
                    <input id='number1' type="text" value={number1}
                    onChange={(e) => setNumber1(e.target.value)} />
                    <br />

                <label htmlFor='operateur'>Operateur : </label>
            
                <select id='operateur' value={operateur}
                    onChange={(e) => setOperateur(e.target.value)}>
                    <option value='' disabled={true}>Fait votre choix</option>
                    <option value='+'>+</option>
                    <option value='-'>-</option>
                    <option value='*'>*</option>
                    <option value='/'>/</option>
                </select>
                <br />

                    <label htmlFor='number2'>Nombre 2 : </label>
                    <input id='number2' type="text" value={number2}
                    onChange={(e) => setNumber2(e.target.value)} />
                    <br />
                <label htmlFor='resultat' id="result"> Resultat  : </label>
                    <input id='resultat' type="text"  value={resultat}
                    readOnly />
                    <br />
                </div>
                <br />
                <button type='submit'>Valider</button>




            </form>
        )



}

export default Calculatrice;