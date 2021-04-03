import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {useEffect, useState, useContext, useRef } from 'react';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {MatureContext} from '../State/MatureContext'
import RazineError from './RazineError'

const Card = ({predmet, slika, dvijerazine, sendRequest, data}) => {

    const [resize, setResize] = useState(0)
    const [isselected, setisselected] = useState(0)
    const [selectcounter, setselectcounter] = useState(1)
    const [animationnumber, setanimationnumber] = useState(0)

    const [, setrequest] = useContext(MatureContext)
    const [years, setYears] = useState([2011, 2019]);
    const [razinaA, setRazinaA] = useState(false)
    const [razinaB, setRazinaB] = useState(false)
    const [razinaerror, setrazinaError] = useState(0)
    const initialRender = useRef(true)

    useEffect(() => {
        if(initialRender.current){
            initialRender.current = false;
        }else{
            if (isselected === 1 && ((razinaA === true || razinaB === true ) || dvijerazine===false)){
                setrazinaError(0)
                data.push({
                        predmet: predmet,
                        years: years,
                        dvijerazine: dvijerazine,
                        razinaA: razinaA,
                        razinaB: razinaB
                    })
                console.log(data)
                setrequest(data)
            }else{
                setrazinaError(1)
            }
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sendRequest])


    const muiTheme = createMuiTheme({
        overrides:{
          MuiSlider: {
            thumb:{
            color: "white",
            },
            track: {
              color: 'white',
              height: 4,
            },
            rail: {
              color: '#704646',
              height: 3,
            },
            mark: {
                color: '#661515',
                height: 3,
            },
            valueLabel: {
                color: '#ab2424'
            },
            markLabelActive: {
                color: '#661515'
            },
            markLabel: {
                color: '#943a3a'
            }
          }
      }
      });

    var marks = []
    for (let i = 2010; i <= 2020; i=i+2) {
        marks.push({
            value: i,
            label: String(i)
        })
    }


    const selectToggle = ()=> {
        setselectcounter(selectcounter + 1)
        if (selectcounter % 2 === 0){
            setanimationnumber(1)
            setResize(0)
        }else{
            setanimationnumber(0)
            setResize(0)
            if (isselected===0) setisselected(1)
            else setisselected(0)
        }
    }
    

  

    return(
        <div className='cardDiv' isselected={isselected} resize={resize} animationnumber={animationnumber} selectcounter={selectcounter} onAnimationEnd={selectToggle}>

            <h3>{predmet}</h3>

            {
                isselected ? 
                <div>
                    {dvijerazine ? 
                        <div className="razine">
                            <div className="razinaA">
                                <label htmlFor="razinaA"><h4>A</h4></label>
                                <input 
                                    type="checkbox" 
                                    name="razinaA" 
                                    id="razinaA" 
                                    className='checkbox'
                                    onClick={()=>setRazinaA(!razinaA)}
                                />
                            </div>
                            <RazineError razinaerror={razinaerror} />
                            <div className="razinaB">
                                <label htmlFor="razinaB"><h4>B</h4></label>
                                <input 
                                    type="checkbox" 
                                    name="razinaB" 
                                    id="razina" 
                                    className='checkbox' 
                                    onClick={()=>setRazinaB(!razinaB)}
                                />
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                    <div className="yearSlider">
                        <ThemeProvider theme={muiTheme}>
                            <Slider
                                value={years}
                                onChange={(e, newYears)=>setYears(newYears)}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                marks={marks}
                                min={2010}
                                max={2020}
                            />
                        </ThemeProvider>
                    </div>
                    <p onClick={() => {setResize(1)
                    setisselected(0)}} >Click to deselect</p>
                </div>
                
                : 
                <p onClick={() => setResize(1)} >Click to select</p>
            }

        </div>
    )
}

export default Card;