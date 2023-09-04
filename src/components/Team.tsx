// const ORG = () => {

// }

export default function Team() {
    return (
        <section className="min-h-screen flex flex-col items-start justify-center px-6 mx-auto ">
            <div className="relative w-full hidden lg:flex justify-center mb-16">
                <h2 className=' absolute -top-4 right-1/2 bg-bec-bg self-center uppercase w-fit px-1 text-4xl   text-center '>Команда організаторів</h2>
                <hr className="w-full h-1 bg-white border-none rounded" />
            </div>

            <h2 className='lg:hidden text-white self-center uppercase w-fit px-1 text-5xl md:text-7xl text-center mb-10'>Команда організаторів</h2>

            <div className="flex w-full justify-center">
                <div className="flex flex-col items-center gap-2 w-42">
                    <img src="/artem.png" alt="Artem" className="rounded-full h-40 w-40 object-cover" />
                    <p className="text-center text-lg font-bold">Артем Онисько</p>
                    <p className="text-center text-lg">Main Organizer</p>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-5 mx-auto mt-10">
                <div className="flex flex-col items-center gap-2 w-42">
                    <img src="/katya.jpg" alt="Artem" className="rounded-full h-40 w-40 object-cover" />
                    <p className="text-center text-lg font-bold">Катерина Замкова</p>
                    <p className="text-center text-lg">Public Relations</p>
                </div>
                <div className="flex flex-col items-center gap-2 w-42">
                    <img src="/ruslan.jpg" alt="Artem" className="rounded-full h-40 w-40 object-cover" />
                    <p className="text-center text-lg font-bold">Руслан Явір</p>
                    <p className="text-center text-lg">Design</p>
                </div>
                <div className="flex flex-col items-center gap-2 w-42">
                    <img src="/viktor.jpg" alt="Artem" className="rounded-full h-40 w-40 object-cover" />
                    <p className="text-center text-lg font-bold">Віктор Гаврилюк</p>
                    <p className="text-center text-lg">IT Responsible</p>
                </div>
                <div className="flex flex-col items-center gap-2 w-42">
                    <img src="/dasha.jpg" alt="Artem" className="rounded-full h-40 w-40 object-cover" />
                    <p className="text-center text-lg font-bold">Дарина Єлева</p>
                    <p className="text-center text-lg">Logistics Responsible</p>
                </div>
                <div className="flex flex-col items-center gap-2 w-42">
                    <img src="/bodya.jpg" alt="Artem" className="rounded-full h-40 w-40 object-cover" />
                    <p className="text-center text-lg font-bold">Гонсеровська Богдана</p>
                    <p className="text-center text-lg">Human Resources</p>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-5 mx-auto mt-10">
                <div className="flex flex-col items-center gap-2 w-42">
                    <img src="/vlad.jpg" alt="Artem" className="rounded-full h-40 w-40 object-cover" />
                    <p className="text-center text-lg font-bold">Рогульчик Владислав</p>
                    <p className="text-center text-lg">Content responsible for ID</p>
                </div>
                <div className="flex flex-col items-center gap-2 w-42">
                    <img src="/ann.jpg" alt="Artem" className="rounded-full h-40 w-40 object-cover" />
                    <p className="text-center text-lg font-bold">Кудь Анна-Марія</p>
                    <p className="text-center text-lg">Content responsible for CS</p>
                </div>
                <div className="flex flex-col items-center gap-2 w-42">
                    <img src="/veronika.jpg" alt="Artem" className="rounded-full h-40 w-40 object-cover" />
                    <p className="text-center text-lg font-bold">Мороз Вероніка</p>
                    <p className="text-center text-lg">Fundraising Responsible</p>
                </div>
                <div className="flex flex-col items-center gap-2 w-42">
                    <img src="/andrii.jpg" alt="Artem" className="rounded-full h-40 w-40 object-cover" />
                    <p className="text-center text-lg font-bold">Гаврилко Андрій</p>
                    <p className="text-center text-lg">Fundraising Responsible</p>
                </div>
                <div className="flex flex-col items-center gap-2 w-42">
                    <img src="/miya.jpg" alt="Artem" className="rounded-full h-40 w-40 object-cover" />
                    <p className="text-center text-lg font-bold">Марія Марків</p>
                    <p className="text-center text-lg">Mentor</p>
                </div>
            </div>

        </section>
    )
}