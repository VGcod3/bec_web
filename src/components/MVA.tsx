
export default function MVA() {
    return (
        <div className="flex flex-col gap-20 justify-center h-full text-left px-10 max-w-5xl mx-auto">
            <div >
                <h2 className='uppercase text-5xl md:text-7xl text-left text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-bec-orange'>Місія</h2>
                <p className='text-xl md:text-2xl mx-auto  mb-16'>Розвиток студентів інженерів</p>
            </div>
            <div className="flex justify-end flex-col items-end ">
                <h2 className='uppercase text-5xl md:text-7xl text-right  text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-bec-orange'>Візія</h2>
                <p className='text-xl md:text-2xl w-fit max-w-sm text-right mb-16'>Реалізований інженерний потенціал України</p>
            </div>
            <div className="flex justify-center flex-col">
                <h2 className='uppercase relative top-6 w-fit left-[170px] bg-bec-bg text-5xl md:text-7xl text-left text-bec-orange'>Ціль</h2>
                <p className='text-xl md:text-2xl mx-auto border-2 border-bec-orange max-w-4xl p-10'>Основною ціллю змагань є створення середовища, яке сприяє навчанню, розвитку навичок та творчого мислення у студентів, зацікавлених в інженерії. Проєкт надає можливість учасникам під час роботи в команді, застосувати весь свій креативний потенціал задля розв’язання реальних технічних проблем.
                    <p className='text-xl md:text-2xl mx-auto mt-6 text-bec-orange text-center'>Майбутнє за інженерами</p>
                </p>
            </div>
        </div>
    )
}