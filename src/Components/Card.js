import CardTitlePicture from './CardTitlePicture'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { useState } from 'react';
import Slider from '@material-ui/core/Slider';


const Card = () => {
    const [resize, setResize] = useState(0)
    const [isactive, setIsActive] = useState(0)
    const [value, setValue] = useState([2011, 2019]);

    function handleClick() {
        setResize(1)
        if (isactive===0){
            setIsActive(1)
        }else{
            setIsActive(0)
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      var marks = []
      for (let i = 2010; i <= 2020; i=i+2) {
        marks.push({
            value: i,
            label: String(i)
        })
    }

    return(
        <div className='cardDiv' isactive={isactive} resize={resize}>
            <div 
                className='imageAnimation' 
                onClick={handleClick}
                onAnimationEnd={()=>setResize(0)}
                resize={resize}
                isactive={isactive}
                black='black'
            >
                <CardTitlePicture/>
            </div>
            <div className="razine">
                <div className="razinaA">
                    <label htmlFor="razinaA"><h3>A</h3></label>
                    <input type="radio" name="razinaA" id="razinaA"/>
                </div>
                <div className="razinaB">
                    <label htmlFor="razinaB"><h3>B</h3></label>
                    <input type="radio" name="razinaB" id="razina"/>
                </div>
            </div>
            <div className="yearSlider">
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    marks={marks}
                    min={2010}
                    max={2020}
                />
            </div>

        </div>
    )
}

export default Card;