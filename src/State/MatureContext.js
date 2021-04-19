import React, {useState, createContext, useEffect, useRef} from 'react'
import fetchProgress from 'fetch-progress';

const MatureContext = createContext();

const MatureProvider = (props) => {
    const initialRender = useRef(true)

    const [request, setrequest] = useState([])
    const [sortOrder, setsortOrder] = useState('Popularno')
    const [numisselected ,setnumisselected] = useState(0)
    const [matureList, setmatureList] = useState([])
    const [matureLoaded, setmatureLoaded] = useState(false)

    useEffect(() => {
        if(initialRender.current){
            initialRender.current = false;
        }else{
            console.log(numisselected)
            var result = {};
            for (var i = 0; i < request.length; i++) {
                result[request[i].predmet] = {
                    dvijerazine: request[i].dvijerazine,
                    razinaA: request[i].razinaA,
                    razinaB: request[i].razinaB,
                    years: request[i].years
                };
            }
            fetch('http://localhost:5000/matured',{
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(result)
            })
            .then(
                fetchProgress({
                    onProgress(progress){
                        console.log(progress.percentage)
                    }
                })
            )
            .then((res)=>res.blob())
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Mature.zip');
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
              });

        }
    }, [request])

    useEffect(() => {
        fetch(`http://localhost:5000/mature/${sortOrder}`)
            .then(res => res.json())
            .then(data => setmatureList(data))
            .then(setmatureLoaded(true))
            .catch(err => console.log(err))
    }, [sortOrder])

    return(
        <MatureContext.Provider value={{
            download: [request, setrequest], 
            sort: [sortOrder, setsortOrder],
            isselectedn: [numisselected ,setnumisselected],
            mList: [matureList, setmatureList],
            mLoaded: [matureLoaded, setmatureLoaded],
        }} >
            {props.children}
        </MatureContext.Provider>
    )
}

export {MatureProvider, MatureContext};
