import { React, useState } from 'react';
import Select from 'react-select';
import './Dropdown.css';
function Dropdown ()
{
    const colors = [
        {
            label: "lime",
        },
        {
            label: "lavender",
        },
        {
            label: "crimson",
        },
        {
            label: "darkblue",
        },
        {
            label: "teal",
        },
        {
            label: "rebeccapurple",
        },
        {
            label: "ghostwhite",
        },
        {
            label: "aquamarine",
        },
        {
            label: "aliceblue",
        },
    ]

    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }
    return (
        <div className='dropdownWrapper'>
            <style>
            {
                `.button 
                {
                 background-color:` + color + ';'
                }
            </style>

            <center>
            <h1>Color Changer</h1>
            </center>
            
            <div className="dropdownContainer">
                <Select options={colors} onChange={click} className='select' placeholder="Select Color"></Select>
            </div>
            <div className="block">
                <center>
                    <button className='button'></button>
                </center>
            </div>
        </div>

    );
}
export default Dropdown;