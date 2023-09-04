
export default function AboutEbec() {
    return (
        <section className="min-h-screen flex flex-col items-start justify-center px-6 mx-auto ">
            <div className="relative w-full hidden lg:flex justify-center mb-16">
                <h2 className=' absolute -top-8 right-1/5 bg-bec-bg self-center uppercase w-fit px-1 text-5xl md:text-7xl  text-center '>Структура змагань</h2>
                <hr className="w-full h-1 bg-bec-orange border-none rounded" />
            </div>

            <h2 className='md:hidden block bg-bec-bg self-center uppercase w-fit px-1 text-5xl md:text-7xl  text-center '>Структура змагань</h2>

            <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto">
                <h3 className="text-lg md:text-xl max-w-4xl text-center font-normal">Традиційно формат BEC складається з
                    <span className="font-bold"> Case Study (CS) </span>
                    та<span className="font-bold"> Innovative Design (ID)</span>,
                    що складаються з трьох етапів.
                    <br />
                    Учасники можуть взяти участь в одній із двох категорій на вибір.</h3>
                <div className="flex justify-evenly flex-wrap mt-14 ">
                    <div className="col-span-1 flex justify-between flex-col gap-2 xl:border-r-2 p-8 xl:border-bec-orange md:w-[500px] ">
                        <h3 className="text-bec-orange text-4xl text-center">
                            Case Study
                        </h3>
                        <p className="text-xl text-center">
                            Це завдання, суть якого полягає в розв’язанні теоретичної проблеми.
                        </p>
                        <ul className="list-disc list-inside text-lg gap-3 flex flex-col">
                            <li>
                                <span className="font-bold">Перший етап </span>
                                – проаналізувати, дослідити й обміркувати інформацію надану в завданні.
                            </li>
                            <li>
                                <span className="font-bold">Другий етап</span> – знайти рішення, що відповідає сценарію з реальними ресурсами без конструювання будь-якого пристрою чи створення комп’ютерної моделі
                            </li>
                            <li>
                                <span className="font-bold">Третій етап</span> – представити його перед суддями, учасниками, організаторами та партнерами змагань.
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1 flex justify-between flex-col gap-2 p-8 md:w-[500px] ">
                        <h3 className="text-bec-orange text-4xl text-center">
                            Innovative Design
                        </h3>
                        <p className="text-xl text-center">
                            Це завдання, метою якого є створення інноваційного рішення для розв’язання актуальної проблеми.
                        </p>
                        <ul className="list-disc list-inside text-lg gap-3 flex flex-col">
                            <li>
                                <span className="font-bold">Перший етап </span>
                                – придумати концепт нового або покращеного наявного прототипу приладу, який розв’язує певну проблему, описану в завданні.
                            </li>
                            <li>
                                <span className="font-bold">Другий етап</span> – створити комп'ютерну модель цього прототипу або сконструювати його з підручних матеріалів та інструментів.
                            </li>
                            <li>
                                <span className="font-bold">Третій етап</span> – представити свій винахід, розповівши як саме за допомогою нього можна розв'язати задану проблему та як імплементувати його на ринок.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}