import {useEffect, useRef} from 'react';
import './style.css'
import sun from "./sun.svg";
import moon from "./moon.svg";
import {useLocalStorage} from "../../utils/useLocalStorage";

const BtnDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'light');
    const btnRef = useRef(null)

    useEffect(()=>{
        if(darkMode === 'dark') {
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn--active');
        } else  {
            document.body.classList.remove('dark');
            btnRef.current.classList.remove('dark-mode-btn--active');
        }
    }, [darkMode]);
    const toggleDarkMode = () => {
        setDarkMode((currentValue)=>{
            return currentValue === 'light' ? 'dark' : 'light';
        });
    }
    return (
        <button ref={btnRef} className="dark-mode-btn" type="button" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    );
};

export default BtnDarkMode;