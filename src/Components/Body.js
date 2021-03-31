import CardList from './CardList'

const Body = () => {
    return(
        <form className='bodyDiv'>
            <CardList />
            <input type="submit" className='preuzmiButton' value="PREUZMI"/>
        </form>
    )
}

export default Body;