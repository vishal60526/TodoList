import { useState } from 'react';
import style from './Inputs.module.css'
function Inputs({handleAdd}){
    const[currDoc,setDoc]=useState("");
    const[currDate,setDate]=useState("");

    function handleDoc(event){
        setDoc(event.target.value)
    }
    function handleDate(event){
      setDate(event.target.value);
    }
    function handeOnAdd(){
        handleAdd(currDoc,currDate);
        setDoc(" ");
        setDate(" ");
    }
    return (
        <>
<input value={currDoc} onChange={(handleDoc)} type="text" />
<input value={currDate} onChange={(handleDate)} type="date" name="" id="" />
<button onClick={handeOnAdd}>Add</button>
        </>
    );
}
export default Inputs;