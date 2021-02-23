import Button from './Button';
const Header = ({title,onAdd,showaddtask}) => {
    const Onclick = () =>{
         onAdd();
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick = {Onclick} text = {showaddtask ? 'Close' : 'Add'}/>
        </header>
    )
}


export default Header
