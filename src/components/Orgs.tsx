
export default function Orgs() {
    return (
        <section className="min-h-screen flex flex-col items-start justify-center px-6 mx-auto ">
            <div className="relative w-full hidden lg:flex justify-center my-16">
                <h2 className=' absolute -top-8 right-1/2 bg-bec-bg self-center uppercase w-fit px-1 text-5xl md:text-7xl  text-center '>Організатори</h2>
                <hr className="w-full h-1 bg-white border-none rounded" />
            </div>

            <h2 className='lg:hidden text-white self-center uppercase w-fit px-1 text-5xl md:text-7xl text-center mb-20'>Організатори</h2>

            <div className="grid grid-cols-12 w-full max-w-[1400px] gap-20 mx-auto p-10">
                <div className="col-span-5 flex items-center justify-center">
                    <img src="/best_logo.png" alt="logo" />
                </div>
                <div className="col-span-7 p-6">
                    <h4 className="text-center text-xl mb-4">Місія BEST — розвиток студентів.</h4>
                    <p className="text-sm">Проєкт реалізує волонтерська організація BEST Lviv, що є частиною Ради студентів технічних університетів Європи (Board of European Students of Technology). З 1989 року BEST забезпечує обмін знаннями та співробітництво між студентами, компаніями й університетами у Європі.
                        <br />
                        Наш осередок був сформований у 2002 році при Національному університеті "Львівська політехніка". Вже понад двадцять років BEST є дружньою спільнотою студентів, які зацікавлені в розвитку себе та суспільства загалом. На цей момент активних членів осередку налічується близько сотні.
                    </p>
                </div>
            </div>
            <p className="text-center text-xl italic font-bold mx-auto">Усі проєкти спрямовані на допомогу студентам на початку кар’єрного росту, розвиток їхніх навичок та об’єднанню активної молоді. Ось деякі з них:
            </p>

            <div className="grid grid-cols-12 items-center gap-5 my-8 max-w-[1400px] mx-auto">
                <div className="col-span-2">
                    <img src="/hack.svg" alt="hack" className="mx-auto" />
                </div>
                <div className="col-span-4">
                    <img src="/bci.svg" alt="bci" className="mx-auto" />
                </div>
                <div className="col-span-4">
                    <img src="/btw.svg" alt="btw" className="mx-auto" />
                </div>
                <div className="col-span-2">
                    <img src="/ejf.svg" alt="ejf" className="mx-auto" />
                </div>
            </div>

        </section>
    )
}