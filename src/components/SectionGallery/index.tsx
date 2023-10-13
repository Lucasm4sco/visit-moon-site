export default function SectionGallery() {
    return (
        <section >
            <div className="max-w-[1100px] m-auto text-center lg:text-start">
                <h2 className="text-[3.4rem] lg:text-[5.5rem] text-white font-medium p-2 lg:indent-20">
                    Galeria
                </h2>
            </div>

            <div className="container-limit pt:10 lg:pt-20 relative min-h-[200px] flex justify-items-center justify-center overflow-hidden">
                <div className="group relative m-20">
                    <img
                        className="inline-block min-w-[200px] scale-[0.95] transition-all group-hover:scale-100"
                        src="/img/gallery-2.png"
                        alt=""
                    />

                    <img
                        className="absolute left-full inline-block min-w-[200px] scale-[0.95] h-full"
                        src="/img/gallery-1.png"
                        alt=""
                    />
                   
                    <img
                        className="absolute right-full inline-block min-w-[200px] scale-[0.95] h-full"
                        src="/img/gallery-3.png"
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}
