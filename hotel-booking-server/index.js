require('dotenv').config();
const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const app = express()
const port = 5000
const cors = require('cors');
app.use(
  cors( {
    origin: 'http://127.0.0.1:5173',
    credentials: true,
  }));


app.use(express.json());
app.use(cookieParser());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z89qnzj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const roomCollections=client.db('hotelBooking').collection('rooms');
    const bookingCollection=client.db('hotelBooking').collection('bookings');

    const verifyToken = (req, res,next) => {
      const token = req?.cookies?.token;
      const secret=process.env.USER_ACCESS_TOKEN_SECRET
      // res.send(secret);
      // console.log(secret);

      if (!token) {
        return res.status(401).send({ message: 'unauthorized access' });
      }
      jwt.verify(token,secret,(err, decoded) => {
        // console.log(token);
        if (err) {
          return res.status(401).send({ message: 'unauthorized access' });
        }
        //  console.log(decoded);
        req.user = decoded;
        next()
      });
    };

    // get all get request 
    // get all  rooms
  app.get('/api/v1/rooms', async(req,res)=>{
    let queryObj={ };
      let sortObj={};
      const category=req.query.category;
      const sortFiled = req.query.sortFiled;
      const sortOrder = req.query.sortOrder; 
      let page=parseInt(req.query.page);
      let limit=parseFloat(req.query.limit);
      let skip=(page-1)* limit;
      if(category){
        queryObj.category=category
      }
      if(sortFiled && sortOrder){
        sortObj[sortFiled]=sortOrder;
      }
      // console.log(sortObj);
      const cursor = roomCollections.find(queryObj).skip(skip).limit(limit).sort(sortObj);
      const result = await cursor.toArray();
      const total= await roomCollections.countDocuments();
    res.send({
      total,
      result
    })
  })
  app.get('/api/v1/feature-rooms', async(req,res)=>{
    const query={Features:true}
    const cursor= roomCollections.find(query);
    const result= await cursor.toArray();
    // console.log(result);
    res.send(result)
  })
  //Room details Api
  app.get('/api/v1/rooms-details/:id', async(req,res)=>{
    const id=req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await roomCollections.findOne(query);
    // console.log(result);
    res.send(result)
  })

   // CREATE BOOKING
   app.post('/api/v1/create-bookings',verifyToken, async (req, res) => {
    const booking = req.body;
    const result = await bookingCollection.insertOne(booking);
    res.send(result);
  });
  //update room  availability
  app.patch('/api/v1/rooms-availability/:id', async(req,res)=>{
    const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      // const options = { upsert: true };
      const updateDoc={
        $set: { Availability: req.body.Availability } 
      }
      const result = await roomCollections.updateOne(filter, updateDoc);
      console.log(result);
      res.send(result);

  });

  // get all booking  rooms for single user
  app.get('/api/v1/user/bookings',async (req, res) => {
    const userEmail = req.query.email;
    console.log(userEmail);

    // if (userEmail !== req.user.email) {
    //   return res
    //     .status(403)
    //     .send({ message: 'You are not allowed to access !' });
    // }
    let query = {}; //get all bookings
    if (req.query?.email) {
      query.email = userEmail;
    }

    const result = await bookingCollection.find(query).toArray();
    res.send(result);
  });

  //jwt authorization and authentication
  app.post('/api/v1/auth/access-token', async (req, res) => {
    const user = req.body;
    console.log(user);
    const token = jwt.sign(user, process.env.USER_ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

    res
      .cookie('token', token, {
        httpOnly: false,
        secure: true,
        sameSite: 'none',
      })
      .send({ success: true });
  });

  // log out api using jwt
  app.post('/api/v1/auth/logout', async (req, res) => {
    const user = req.body;

    res.clearCookie('token').send({ success: true });
  });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


