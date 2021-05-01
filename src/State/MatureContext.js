import React, {useState, createContext, useEffect, useRef} from 'react'
import fetchProgress from 'fetch-progress';

const MatureContext = createContext();

const MatureProvider = (props) => {
    const initialRender = useRef(true)

    const [request, setrequest] = useState([])
    const [sortOrder, setsortOrder] = useState('Popularno')
    const [numisselected ,setnumisselected] = useState(0) //remove
    const [matureList, setmatureList] = useState([])
    const [matureLoaded, setmatureLoaded] = useState(false)
    const [processing, setprocessing] = useState(0)
    const [percentage, setpercentage] = useState(0)
    const [downloaded, setdownloaded] = useState(0)
    const {REACT_APP_IP} = process.env

    useEffect(() => {
        let isError = 0
        for (const r of request){
            if (r.dvijerazine && !r.razinaA && !r.razinaB){
                isError ++
            }
        }

        if(initialRender.current){
            initialRender.current = false;
        }else if (isError===0){
            setprocessing(1)
            var result = {};
            for (var i = 0; i < request.length; i++) {
                result[request[i].predmet] = {
                    dvijerazine: request[i].dvijerazine,
                    razinaA: request[i].razinaA,
                    razinaB: request[i].razinaB,
                    years: request[i].years
                };
            }
            fetch(`${REACT_APP_IP}:5000/matured`,{
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(result)
            })
            .then(
                fetchProgress({
                    onProgress(progress){
                        setprocessing(0)
                        setpercentage(progress.percentage)
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
                setpercentage(0)
                setdownloaded(1)
                setTimeout(function(){ setdownloaded(0) }, 5000);
              });

        }
    }, [REACT_APP_IP, request])

    useEffect(() => {
        fetch(`${REACT_APP_IP}:5000/mature/${sortOrder}`)
            .then(res => res.json())
            .then(data => setmatureList(data))
            .then(setmatureLoaded(true))
            .catch(err => {console.log(err); setmatureLoaded(false)})
            
    }, [REACT_APP_IP, sortOrder])

    return(
        <MatureContext.Provider value={{
            download: [request, setrequest], 
            sort: [sortOrder, setsortOrder],
            isselectedn: [numisselected ,setnumisselected],
            mList: [matureList, setmatureList],
            mLoaded: [matureLoaded, setmatureLoaded],
            percentageDwnl: [percentage, setpercentage],
            isprocessing: [processing, setprocessing],
            isdwnld:[downloaded, setdownloaded],
        }} >
            {props.children}
        </MatureContext.Provider>
    )
}

export {MatureProvider, MatureContext};
