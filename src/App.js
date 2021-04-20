import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Nav from './Components/Nav'
import Title from './Components/Title'
import {MatureProvider} from './State/MatureContext'
import Kontakt from './Components/Kontakt'
import Footer from './Components/Footer'
import { Scrollbars } from 'react-custom-scrollbars';
import useWindowDimensions from './State/getWindowDimensions'

const App = () => {

    const {height, width} = useWindowDimensions();

    return(

        <MatureProvider>
            <Scrollbars
                style={{ width: width, height: height }}
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
            >
                <div className='appDiv'>
                    <Nav  />
                    <Header />
                    <Title title='MATURE' />
                    <Body />
                    <Title title='KONTAKT' />
                    <Kontakt />
                    <Footer />
                </div>
            </Scrollbars>
        </MatureProvider>
       


    )
}

export default App;