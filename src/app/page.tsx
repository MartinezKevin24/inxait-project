import Link from "next/link";

export default function Home() {
  return (
    <main className="absolute top-0">
      <section>
        <div className='h-screen w-screen overflow-hidden relative flex items-center justify-start'>
          <div className='after:opacity-35 h-screen bg-red-800 after:w-screen relatve after:h-full after:absolute after:block after:bg-black after:top-0 after:content-[""] z-0 '>
            <video src={'/videos/hero_video.mp4'} className='absolute grayscale w-screen h-screen object-cover' autoPlay loop muted preload="none"/>
          </div>
          <div className='absolute z-50 text-white w-full flex justify-center px-6 md:px4 pt-6 md:pt-0'>
            <div className='container flex flex-col gap-4 md:gap-12'>
              <div className='max-w-[500px] flex flex-col gap-6'>
                <h1 className='text-white text-6xl font-bold leading-[70px]'>¡Es tu momento de ganar con <span className='bg-blue px-2'>BMW!</span></h1>
                <h2 className='leading-[28px] text-lg'>Solo necesitas registrarte para obtener tu código y participar en el sorteo especial de BMW para Bogotá. ¡No te lo pierdas!</h2>
              </div>
              <div className='bg-blue-ligth text-black font-black text-2xl uppercase hover:bg-blue hover:cursor-pointer hover:text-white w-full flex justify-center md:w-fit'>
                <Link href={"/registration"} className='font-bold text-lg text-black w-full py-4 px-8 flex justify-center uppercase relative group hover:cursor-pointer bg-white overflow-hidden'>
                  <span className='block transform transition-all duration-700 group-hover:w-full w-0 h-full absolute bg-blue top-0 left-0 z-0'/>
                  <span className='z-10 text-black ease-in-out group-hover:text-white transition-colors delay-200'>Participa ahora</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
