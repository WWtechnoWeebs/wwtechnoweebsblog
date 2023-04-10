import "../styleFolder/menu.css"
import { useState } from "react";

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen(prevIsOpen => !prevIsOpen);
      }
    

    return ( 
        <div className="container" onClick={handleToggle}>
            <div className={`menu__toggle ${isOpen ? 'open' : ''}`}>
                <span className="fa fa-sharp fa-solid fa-plus"/>
            </div>
            <ul className={`menu__list ${isOpen ? 'open' : ''}`}>
                <li className="menu__item">
                    <a href="/"><i className="fa fa-pinterest" /></a>
                </li>
                <li className="menu__item">
                    <a href="/"><i className="fa fa-tumblr"/></a>
                </li>
                <li className="menu__item">
                    <a href="/"><i className="fa fa-instagram"/></a>
                </li>
            </ul>
        </div>
     );
}

export default Menu;