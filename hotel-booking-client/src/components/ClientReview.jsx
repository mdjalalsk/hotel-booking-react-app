import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ClientReview = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      
      <SwiperSlide>
        <div className="card text-center shadow-xl p-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="avatar mx-auto">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              <p>Jane Smith</p>
            </div>
          </div>
          <div className="card-body text-center">
            <p className="text-black text-center font-semibold text-lg">Jane Smith</p>
             <p>My family and I had an amazing experience at SK Hotel. The attention to detail and the level of service were exceptional. The hotel's facilities, including the pool and fitness center, were well-maintained. The on-site restaurant offered delicious meals, and the overall ambiance was inviting. SK Hotel is now our go-to choice for a relaxing and enjoyable getaway.</p>
           </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card text-center shadow-xl p-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="avatar mx-auto">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              <p>Jane Smith</p>
            </div>
          </div>
          <div className="card-body text-center">
          <p className="text-black text-center font-semibold text-lg">John Doe</p>
             <p>I recently stayed at SK Hotel during a business trip, and it exceeded all my expectations. The rooms were spacious, impeccably clean, and had a modern design. The staff was incredibly friendly and attentive. I particularly enjoyed the convenient location and the amenities provided. SK Hotel truly made my stay comfortable and enjoyable.</p>
           </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center shadow-xl p-7">
          <div className="avatar mx-auto">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
             
            </div>
          </div>
            <div className="card-body text-center">
             <p className="text-black text-center font-semibold text-lg">David Johnson </p>
            <p>Attending a conference at SK Hotel was a pleasure. The conference facilities were top-notch, equipped with the latest technology, and the staff ensured that everything ran smoothly. The hotel's central location made it easy to explore the city during breaks. I highly recommend SK Hotel for both business and leisure events.</p>
              </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center shadow-xl p-7">
          <div className="avatar mx-auto">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
             
            </div>
          </div>
            <div className="card-body text-center">
             <p className="text-black text-center font-semibold text-lg">Emily Rodriguez </p>
            <p>SK Hotel provided an elegant and picturesque setting for a family wedding. The banquet hall was beautifully decorated, and the staff went above and beyond to make the event memorable. The bride and groom were thrilled with the level of service and attention to detail. It was a truly magical celebration at SK Hotel.</p>
              </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center shadow-xl p-7">
          <div className="avatar mx-auto">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
             
            </div>
          </div>
            <div className="card-body text-center">
             <p className="text-black text-center font-semibold text-lg">Michael Turner</p>
            <p>I have been a repeat guest at SK Hotel for both business and personal travel. The consistency in service, the cleanliness of the rooms, and the friendly staff have made it my preferred choice. The loyalty program offers great perks, and the hotel's commitment to customer satisfaction keeps me coming back. SK Hotel is a home away from home.</p>
              </div>
        </div>
      </SwiperSlide>
      
    </Swiper>
  );
};

export default ClientReview;
