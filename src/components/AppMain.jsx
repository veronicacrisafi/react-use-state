import { useState } from 'react'
import languages from '../data/languages'
import { act } from 'react'

export default function AppMain({ items }) {

    const [active, setActive] = useState(1)

    function handleClick(e) {
        const clickedItemId = Number(e.target.getAttribute('data-id'))
        setActive(clickedItemId)
    }

    return (
        <>
            <div className="items">
                {languages.map((item) => (
                    <div className='item' key={item.id}>
                        <button data-id={item.id} onClick={handleClick}>{item.title}</button>
                        {active == item.id &&
                            <p>{item.description}</p>
                        }
                    </div>
                ))}

            </div>



        </>
    )
}