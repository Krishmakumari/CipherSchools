const mongoose=require("mongoose")
const connect=mongoose.connect;

const MONGO_URL="mongodb://localhost:27017/";

const DB_NAME="cs-mern";

async function connectDb(){
  try{
    await connect(`${MONGO_URL}/${DB_NAME}`)
    console.log("mongodb connected")
  }
  catch(err){
    console.log(err)
  }
}

connectDb();