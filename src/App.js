import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Nav from './Components/Nav'
import Title from './Components/Title'
import {MatureProvider} from './State/MatureContext'
import Kontakt from './Components/Kontakt'
import Footer from './Components/Footer'
import Napomena from './Components/Napomena'

const App = () => {

   

    return(

        <MatureProvider>
                <div className='appDiv'>
                    <Nav />
                    <Header />
                    <Napomena />
                    <Title title='MATURE' />
                    <Body />
                    <Title title='KONTAKT' />
                    <Kontakt />
                    <Footer />
                </div>
        </MatureProvider>
       


    )
}

export default App;