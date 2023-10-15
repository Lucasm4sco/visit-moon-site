import tickets from "./tickets";

export default function SectionBuyTicket() {
    return (
        <section id="buy-a-ticket" className="pt-60 p-10 pb-60 lg:pb-80">
            <div className="max-w-[1100px] m-auto text-center lg:text-start">
                <h2 className="text-[3.4rem] lg:text-[5.5rem] text-white font-medium p-2 lg:indent-20">
                    Passagens disponíveis
                </h2>
            </div>

            <div className="container-limit pt-10 lg:pt-20 min-h-[200px] flex justify-center flex-wrap gap-10">
                {tickets.map(ticket => (
                    <div key={ticket.title} className="w-full sm:w-1/3 min-w-[32rem] sm:min-w-[41rem] max-w-[44rem] text-white p-5 sm:p-10 border-2 border-gray-theme rounded-[1.1rem]">
                        <div className="flex justify-between items-baseline">
                            <h3 className="text-[2.4rem] sm:text-[3.4rem]">{ticket.title}</h3>
                            <p className="text-[2rem] sm:text-[2.4rem]">{ticket.cost.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })}</p>
                        </div>
                        <ul className="flex-grow w-full m-5 sm:m-10 p-1 pl-8 sm:pl-10 pr-4 text-[1.5rem] sm:text-[2rem] leading-8">
                            {ticket.values.map(value => (
                                <li key={ticket.title + '-' + value.option} className={`mb-5 sm:mb-10 ${value.include ? '' : 'text-gray-theme'}`}>
                                    {value.option}
                                </li>
                            ))}
                        </ul>

                        <a href="#" className="flex items-center p-1 text-[2.4rem] sm:text-[3.4rem]">
                            <span className="w-[33px] h-[33px]  sm:w-[45px] sm:h-[45px] border-2 rounded-full">
                                <span className="block w-full h-full relative animate-bounce">
                                    <span
                                        className="
                                            block absolute bg-white w-[2px] h-[27rem] sm:h-[40rem] left-1/2 translate-x-[-50%] bottom-1/2
                                            before:block before:absolute before:bg-white before:w-[2px] before:h-[12px] before:left-[-4px] before:top-[96%] before:sm:top-[98%] before:rotate-[-45deg]
                                            after:block after:absolute after:bg-white after:w-[2px] after:h-[12px] after:left-[4px] after:top-[96%] after:sm:top-[98%] after:rotate-[45deg]
                                        "
                                    />
                                </span>
                            </span>
                            <p className="indent-10">
                                Reservar
                            </p>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}
