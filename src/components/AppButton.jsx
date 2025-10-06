export default function AppButton({ idItem, idValue, title, handleClick }) {


    return (
        <button className={`btn btn-${idItem === idValue ? 'primary' : 'light'} mx-3 my-3`}
            data-id={idItem}//indice
            onClick={handleClick}//quando si clicca il button chiama la funzione
        >
            {title}
        </button>
    )
}