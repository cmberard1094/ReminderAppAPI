import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://localhost:27017/reminderApp';

export const initDB = async (uri? :string) => {
  try {
    await mongoose.connect(uri? uri : MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process if the connection fails
  }
};