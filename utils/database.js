import mongoose from 'mongoose';

let isConnected = false; // track the connection status

export const connectToDB = async () => {
    mongoose.set(('strictQuery'), true);

    if(isConnected){
        console.log("MongoDB is connected already");
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log("MongoDB is connected: " + MONGODB_URI);
    } catch (error) {
        console.log(error);
    }
}