import mongoose from 'mongoose';

let isConnected = false; // Track the connection status

export const connectToDB = async () => {
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'Prompt-A-Chat', // Specify the database name
    });

    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    // Optionally throw an error or handle it in another way
    throw new Error('Failed to connect to MongoDB');
  }
};

// Optional: Disconnect from MongoDB
export const disconnectFromDB = async () => {
  if (!isConnected) {
    console.log('MongoDB is not connected');
    return;
  }

  try {
    await mongoose.disconnect();
    isConnected = false;
    console.log('MongoDB disconnected successfully');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error.message);
    throw new Error('Failed to disconnect from MongoDB');
  }
};
