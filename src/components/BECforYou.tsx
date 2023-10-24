export default function BECforYou() {
    return (
        <section className="min-h-screen flex flex-col items-start justify-center px-6 mx-auto ">
            <div className="hidden relative w-full xl:flex justify-center mb-16 mt-20">
                <h2 className=' absolute -top-8 right-1/5 bg-bec-bg self-center uppercase w-fit px-1 text-5xl md:text-7xl  text-center '>Чому BEC це про вас..</h2>
                <hr className="w-full h-1 bg-bec-orange border-none rounded" />
            </div>
            <h2 className='xl:hidden right-1/5 bg-bec-bg self-center uppercase w-fit px-1 text-5xl md:text-7xl  text-center '>Чому BEC це про вас..</h2>

            <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto">

                <div className="flex justify-evenly flex-wrap mt-14 gap-14">
                    <div className="relative justify-between col-span-1 flex flex-col border-2 border-bec-orange pb-14 md:w-[500px]">
                        <div className="flex flex-col h-full justify-evenly">
                            <div className="relative flex text-bec-orange gap-2 px-1 -mt-2 text-4xl -top-6 bg-bec-bg w-fit left-4">
                                КОМПАНІЯ
                                <img src="/case.svg" alt="case" />
                            </div>
                            <p className=" px-6 font-bold text-xl leading-none mt-5">Спільнота молодих інженерів</p>
                            <p className=" px-6 text-md pl-10">Інженерні змагання залучають талановитих студентів, які проявляють інтерес до технічних наук та інновацій. Це дозволяє компаніям звернути увагу на потенційних майбутніх співробітників.</p>
                            <p className=" px-6 font-bold text-xl leading-none mt-5">Промоція бренду</p>
                            <p className=" px-6 text-md pl-10">Партнерство з BEC надає можливість компаніям підвищити свою впізнаваність та популярність серед молоді. Залучення до волонтерської діяльності також підвищує позитивний імідж.</p>
                            <p className=" px-6 font-bold text-xl leading-none mt-5">Нетворкінг з учасниками</p>
                            <p className=" px-6 text-md pl-10">Після завершення випробувальної частини змагань буде проводитись нетфоркінг. Це подія під час якої студенти та компанії мають змогу неформально поспілкуватись, обмінятись ідеями та досвідом, що дозволяє налагодити звязки з молоддю та позиціонує компанію відкритою для людей.</p>
                        </div>
                        <p className="px-6 border-t-2 bottom-0 text-lg border-bec-orange pt-4 mt-4 text-center">Партнерство з BEC є вигідним для компаній, які прагнуть залучити талановитих молодих фахівців, залучитись до волонтерської діяльності та активно впливати на розвиток студентської спільноти.</p>
                    </div>
                    <div className="relative justify-between col-span-1 flex flex-col border-2 border-bec-orange pb-14 md:w-[500px] ">
                        <div className="flex flex-col h-full justify-evenly">
                            <div className="relative flex text-bec-orange gap-2 px-1 text-4xl -top-6 bg-bec-bg w-fit left-4">
                                СТУДЕНТ
                                <img src="/hat.svg" alt="hat" />
                            </div>
                            <p className=" px-6 font-bold text-xl leading-none mt-5">Практичний досвід</p>
                            <p className=" px-6 text-md pl-10">Участь у змаганнях надає можливість студентам збагатити інженерний досвід та навички на практиці. Вирішення реальних технічних завдань допомагає закріпити теоретичні знання та втілити власні ідеї.</p>
                            <p className=" px-6 font-bold text-xl leading-none mt-5">Командна робота</p>
                            <p className=" px-6 text-md pl-10">Участь у командній роботі сприяє обміну креативними ідеями, набуттю цінного досвіду і розвитку комунікаційних навичок.</p>
                            <p className=" px-6 font-bold text-xl leading-none mt-5">Кар’єрний розвиток</p>
                            <p className=" px-6 text-md pl-10">Тренінги та завдання від компанії, нетворкінг, менторство досвідчених працівників, вирішення комплексних реальних проблем - це все дозволяє набути досвід та стане хорошим стартом власного кар’єрного шляху.</p>
                            <p className=" px-6 font-bold text-xl leading-none mt-5">Подолання страху челенджів</p>
                            <p className=" px-6 text-md pl-10">Страх перед викликами — це річ, яка змушує багатьох талановитих студентів не проявляти себе. Завдання змагань дозволяють зіткнутися з реальними інженерними викликами та вчитися ефективно розв'язувати проблеми.</p>
                        </div>
                        <p className="px-6 border-t-2 bottom-0 text-center text-lg border-bec-orange pt-4 mt-4">Інженерні змагання є чудовою можливістю для студентів проявити себе, поглибити свої знання, розвинути навички, збагатитися цінним досвідом та знайти нові можливості і знайомства.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}