import { useState } from "react"

export default function Batsman(){
    const [runs,setRuns] = useState(0);
    const [sixes, setSixes]= useState(0);

    const handleSingles =()=>{
        const updateRuns= runs+1;
        setRuns(updateRuns);
    }

    const handlDouble= ()=>{
        const updateRuns=runs+2;
        setRuns(updateRuns);
    }


    const handleFour =()=>{
        const updateRuns=runs+4;
        setRuns(updateRuns);
    }

    const handlSix =()=>{
        const updateRuns= runs+6;
        const updatedSixes= sixes+1;
        setSixes(updatedSixes);
        setRuns(updateRuns);
    }



    return(
        <div>
            <h3>Player: Bangla Batsman</h3>
            <h1>Score:{runs}</h1>
            <h1>Sixes:{sixes}</h1>
            <button onClick={handleSingles}>singles</button>
            <button onClick={handlDouble}>double</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handlSix}>six</button>
        </div>
    )
}