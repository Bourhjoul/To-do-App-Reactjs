import React from 'react'
import PropTypes from 'prop-types';
import { FaPlus} from "react-icons/fa";
import {FaMinus} from "react-icons/fa";


const Button = ({onClick, text}) => {



    return (<button onClick={onClick} className='btn'>{text === 'Add' ? <FaPlus/> : <FaMinus/>}</button>)
    
    
}
Button.propTypes ={
    Onclick: PropTypes.func,
}
export default Button
