import Carousel from "./CarouselHistory";

export default function AboutEbec() {
    return (
        <section className="min-h-screen flex flex-col items-start justify-center max-w-7xl my-10 px-6 mx-auto ">
            <h2 className='uppercase text-5xl  md:text-7xl text-bec-orange mx-auto text-center mb-16'>Історія змагань</h2>
            <div className="grid grid-cols-11 gap-8 lg:gap-11 items-center">


                <div className="col-span-11 lg:col-span-6 grid gap-5">
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto ">
                        Перші змагання у Львові відбулися 27 квітня 2009 року і мали назву BEC – BEST Engineering Competition. Започаткування проєкту означало створення платформи для студентів-інженерів, які хотіли змінювати себе та суспільство шляхом втілення в життя власних інноваційних ідей. У 2013 році назва була змінена на European BEST Engineering Competition, тобто EBEC.
                    </p>
                </div>
                <div className="col-span-11 lg:col-span-5 px-10">
                    <Carousel />
                </div>
                <div className="col-span-12 text-xl md:text-2xl  gap-5 flex-col flex">
                    <p>
                        На превеликий жаль, збройна агресія Росії внесла свої правки в історію цього проєкту й у 2022-му він не відбувся.

                    </p>
                    <p className="font-bold">
                        Цього року проєкт повертається під старою назвою, тобто BEST Engineering Competition.
                    </p>
                </div>
            </div>
        </section>
    )
}