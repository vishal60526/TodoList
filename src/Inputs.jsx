import { useContext, useState } from 'react';
import style from './Inputs.module.css'
import ConstApi from './contextapi/ConstApi';
function Inputs() {
    const {val,setVal} = useContext(ConstApi)
   
    const [currDoc, setDoc] = useState("");
    const [currDate, setDate] = useState("");

    function handleDoc(event) {
        setDoc(event.target.value)
    }
    function handleDate(event) {
        setDate(event.target.value)
    }

    function handleAdd() {
        setVal((val) => {
           return [...val, {id:currDoc, doc:currDoc, date:currDate }]
        })

        setDate("")
        setDoc("")
    }


    return (
        <>
            <input value={currDoc} onChange={(handleDoc)} type="text" />
            <input value={currDate} onChange={(handleDate)} type="date" name="" id="" />
            <button onClick={handleAdd}>Add</button>
        </>
    );
}
export default Inputs;