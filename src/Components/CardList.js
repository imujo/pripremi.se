
import Card from './Card'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const CardList = () => {

    const primaryOptions = {
        type: 'slide',
        autoWidth: true,
        drag: true,
        gap: '80px',
        perPage: 3,
        focus: 'center',
    }
    return(
        <div className='cardListDiv'>
            {/* <div className="gradientLeft"></div> */}
            <Splide  options={primaryOptions}>
                <SplideSlide><Card /></SplideSlide>
                <SplideSlide><Card /></SplideSlide>
                <SplideSlide><Card /></SplideSlide>
                <SplideSlide><Card /></SplideSlide>
                <SplideSlide><Card /></SplideSlide>
            </Splide>
            {/* <div className="gradientRight"></div> */}
        </div>
    )
}

export default CardList;