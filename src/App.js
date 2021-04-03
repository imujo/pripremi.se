import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Nav from './Components/Nav'
import Title from './Components/Title'
import {MatureProvider} from './State/MatureContext'

const App = () => {
    return(
        <MatureProvider>
            <div className='appDiv'>
                <Nav />
                <Header />
                <Title title='MATURE' />
                <Body />
            </div>
        </MatureProvider>

    )
}

export default App;