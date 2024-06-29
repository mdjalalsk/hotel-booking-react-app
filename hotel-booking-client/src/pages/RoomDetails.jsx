
import useAxios from '../hooks/useAxios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';


const RoomDetails = () => {
  const navigate=useNavigate();
   const {user}=useAuth();
    const axios=useAxios();
    const [mainImage, setMainImage] = useState('');
    const [email,setEmail]=useState('');
  const [address,setAddress] = useState('');
  const [customerName,setCustomerName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

   const {id}=useParams();
    // console.log(id);
    const {data:room,isLoading}=useQuery({
        queryKey: ['rooms'],
        queryFn:async()=>{
            const res= await axios.get(`/api/v1/rooms-details/${id}`)
            return res;
        }      
    }) 
    const price=room?.data?.PricePerNight;
    const roomId=room?.data?.RoomID;
    const category=room?.data?.category;
    const discount=room?.data?.SpecialOffers;

    const { mutate } = useMutation({
      mutationKey: ['rooms'],
      mutationFn: async (bookingData) => {
        if (!user) {
          throw new Error('Please login before booking');
         
        }
    
        const response = await axios.post('/api/v1/create-bookings', bookingData);
        if(response){
          await axios.patch(`/api/v1/rooms-availability/${bookingData.id}`, { Availability: false });
        }
        return response.data; 
      },
      onSuccess: async () => {
        toast.success('Booking successfully');
    
      },
      onError: (error) => {
        console.error('Error creating booking:', error);
        toast.error('Error creating booking. Please try again.');
        navigate('/login');
      }
    });

    // const {mutate}=useMutation({
    //   mutationKey:'rooms',
    //   mutationFn:(bookingData)=>{       
    //       return axios.post('/api/v1/create-bookings',bookingData)
    //   },
    //   onSuccess:()=>{
    //     toast.success("Booking successfully")
        
    //   }
    // })

    // console.log(room)
   useEffect(()=>{
    if(!isLoading){
        const thumbnail=room?.data?.Thumbnail;
        setMainImage(thumbnail)
        setEmail(user?.email)
    }
   },[isLoading,room,user])
    
    const handleImageHover = (imgLink) => {
        setMainImage(imgLink);
      };
    return (
        isLoading ?
        <div className='text-center' >
        <span className="loading loading-ring loading-lg "></span>
        </div>
        :

        <div className='grid grid-cols-1 md:grid-cols-2 py-6'>
             <div className='p-4'>
                
             <img className='w-full rounded-lg h-[400px]' src={mainImage} alt="Main Thumbnail" />
             <div className='flex gap-4 mt-6  md:px-5'>
        {room?.data?.RoomImages.map((img, index) => (
          <img
            key={index}
            className='w-28 md:w-32 cursor-pointer'
            src={img}
            alt={`Room Image ${index + 1}`}
            onMouseEnter={() => handleImageHover(img)}
          />
        ))}
      </div>
        </div>
         <div className='p-5 space-y-3'>

             <p className='text-base font-medium'><span className='font-bold text-blue-500'>Room Category:</span> {room?.data?.category}.</p>
             <p className='text-base font-medium'><span className='font-bold text-blue-500'>Room ID:</span> {room?.data?.RoomID}.</p>
             <p className='text-base font-medium'><span className='font-bold text-blue-500'>Price per Night:</span> {room?.data?.PricePerNight}$.</p>
             <p className='text-base font-medium'><span className='font-bold text-blue-500'>Room Size:</span> {room?.data?.RoomSize}.</p>
             <p className='text-base font-medium'><span className='font-bold text-blue-500'>Availability:</span> {room?.data?.Availability ? <span className='text-pink-500'>Available.</span> : <span className='text-red-600'>Unavailable.</span>}</p>
             <p className='text-base text-left font-medium '><span className='font-bold text-blue-500'>Description:</span> {room?.data?.RoomDescription}.</p>
              {room?.data?.SpecialOffers ? (
                <p className='text-base font-medium'><span className='font-bold text-blue-500'>Special Offers:</span> {room?.data?.SpecialOffers}$ Off. </p>
                ) : (
                <p className='text-base font-medium'><span className='font-bold text-blue-500'>Special Offers:</span> No Special Offers</p>
                )}
                        
            <div>  
            <form className="card-body" >    
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                defaultValue={user && user?.displayName}
                required
                onBlur={(e) => setCustomerName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered" disabled
                defaultValue={user && user?.email}
                required
                onBlur={(e)=>setEmail(e.target.value)}
              />
            </div>
          <div className='flex justify-between' >
           <div className='form-control'>
           <label className="label">
                <span className="label-text">Start Date</span>
            </label>
            <DatePicker
             className='input input-bordered'
              showIcon
              minDate={new Date()}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      // locale="en-GB"
      
    />  
            </div>
            <div className='form-control'>
            <label className="label">
                <span className="label-text">End Date </span>
            </label>
            <DatePicker
             className='input input-bordered'
              showIcon
              minDate={new Date()}
      selected={endDate}
      onChange={(date) => setEndDate(date)}
      // locale="en-GB"
      
    />  
              </div>      
            </div>           
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <textarea
                rows={12}
                className="input input-bordered"
                onBlur={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>

            <div className="form-control mt-2">
            {/* <button type='b' className='my-10 btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>Book now</button> */}
            {
              room?.data?.Availability ?
              <button type='button'  className='my-10 btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500' onClick={()=>mutate({id,customerName,email,address,roomId,price,category,mainImage,discount,startDate,endDate,status:'pending'})}>Book</button>
             :<p className="text-red-500 text-lg">This Room is Unavailable.</p>
            }
            </div>
          </form>
            
            </div>
          </div>
        </div>
    );
};

export default RoomDetails;