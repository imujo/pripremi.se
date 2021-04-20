import { useContext, useState } from 'react';
import CardList from './CardList';
import SortButton from './SortButton';
import Loader from "react-loader-spinner";
import {MatureContext} from '../State/MatureContext'

const Body = () => {

    // Click on Preuzmi
    const [sendRequest, setsendRequest] = useState(false)

    // Mature loaded ?
    const {mLoaded} = useContext(MatureContext)
    const [matureLoaded, ] = mLoaded;

    // Is processing ?
    const {isprocessing} = useContext(MatureContext)
    const [processing, ] = isprocessing;

    // Percentage loaded
    const {percentageDwnl} = useContext(MatureContext)
    const [percentage, ] = percentageDwnl;

    // Is downloaded ?
    const {isdwnld} = useContext(MatureContext)
    const [downloaded, ] = isdwnld;
    

    return(
        <div className='bodyDiv' id='body'>


            {
                // PROCESSING
                processing ? 
                <div className="dwld-alert processing">
                    <Loader 
                        type='TailSpin'
                        color="#e79797"
                        height={30}
                        width={30}
                    />
                    <p>Processing...</p>
                </div>
                
                :
                undefined
            }
            {
                // DOWNLOADING
                percentage ? 
                <div className="dwld-alert">
                    <div className="loadingContainer">
                        <div className="loaded" style={{width: 200*(percentage/100)}} ></div>
                    </div>
                </div>
                
                :
                undefined
            }


            <div className="dwld-alert downloaded" downloaded={downloaded} >
                <p>Preuzeto!</p>
            </div>


            <SortButton />


            { // MATURE LOADED OR LOADING
            matureLoaded ? 
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