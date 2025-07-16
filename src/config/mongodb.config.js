// importing mongoose
import mongoose from "mongoose";

const mongoDb = async()=>{
    try {
      const conn = await mongoose.connect(process.env.DB_URL)
      console.log(`Connected to monogo : ${conn.connection.host}`);
    }catch (error) {
        console.log(error);        
    };
};

export default mongoDb;