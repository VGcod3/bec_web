// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';



export default function Carousel() {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop
            modules={[Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            className='rounded-2xl'
        >
            <SwiperSlide>
                <img src='/history1.png' alt="ebec" className="rounded-3xl mx-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src='/history2.png' alt="ebec" className="rounded-3xl mx-auto" />
            </SwiperSlide>
            <SwiperSlide>
                <img src='/history3.png' alt="ebec" className="rounded-3xl mx-auto" />
            </SwiperSlide>

        </Swiper>
    )
}