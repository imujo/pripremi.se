import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {useState } from 'react';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const Card = ({predmet, slika, dvijerazine}) => {

    const [years, setYears] = useState([2011, 2019]);
    // const [razinaA, setRazinaA] = useState(false)
    // const [razinaB, setRazinaB] = useState(false)

    // const [select, setSelect] = useState({}) //neki global useState form context js

    // useEffect(() => {
    //     setSelect({
    //         predmet: {predmet},
    //         razinaA: {razinaA},
    //         razinaB: {razinaB},
    //         godine: {years}
    //     })
    // }, [setRazinaA, setRazinaB, setYears]) // fix


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
    const [resize, setResize] = useState(0)
    const [isselected, setisselected] = useState(0)
    const [selectcounter, setselectcounter] = useState(1)
    const [animationnumber, setanimationnumber] = useState(0)

    const selectToggle = ()=> {
        console.log(selectcounter)
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
        console.log('r', resize, 's', isselected, 'sc', selectcounter, 'an', animationnumber)
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
                                <input type="checkbox" name="razinaA" id="razinaA" className='checkbox'/>
                            </div>
                            <div className="razinaB">
                                <label htmlFor="razinaB"><h4>B</h4></label>
                                <input type="checkbox" name="razinaB" id="razina" className='checkbox' />
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
            {/* <div className="razine">
                <div className="razinaA">
                    <label htmlFor="razinaA"><h3>A</h3></label>
                    <input type="checkbox" name="razinaA" id="razinaA" onClick={()=>setRazinaA(!razinaA)}/>
                </div>
                <div className="razinaB">
                    <label htmlFor="razinaB"><h3>B</h3></label>
                    <input type="checkbox" name="razinaB" id="razina" onClick={()=>setRazinaB(!razinaB)} />
                </div>
            </div>
            <div className="yearSlider">
                <Slider
                    value={years}
                    onChange={(e, newYears)=>setYears(newYears)}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    marks={marks}
                    min={2010}
                    max={2020}
                />
            </div> */}

        </div>
    )
}

export default Card;