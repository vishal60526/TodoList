import { useCallback, useContext, useState } from 'react'
import style from './Returnitem.module.css'
import ConstApi from './contextapi/ConstApi'

const Returnitem = ({ itemDoc, itemDate }) => {
    const { val, setVal } = useContext(ConstApi);
    const [edits, isedit] = useState(false)
    const [text, setText] = useState(itemDoc);
    function handleRemove(itemDoc, itemDate) {
        let newval = val.filter((items) => (items.doc !== itemDoc && items.date !== itemDate))
        setVal(newval);
    }
    function onedit(text) {
        const newval = val.map((items) => {
            if (items.date == itemDate) {
                items.doc = text;
                return items
            }
            else {
                return items;
            }
        })
        setVal(newval);

    }
    return (

        <>
            <div className={style.main}>
                <div> {(edits) ?
                    <input value={text} onChange={
                        (e) => {
                            setText(e.target.value)
                        }
                    } type="text" />
                    : itemDoc}</div>
                <div>{itemDate}</div>
                <div> <button type="button" onClick={() => {
                    isedit(!edits)
                    { if (edits == true) onedit(text) }

                }}>
                    {edits ? 'save' : 'edit'}</button></div>
                <div><button type='button' onClick={() => handleRemove(itemDoc, itemDate)} className={style.btn} >Remove</button></div>


            </div>

        </>
    );
}
export default Returnitem;