import { useQuery } from "@tanstack/react-query";
import PageTitle from "../components/PageTitle";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const MyBookings = () => {
    const axios = useAxios();

    const { user } = useAuth();
    const userMail = user?.email;

    const { data: bookings, isLoading, error } = useQuery({
        queryKey: ["booking"],
        queryFn: async () => {
            try {
                const res = await axios.get(`/api/v1/user/bookings?email=${userMail}`);
                return res.data; 
            } catch (error) {
                throw new Error("Failed to fetch bookings");
            }
        }
    });

    console.log(bookings);

    return (
        isLoading ?
        <div className='text-center' >
        <span className="loading loading-ring loading-lg "></span>
        </div>
        :
        <div>
            <PageTitle title={"Booking Page"} />
            <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th> 
                  <th>Customer Name</th> 
                  <th>Email</th> 
                  <th>Room ID</th> 
                  <th>Category</th> 
                  <th>Price</th> 
                  <th>Date</th> 
                  <th>Action</th>
                </tr>
              </thead> 
              <tbody>
              {
                bookings.map(booking=>
                    <tr key={booking._id}>
                <th>{booking._id}</th> 
                <td>{booking.customerName}</td> 
                <td>{booking.email}</td> 
                <td>{booking.roomId}</td> 
                <td>{booking.category}</td> 
                <td>{booking.price}</td> 
                <td>{booking.startDate}</td> 
                <td>edit</td> 
                
              </tr>
                

                )
                
              }
              </tbody> 
            
            </table>
          </div>
           
        </div>
    );
};

export default MyBookings;
