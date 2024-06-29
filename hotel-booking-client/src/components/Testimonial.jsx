import ClientReview from "./ClientReview";

const Testimonial = () => {
    return (
        <section className="my-5 md:my-10 p-2">
              <h1 className="text-center text-4xl font-bold text-green-600 mb-6">Testimonial</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-5">
                <div className="p-3">
                    <marquee direction="right"> <p className="text-black text-2xl font-bold">Welcome To SK Hotel</p></marquee>
                   <p className="mt-3">At SK Hotel, we take pride in offering a hospitality experience that goes beyond expectations. Our commitment to excellence is evident in every aspect of your stay, ensuring that your time with us is nothing short of exceptional.Our dedicated team of professionals is here to cater to your every need. From the moment you step into our welcoming lobby, you'll experience the warmth and efficiency that define SK Hotel's unparalleled service.</p>
                    <img className="w-full my-4 rounded-lg object-cover" src="https://i.ibb.co/Pm4n37B/slider-1-1440x470.jpg" />
                </div>
                <div className="py-3 mt-2">
                <ClientReview></ClientReview>
                </div>
              </div>
              </section>
    );
};

export default Testimonial;