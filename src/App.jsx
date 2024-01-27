
import { useEffect, useState } from "react";

import Inputs from "./Inputs"
import ListToDo from "./ListToDo"
import ConstApi from "./contextapi/ConstApi";
function App() {


  const [val, setVal] = useState([

  ]);
 useEffect(()=>{
  const val=JSON.parse(localStorage.getItem("vals"));
  if(val && val.length>0){
setVal(val)
  }
 },[])
 useEffect(()=>{
  localStorage.setItem("vals",JSON.stringify(val));
  }
 ,[val])
 
  return (
    <ConstApi.Provider value={{val,setVal}}>
      <h1>toDo App</h1>
      <Inputs></Inputs>
      <ListToDo ></ListToDo>
    </ConstApi.Provider>
  )
}

export default App;
