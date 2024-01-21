
import { useState } from "react";
import Container from "./Container"
import Inputs from "./Inputs"
import ListToDo from "./ListToDo"
function App() {


  const [val, setVal] = useState([
  
  ]);
  
  function handeAddbtn(newDoc,newDate) {
    let newval = [...val, { doc: newDoc, date: newDate }]
    setVal(newval);
     }
  function handleRemove(itemDoc, itemDate) {
 let newval=val.filter((items)=>(items.doc!==itemDoc && items.date!==itemDate ))
 setVal(newval);


  }
  return (
    <Container>
      <h1>toDo App</h1>
      <Inputs handleAdd={handeAddbtn}></Inputs>
      <ListToDo val={val} handleRemove={handleRemove}></ListToDo>
    </Container>
  )
}

export default App;
