import BannerCarousel from "../components/BannerCarousel";
import FeatureRoom from "../components/FeatureRoom";
import GoogleMap from "../components/GoogleMap";
import PageTitle from "../components/PageTitle";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";

const Home = () => {
 
    return (
     
        <div>
            <PageTitle title={"Home Page"}></PageTitle>          
              <BannerCarousel></BannerCarousel>
              {/* Feature product section  */}
              <FeatureRoom></FeatureRoom>
           
             <Testimonial></Testimonial>
             
             <Services></Services>
             <GoogleMap></GoogleMap>
            
        </div>
    );
};

export default Home;