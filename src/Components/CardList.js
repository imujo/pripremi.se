
import Card from './Card'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useContext } from 'react';
import {MatureContext} from '../State/MatureContext'

const CardList = ({sendRequest}) => {

    const primaryOptions = {
        type: 'slide',
        autoWidth: true,
        drag: false,
        gap: '80px',
        rewind: true,
        perMove: 1,
        pagination: false,
        focus: 'center',
        trimSpace: false,
        start: 1,
        height: "450px",
        padding: {
            top: "10rem"
        }
    }

    const {mList} = useContext(MatureContext)
    const [matureList, ] = mList;

    

    var data = []


    
    return(
        <div className='cardListDiv'>
            {/* <div className="gradientLeft"></div> */}
            <Splide className='splide'  options={primaryOptions}>
                {matureList.map((matura, i) =>{
                    return(
                        <SplideSlide className='test' key={i}><Card 
                            sendRequest={sendRequest}
                            data={data}
                            predmet={matura.predmet}
                            slika={matura.slika}
                            dvijerazine={matura.dvijerazine}
                            
                        /></SplideSlide>
                    )
                })}
            </Splide>
            {/* <div className="gradientRight"></div> */}
        </div>
    )
}

export default CardList;