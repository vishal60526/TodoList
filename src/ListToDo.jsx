import Returnitem from "./Returnitem";

const ListToDo = ({val,handleRemove}) => {
   let mystyle

    return (
      <div>
    
           { val.map((item)=>
               (<Returnitem handleRemove={handleRemove} itemDoc={item.doc} key={item.date} itemDate={item.date}> </Returnitem>)
            
            
    )}
    </div>
    );
}
export default ListToDo;