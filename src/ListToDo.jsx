import { useContext } from "react";
import Returnitem from "./Returnitem";
import ConstApi from "./contextapi/ConstApi";

const ListToDo = () => {
const {val}=useContext(ConstApi);

    return (
      <div>
    
           { val.map((item)=>
               (<Returnitem itemDoc={item.doc} key={item.date} itemDate={item.date}> </Returnitem>)
            
            
    )}
    </div>
    );
}
export default ListToDo;