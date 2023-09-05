const ORG = ({ name, position, path }: { name: string, position: string, path: string }) => {
    return <div className="flex flex-col col-span-5 md:col-span-2 items-center gap-2 w-42">
        <img src={path} alt={name} className="rounded-full md:h-40 md:w-40 sm:w-24 sm:h-24 w-16 h-16 object-cover" />
        <p className="text-center md:text-lg font-bold">{name}</p>
        <p className="text-center md:text-lg">{position}</p>
    </div>
}

export default function Team() {
    return (
        <section className="min-h-screen flex flex-col items-start justify-center px-6 mx-auto ">
            <h2 className=' bg-bec-bg self-center uppercase w-fit px-1 text-4xl  text-center mb-10'>Команда організаторів</h2>

            <div className="grid grid-cols-10 gap-5 mx-auto mt-10">

                <ORG name="Руслан Явір" position="Design" path="/ruslan.jpg" />
                <ORG name="Катерина Замкова" position="Public Relations" path="/katya.jpg" />
                <ORG name="Артем Онисько" position="Main Organizer" path="/artem.png" />
                <ORG name="Віктор Гаврилюк" position="IT Responsible" path="/viktor.jpg" />
                <ORG name="Дарина Єлева" position="Logistics Responsible" path="/dasha.jpg" />

                <ORG name="Гонсеровська Богдана" position="Human Resources" path="/bodya.jpg" />
                <ORG name="Рогульчик Владислав" position="Content responsible for ID" path="/vlad.jpg" />
                <ORG name="Кудь Анна-Марія" position="Content responsible for CS" path="/ann.jpg" />
                <ORG name="Мороз Вероніка" position="Fundraising Responsible" path="/veronika.jpg" />
                <ORG name="Гаврилко Андрій" position="Fundraising Responsible" path="/andrii.jpg" />

            </div>

        </section>
    )
}