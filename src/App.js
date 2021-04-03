import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Nav from './Components/Nav'
import Title from './Components/Title'

const App = () => {
    return(
        <div className='appDiv'>
            <Nav />
            <Header />
            <Title title='MATURE' />
            <Body />
        </div>
    )
}

export default App;