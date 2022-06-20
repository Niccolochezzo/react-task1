import { useState } from 'react';
import Button from './Button';
import './Input.css';
import Logo from './send.png';

export default function Input(params) {

    const [state, setState] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        alert(state);
        
    }

    return (
        <form className='form2' onSubmit={handleSubmit}>
            <div className='form1'>
                <label className='label1'>Rooms</label>
                <input onChange={(e) => setState(e.target.value)} value={state} className='input1' placeholder="rooms"></input>
            </div>
            <Button type='submit' imageUrl={Logo} cusClass='Btn' text='Submit'/>
        </form>
    )
}