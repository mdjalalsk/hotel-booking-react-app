import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";


const FeatureRoom = () => {
    let axios=useAxios();
    const {isLoading,data:rooms}=useQuery({
        queryKey:["featureRoom"],
        queryFn:async()=>{
            const res=await axios.get('/api/v1/feature-rooms')
            return res;
        }
    })
    console.log(rooms?.data);
    return (
        <div className="my-10">
         <h1 className="text-center text-4xl font-bold text-green-600 my-6">Features Rooms</h1>
         {
            isLoading?<div><p className="loading loading-ring loading-lg"></p></div>
            :
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
                {
                 rooms?.data?.map(room=>
                 <div key={room._id} className="card card-compact  bg-base-100 shadow-xl">
                    <a href={`room/${room._id}`}>
                 <figure><img className="w-full h-[300px] object-cover" src={room.Thumbnail} alt="Shoes" /></figure>
                 </a>
                 <div className="card-body">
                    <p className="text-3xl font-bold">{room.RoomID}</p>                  
                   <div className="card-actions">
                     <a href={`room/${room._id}`} className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">View Details</a>
                   </div>
                 </div>
               </div>)
                }
         </div> 
         }
            
        </div>
    );
};

export default FeatureRoom;