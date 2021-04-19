import { useContext, useState } from 'react';
import CardList from './CardList';
import SortButton from './SortButton';
import Loader from "react-loader-spinner";
import {MatureContext} from '../State/MatureContext'

const Body = () => {

    const [sendRequest, setsendRequest] = useState(false)
    const {mLoaded} = useContext(MatureContext)
    const [matureLoaded, ] = mLoaded;
    
    return(
        <div className='bodyDiv' id='body'>
            <SortButton />
            { matureLoaded ? 
                <CardList sendRequest={sendRequest} />
                :
                <Loader 
                    type='TailSpin'
                    color="#e79797"
                    height={100}
                    width={100}
                />
            }
            <button 
                // onClick={
                // }} 
                onClick={
                    matureLoaded ? 
                    () => {setsendRequest(!sendRequest)} 
                    : 
                    undefined
                }
                type='button' 
                className='preuzmiButton'
            >
                PREUZMI
            </button>
        </div>
    )
}

export default Body;