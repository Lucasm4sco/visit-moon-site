import { useState, useEffect } from "react"
import Depoiments from "./depoiments"

export default function SectionDepositions() {
    const [depoiments, setDepoiments] = useState<typeof Depoiments.desktop>([]);

    useEffect(() => {
        const handleDepoiments = () => {
            if (window.innerWidth < 600)
                return setDepoiments(Depoiments.mobile);

            setDepoiments(Depoiments.desktop);
        }

        handleDepoiments();
        window.addEventListener('resize', handleDepoiments);
        
    }, [])

    return (
        <section id="buy-a-ticket" className="pt-0 p-5 md:p-10 sm:pb-60">
            <div className="max-w-[1100px] m-auto text-center lg:text-start">
                <h2 className="text-[3.4rem] lg:text-[5.5rem] text-white font-medium p-2 lg:indent-20">
                    Depoimentos
                </h2>
            </div>

            <div className="container-limit pt-10 lg:pt-20 flex justify-center flex-wrap gap-10">
                {depoiments.map(depoiment => (
                    <figure key={depoiment.author} className="flex items-center gap-5 sm:gap-10 w-full sm:w-9/12 lg:w-[48%] min-w-[32rem] sm:min-w-[41rem] lg:max-w-[67rem] text-white p-7 border-2 border-gray-theme rounded-[1.1rem]">
                            <img className="w-2/12 h-full object-contain" src={depoiment.image} alt="" />
                            <div className="h-full flex flex-col justify-center gap-6 flex-grow">
                                <div className="flex whitespace-nowrap text-[2rem] sm:text-[2.4rem] xl:text-[3.2rem]">
                                    <h3>
                                        {depoiment.author}
                                    </h3>
                                    <span className="text-gray-theme indent-2 sm:indent-5">
                                        {depoiment.user}
                                    </span>
                                </div>
                                <blockquote className="text-[1.4rem] md:text-[2.4rem]">
                                    <p>
                                        &quot;{depoiment.depoiment}&quot;
                                    </p>
                                </blockquote>
                            </div>
                    </figure>
                ))}
            </div>
        </section>
    )
}
