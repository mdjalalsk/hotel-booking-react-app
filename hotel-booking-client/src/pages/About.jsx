import PageTitle from "../components/PageTitle";

const About = () => {
    return (
        <div>
            <PageTitle title={"About Page"}></PageTitle>
            <section className="py-16 bg-gray-100">
            <div className="md:w-full">
            <img
              src="https://i.ibb.co/pzdnc1B/page-banner-contact.jpg" 
              alt="SK Hotel"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-8 my-5">About SK Hotel</h2>
        
          <div className="w-full p-4">
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to SK Hotel, where luxury meets comfort. Our hotel is strategically located in a prime
              area, providing our guests with easy access to the city's attractions and business centers.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              At SK Hotel, we prioritize your comfort and satisfaction. Our well-appointed rooms, attentive staff,
              and top-notch amenities ensure that your stay with us is nothing short of exceptional.The foremost objectives of the corporation are to promote tourism in Bangladesh, build up positive image of the country abroad, create tourism infrastructure, provide services to the tourists and flourish tourism resources that exist in Bangladesh, creating employment opportunity in different sectors of this industry which is helpful to reduce poverty, vis-à-vis contribute to the growth of the national GDP. With the motto of providing best services to tourists as well as creation of standard facilities across the country, BPC always first ventured with the projects in different tourism potential areas. It showed the path for private investment in the country.

            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you are traveling for business or leisure, SK Hotel is the perfect choice for a memorable and
              delightful experience. We look forward to welcoming you to our hotel.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">Bangladesh Parjatan Corporation (Govt. Tourism Organization) is the pioneer of tourism development in Bangladesh. Since independence of our beloved motherland, the father of the nation Bangabandhu Sheikh Mujibur Rahman as a reflection of his visionary leadership created this organization with Presidential Order (P.O.) no-143 in November 1972, which commences its function on 1st January 1973. Since its inception, this organization has been putting in best effort to promote and develop tourism as an industry and market the tourism products of Bangladesh. This organization has been entrusted with duel role – ‘promotion and development’ of tourism industry as well as ‘creation and operation’ of various tourism facilities across the country since its establishment.</p>
          </div>
        </div>
    
    </section>
        </div>
    );
};

export default About;