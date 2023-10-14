import { useState } from "react";
import styles from './menu.module.css'

export default function Heading() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavBurguer = () => setIsNavOpen(prev => !prev);

    return (
        <header className="px-[30px] py-[30px] md:px-[72px] md:py-[60px]" id="visit-moon">
            <div className="container-limit">
                <nav className="flex items-center justify-between " aria-label="Global">
                    <a href="#visit-moon" className="flex">
                        <span className="text-[4.4rem] text-highlighted font-medium">visit moon</span>
                    </a>
                    <div className={styles.menu_mobile}>
                        <input type="checkbox" checked={isNavOpen} onChange={handleNavBurguer} aria-label="open-menu" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul className={styles.menu_container}>
                            <li className="m-14">
                                <a href="#about-the-moon" onClick={handleNavBurguer} className="p-2 text-[2rem] text-white font-normal hover:font-bold">Sobre a lua</a>
                            </li>
                            <li className="m-14">
                                <a href="#orders" onClick={handleNavBurguer} className="p-2 text-[2rem] text-white font-normal hover:font-bold">Fila de espera</a>
                            </li>
                            <li className="m-14">
                                <a href="#" onClick={handleNavBurguer} className="p-2 text-[2rem] text-white font-normal hover:font-bold">Comprar passagem</a>
                            </li>
                            <li className="m-14">
                                <a href="#gallery" onClick={handleNavBurguer} className="p-2 text-[2rem] text-white font-normal hover:font-bold">Galeria</a>
                            </li>
                            <li className="m-14">
                                <a href="#" onClick={handleNavBurguer} className="p-2 text-[2rem] text-white font-normal hover:font-bold">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <ul className='hidden xl:flex'>
                        <li>
                            <a href="#about-the-moon" className="p-12 text-[2.2rem] text-white font-normal hover:font-bold">Sobre a lua</a>
                        </li>
                        <li>
                            <a href="#orders" className="p-12 text-[2.2rem] text-white font-normal hover:font-bold">Fila de espera</a>
                        </li>
                        <li>
                            <a href="#" className="p-12 text-[2.2rem] text-white font-normal hover:font-bold">Comprar passagem</a>
                        </li>
                        <li>
                            <a href="#gallery" className="p-12 text-[2.2rem] text-white font-normal hover:font-bold">Galeria</a>
                        </li>
                        <li>
                            <a href="#" className="p-12 text-[2.2rem] text-white font-normal hover:font-bold">Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}