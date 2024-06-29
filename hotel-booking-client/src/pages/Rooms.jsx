import { useQuery } from "@tanstack/react-query";
import PageTitle from "../components/PageTitle";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard";

const Rooms = () => {
  const axios = useAxios();
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);

  /*###### start make categories from title ######*/
   const [makeCategory,SetMakeCategory] = useState(['']);
   useEffect(() => {
    axios.get('/api/v1/rooms')
    .then(res=>{
      const data= res.data.result;
      // console.log(data)
      SetMakeCategory(data);
     },[])
   })
   let categories=[];
   if(makeCategory){
     let categoryArray =  makeCategory.map(item => item.category);
     categoryArray.forEach(item => {
       if (!categories.includes(item)) {
         categories.push(item);
       }
     });
   }
  const getRooms = async () => {
    const res = await axios.get(
      `/api/v1/rooms?sortFiled=price&sortOrder=${price}&category=${category}&page=${page}&limit=${limit}`
    );

    return res;
  };
  const query = useQuery({
    queryKey: ["rooms", price, category, page, limit],
    queryFn: getRooms,
  });
  const { data: rooms, isLoading, isError, error } = query;
const resultArray=rooms?.data?.result;
const arrayLength =resultArray?resultArray.length:0;
console.log(arrayLength)
  /*###### end make categories from title ######*/
   /*###### start pagination ######*/
   
   const totalData=Number(rooms?.data?.total);
   const totalPages=Math.ceil(totalData/limit);
  //  console.log(totalData)
   const handlePrevious=()=>{
     if(page>1){
      setPage(page-1)
     }
   }
   const handleNext=()=>{
    if(page<totalPages){
      setPage(page+1)
    }
    
   }
   /*###### end pagination ######*/

  return (
    isLoading?<div className='text-center' ><span className="loading loading-ring loading-lg "></span>
    </div>:
    <div>
      <PageTitle title={"Rooms Page"}></PageTitle>
      <div>
      
        <div className="flex flex-col md:flex-row justify-between gap-10 p-3 my-9 border-2 border-purple-700 items-center">
          <div>
          <h1 className="text-center text-2xl text-blue-800 font-medium"> 
           Total  {rooms?.data?.total} Rooms Available.
          </h1>
          </div>
          <div className="flex gap-5">
            <div className="text-center">
              <label className="text-xl font-bold  text-blue-800">Category</label>
              <select
                className="select select-bordered select-lg w-full max-w-xs"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option disabled selected>
                  Choose one
                </option>
                <option value={""}>All</option>

                {
                              categories.map((item,index )=> <option key={index} value={item}>{item}</option>)
                            }
              </select>
            </div>
            <div className="text-center">
              <label className="text-xl font-bold  text-blue-800">Filter By Price</label>
              <select
                className="select select-bordered select-lg w-full max-w-xs text-center"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option disabled selected>
                  Choose one
                </option>
                <option value="asc">From Low to High</option>
                <option value="desc">From High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* rooms Cards goes here */}
          {
           
           isLoading?<div className='text-center' ><span className="loading loading-ring loading-lg"></span>
           </div>: rooms?.data?.result?.map(room=><RoomCard key={room._id} room={room}></RoomCard>)
          }
      </div>
      <div className="mb-10 flex flex-col md:flex-row justify-between items-center md:gap-x-4 gap-y-6 my-20">
      <div className='flex items-center gap-2'>
                <label className='text-lg text-cyan-500 font-semibold'>How many rooms are displayed per page ?</label>
              <select  className="select select-bordered" value={limit} name=""onChange={(e)=>setLimit(e.target.value)}>
               <option disabled selected>Choose one</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                    
                </select>
              </div>
        <div className="join">
            <button className="join-item btn  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" onClick={handlePrevious}>Previous</button>
          
            {
               
              Array(totalPages).fill(0).map((item, index) =>{
                const pageNumber=index+1;
                return <button className={`${pageNumber==page?'join-item btn btn-primary rounded-lg':'join-item btn btn-ghost'}`} key={pageNumber} onClick={()=>setPage(pageNumber)}>{pageNumber}</button>
              }
               
              )
            }

            <button className="join-item btn  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" onClick={handleNext}>next</button>
       </div> 
      </div>
    </div>
  );
};

export default Rooms;
