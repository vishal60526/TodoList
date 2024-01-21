import style from './Returnitem.module.css'
const Returnitem = ({ itemDoc, itemDate ,handleRemove}) => {
    return (
        <>
            <div className={style.main}>
         <div>{itemDoc}</div>
         <div>{itemDate}</div>
         <div><button onClick={()=>handleRemove( itemDoc, itemDate)} className={style.btn} >Remove</button></div>

            </div>

            </>
            );
}
            export default Returnitem;