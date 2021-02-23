import React from 'react';
import {AiFillHeart , FaReact} from 'react-icons/all';

const footer = () => {
    return (
        <footer>
            <p>Made with <AiFillHeart/> and <FaReact/> by Abdessamad Bourhjoul.</p>
            <p style = {{fontSize : '10px'}}>Double Click to set a reminder for a task.</p>
        </footer>
    )
}

export default footer
