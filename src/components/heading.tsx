import { useState } from "react";

export default function Heading() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <header className="px-[30px] py-[30px] md:px-[72px] md:py-[60px]">
            <div className="container-limit">
                <nav className="flex items-center justify-between" aria-label="Global">
                    <a href="#">
                        <span className='text-[4.4rem] text-highlighted font-normal'>visit moon</span>
                    </a>
                    {
                        isNavOpen && (
                            <div className="fixed bg-highlighted top-0 left-0 right-0 bottom-0 flex justify-center text-center">
                                <ul className="self-center">
                                    <li className="m-14">
                                        <a href="#" className="p-14 text-[3.5rem] text-white font-normal hover:font-bold">Sobre a lua</a>
                                    </li>
                                    <li className="m-14">
                                        <a href="#" className="p-14 text-[3.5rem] text-white font-normal hover:font-bold">Fila de espera</a>
                                    </li>
                                    <li className="m-14">
                                        <a href="#" className="p-14 text-[3.5rem] text-white font-normal hover:font-bold">Comprar passagem</a>
                                    </li>
                                    <li className="m-14">
                                        <a href="#" className="p-14 text-[3.5rem] text-white font-normal hover:font-bold">Galeria</a>
                                    </li>
                                    <li className="m-14">
                                        <a href="#" className="p-14 text-[3.5rem] text-white font-normal hover:font-bold">Contato</a>
                                    </li>
                                </ul>
                            </div>
                        )
                    }

                    <ul className='flex'>
                        <li>
                            <a href="#" className="p-12 text-[2.2rem] text-white font-normal hover:font-bold">Sobre a lua</a>
                        </li>
                        <li>
                            <a href="#" className="p-12 text-[2.2rem] text-white font-normal hover:font-bold">Fila de espera</a>
                        </li>
                        <li>
                            <a href="#" className="p-12 text-[2.2rem] text-white font-normal hover:font-bold">Comprar passagem</a>
                        </li>
                        <li>
                            <a href="#" className="p-12 text-[2.2rem] text-white font-normal hover:font-bold">Galeria</a>
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