import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import '../../css/carousel.css';

export default function reactCarousel(props) {
    return (
        <div className='w-full lg:px-14 xl:px-28 select-none'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={false}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
            >
                
                {Object.values(props).filter(v => typeof v === 'object').map((v, i) => (
                    <SwiperSlide key={i}>{v}</SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}
