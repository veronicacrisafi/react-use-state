import { useState } from 'react' // importo l'hook da react 
import languages from '../data/languages'//importo l'array di oggetti
import AppCard from './AppCard';

export default function AppMain() {
    const [idValue, setIdupdate] = useState(null);//destrutturo e prendo il valore dell'id e il valore dell'id aggiornato

    //creo la funzione che viene presa al click del button    
    function handleClick(e) {
        const click = Number(e.target.getAttribute('data-id'))//lo converte in numero
        setIdupdate(click);//aggiorna il valore dell'id
    }

    //come return ho il markup 
    return (
        <>
            <div className="container items">
                {languages.map((item, idItem) => (//iterno all'interno dell'array di oggetti
                    <button className={`btn btn-${idItem === idValue ? 'primary' : 'light'} mx-3 my-3`}
                        key={item.id}//chiave
                        data-id={idItem}//indice
                        onClick={handleClick}//quando si clicca il button chiama la funzione
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            {idValue === null ? (
                <p>nessun linguaggio selezionato</p>
            ) : (
                <AppCard title={languages[idValue].title} description={languages[idValue].description} />

            )}
        </>
    )

}
{/* creo la card con il paragrafo e al suo interno prendo l'array di oggetti e gli dico di prendere il suo id */ }