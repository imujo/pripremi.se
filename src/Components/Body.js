import CardList from './CardList'

const Body = () => {
    return(
        <form className='bodyDiv' id='body'>
            <CardList />
            <input type="submit" className='preuzmiButton' value="PREUZMI"/>
        </form>
    )
}

export default Body;