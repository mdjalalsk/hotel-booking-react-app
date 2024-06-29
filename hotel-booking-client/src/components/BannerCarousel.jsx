import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';

const BannerCarousel = ()=>{
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        parallax={true}
        pagination={{
          clickable: true,
        }}
       
        navigation={false}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
                 
        <div className='relative'>
          <img className='w-full' src="https://i.ibb.co/r62hLXF/banner3.jpg" alt="no image" />
          <div className='absolute top-1/2 left-10 text-blue-800 font-extrabold text-xl md:text-4xl'>
            <p>Winter Offers <br /> 30%  for <span className='text-rose-600'>Luxury Suite </span></p>
            <button className='btn btn-secondary'>Booking Now</button>
          </div>
        </div>         
        </SwiperSlide>
        <SwiperSlide>
        <div className='relative'>
         <img className='w-full' src="https://i.ibb.co/r62hLXF/banner3.jpg" alt="no image" />
         <div className='absolute top-1/2 left-10 text-xl md:text-4xl text-blue-800 font-extrabold'>
         <p>winter Offers <br /> 30%  for <span className='text-rose-600	'>Executive Suite</span></p>
         <button className='btn btn-secondary'>Booking Now</button>

          </div>      
           </div> 
        </SwiperSlide>
        <SwiperSlide>  
        <div className='relative'>

            <img className='w-full' src="https://i.ibb.co/m4fg0Pb/banner1.jpg" alt="no image" />
            <div className='absolute top-1/2 left-10 text-xl md:text-4xl text-blue-800 font-extrabold'>
         <p>Winter Offers <br /> 30%  for <span className='text-rose-600	'>Deluxe Room</span></p>
         <button className='btn btn-secondary'>Booking Now</button>

          </div>         
          </div> 
        </SwiperSlide>
        <SwiperSlide>  
        <div className='relative'>

            <img className='w-full' src="https://i.ibb.co/gS8x3C5/banner2.jpg" alt="no image" />
            <div className='absolute top-1/2 left-10 text-xl md:text-4xl text-blue-800 font-extrabold'>
         <p>Winter Offers <br /> 30%  for <span className='text-rose-600'>Standard Room </span></p>
         <button className='btn btn-secondary'>Booking Now</button>

          </div> 
          </div> 
        </SwiperSlide>
      </Swiper>
</>
);
}
    

export default BannerCarousel;
