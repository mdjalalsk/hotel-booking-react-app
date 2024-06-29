
import { PropTypes } from 'prop-types';
const RoomCard = ({room}) => {
    // console.log(room)
    return (
        <div>
        <a href={`room/${room._id}`} className="relative group overflow-hidden block">
          <div className="h-[300px] w-full group-hover:scale-105 transition-transform duration-300">
            <img
              src={room?.Thumbnail}
              alt="room image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5 absolute bottom-0 left-0 invisible group-hover:visible bg-gray-400 text-black w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className='text-base md:text-lg'><span className='font-bold'>Room ID:</span> {room.RoomID}.</p>
            <p className='text-base md:text-lg'><span className='font-bold'>Room Category:</span> {room.category}.</p>
            <p className='text-base md:text-lg'><span className='font-bold'>Price Per Day:</span> {room.PricePerNight}$.</p>
            <a href={`room/${room._id}`} className='mt-5 btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>View Details</a>
          </div>
        </a>
      </div>
      
    );
};
RoomCard.propTypes = {
    room: PropTypes.node,
  };
export default RoomCard;