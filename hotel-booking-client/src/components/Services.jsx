
import { FaAngleDoubleRight } from "react-icons/fa";

const Services = () => {
    return (
      
         <div className="py-6">
         <h1 className="text-center text-4xl font-bold text-green-600 mb-6">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* <iframe
  className="rounded-lg w-full"
  height="315"
  src="https://www.youtube.com/embed/2HU8MYts_lw?si=BFDzlmMpieyM-otO&autoplay=1&muted=1"
  title="YouTube video player"

  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
></iframe> */}

           <div className="p-5">
            <p className="flex gap-x-4 items-center mt-3 text-xl font-medium"><FaAngleDoubleRight className="text-purple-600"></FaAngleDoubleRight> Accommodation Services</p>
            <p className="flex gap-x-4 items-center mt-3 text-xl font-medium"><FaAngleDoubleRight className="text-purple-600"></FaAngleDoubleRight> Dining and Catering Services</p>
            <p className="flex gap-x-4 items-center mt-3 text-xl font-medium"><FaAngleDoubleRight className="text-purple-600"></FaAngleDoubleRight> Business and Conference Services</p>
            <p className="flex gap-x-4 items-center mt-3 text-xl font-medium"><FaAngleDoubleRight className="text-purple-600"></FaAngleDoubleRight> Technology and Connectivity</p>
            <p className="flex gap-x-4 items-center mt-3 text-xl font-medium"><FaAngleDoubleRight className="text-purple-600"></FaAngleDoubleRight> Guest Assistance Services</p>
            <p className="flex gap-x-4 items-center mt-3 text-xl font-medium"><FaAngleDoubleRight className="text-purple-600"></FaAngleDoubleRight> Security and Safety</p> 
           </div>
            
        </div>
         </div>

      
    );
};

export default Services;