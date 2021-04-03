import { useState } from 'react';
import CardList from './CardList'

const Body = () => {

    const [sendRequest, setsendRequest] = useState(false)
    
    return(
        <div className='bodyDiv' id='body'>
            <CardList sendRequest={sendRequest} />
            <button 
                onClick={() => {
                    setsendRequest(!sendRequest)
                    console.log(sendRequest)
                }} 
                type='button' 
                className='preuzmiButton'
            >
                PREUZMI
            </button>
        </div>
    )
}

export default Body;