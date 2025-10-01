import { useState } from 'react'
import languages from '../data/languages'


export default function AppMain() {

    const [active, setActive] = useState(1);
    const [showMore, setShowMore] = useState(false);

    function handleClick() {
        setShowMore(!showMore)
    }

    return (
        <>
            <div className="items">

                {languages.map((item) => (
                    <div className='item'>
                        <button data-id={item.id} onClick={handleClick} key={item.id}>{item.title}</button>

                    </div>
                ))}

            </div>



        </>
    )
}