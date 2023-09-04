import Carousel from "./CarouselAbout";

export default function AboutEbec() {
    return (
        <section className="min-h-screen flex flex-col items-start justify-center max-w-7xl px-6 mx-auto " id='about'>
            <h2 className='uppercase text-5xl md:text-7xl text-left px-10'>BEC</h2>
            <h3 className='text-4xl md:text-5xl text-bec-orange mx-auto text-center mb-16'>BEST Engineering Competition</h3>
            <div className="grid grid-cols-11 gap-8 lg:gap-11 items-center">
                <div className="col-span-11 lg:col-span-5 px-10">
                    <Carousel />
                </div>

                <div className="col-span-11 lg:col-span-6 grid gap-5">
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto ">
                        Це виклик для молодих інженерів, що надає можливість використати свої знання і навички для розв'язання реальних завдань.
                    </p>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto ">
                        Суть змагань полягає в пошуку ідей
                        і цікавих рішень в одній із двох категорій: <span className="font-bold">Case Study (CS) та Innovative Design (ID).</span>
                    </p>


                </div>
            </div>
        </section>
    )
}