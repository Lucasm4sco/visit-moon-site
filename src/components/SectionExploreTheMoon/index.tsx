import { useState } from "react";

export default function SectionExploreTheMoon() {
  const [balloonsOpened, setBalloonsOpened] = useState({
    circle_1: false,
    circle_2: false,
    circle_3: false,
  });

  const handleBallons = (key: 'circle_1' | 'circle_2' | 'circle_3') => setBalloonsOpened(prev => ({ ...prev, [key]: true }));

  return (
    <section className="pt-60 p-[10vw] pb-80 lg:pr-0 lg:pl-0">
      <div className="max-w-[1100px] m-auto text-center lg:text-start">
        <h2 className="text-[3.4rem] lg:text-[5.5rem] text-white font-medium p-2 lg:indent-20">
          Explore a Lua
        </h2>
        <div className="flex flex-col items-center relative lg:flex-row">
          <div className="relative">
            <img
              src="/img/moon.png"
              className="w-[100%] max-w-[400px] mb-10 lg:m-8"
              alt="imagem da lua"
            />

            <div className="hidden lg:block absolute top-[16%] left-[56%] h-[14px] w-[14px] rounded-full">
              <button
                onClick={() => handleBallons("circle_1")}
                className="relative bg-white w-full h-full rounded-full z-10"
              >
                <span className="block absolute animate-ping bg-white rounded-full inset-0" />
              </button>

              <div className={`absolute -bottom-[12rem] w-0 h-[30rem] overflow-x-hidden ${balloonsOpened.circle_1 ? 'animate-ballon' : ''}`}>
                <span className="block absolute left-[.7rem] top-[12.7rem] w-[30rem] h-[1px] bg-white rotate-[163deg]"></span>
                <div
                  className="border border-white rounded-[15px] w-[41.5rem] absolute left-[30rem] p-8 top-0"
                >
                  <p className="text-[2.4rem] leading-10 text-white font-medium text-start">
                    A Lua é um satélite natural de tamanho muito inferior ao da
                    Terra, mas localizado relativamente próximo ao planeta,
                    sendo o único satélite natural presente na órbita da Terra.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute top-[47%] left-[65%] h-[14px] w-[14px] rounded-full">
              <button
                onClick={() => handleBallons("circle_2")}
                className="relative bg-white w-full h-full rounded-full z-10"
              >
                <span className="block absolute animate-ping bg-white rounded-full inset-0" />
              </button>
              <div className={`absolute -bottom-[18.2rem] w-0 h-[30rem] overflow-x-hidden ${balloonsOpened.circle_2 ? 'animate-ballon' : ''}`}>
                <span className="block absolute left-[.7rem] top-[14.6rem] w-[40rem] h-[1px] bg-white rotate-[-170deg]"></span>
                <div
                  className="border border-white rounded-[15px] w-[42.9rem] absolute left-[40.4rem] p-9 top-1/4"
                >
                  <p className="text-[2.4rem] leading-10 text-white ">
                    A primeira pessoa a pisar na lua foi Neil Armstrong em 20 de
                    julho de 1969. Buzz Aldrin fez o feito logo em seguida, 19
                    minutos depois. Os astronautas viajaram na Apollo 11, e suas
                    pegadas na lua mudaram a história para sempre.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute top-[78%] left-[28%] h-[14px] w-[14px] rounded-full">
              <button
                onClick={() => handleBallons("circle_3")}
                className="relative bg-white w-full h-full rounded-full z-10"
              >
                <span className="block absolute animate-ping bg-white rounded-full inset-0" />
              </button>
              <div className={`absolute -bottom-[32.4rem] w-2 h-[34rem] overflow-x-hidden ${balloonsOpened.circle_3 ? 'animate-ballon' : ''}`}>
                <span className="block absolute left-[-2rem] top-[9.6rem] w-[30rem] h-[1px] bg-white rotate-[-145deg]"></span>
                <div
                  className="border border-white rounded-[15px] w-[48.2rem] absolute left-[25.2rem] p-9 top-1/3"
                >
                  <p className="text-[2.4rem] leading-10 text-white ">
                    Assim como a Terra, a lua se subdivide em três partes:
                    crosta, manto e núcleo, sendo que, em virtude de um maior
                    resfriamento, a crosta da lua é bem dura.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-white pt-6 p-4 pb-6 rounded-[15px] lg:hidden">
            <p className="text-[1.6rem] leading-6 text-white font-medium">
              A Lua é um satélite natural de tamanho muito inferior ao da Terra,
              mas localizado relativamente próximo ao planeta, sendo o único
              satélite natural presente na órbita da Terra.
            </p>
          </div>
          <div className="border border-white pt-6 p-4 pb-6 rounded-[15px] mt-5 mb-5 lg:hidden">
            <p className="text-[1.6rem] leading-6 text-white ">
              A primeira pessoa a pisar na lua foi Neil Armstrong em 20 de julho
              de 1969. Buzz Aldrin fez o feito logo em seguida, 19 minutos
              depois. Os astronautas viajaram na Apollo 11, e suas pegadas na
              lua mudaram a história para sempre.
            </p>
          </div>
          <div className="border border-white pt-6 p-4 pb-6 rounded-[15px] lg:hidden">
            <p className="text-[1.6rem] leading-6 text-white">
              Assim como a Terra, a lua se subdivide em três partes: crosta,
              manto e núcleo, sendo que, em virtude de um maior resfriamento, a
              crosta da lua é bem dura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
