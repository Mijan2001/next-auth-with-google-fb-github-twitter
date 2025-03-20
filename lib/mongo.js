import mongoose from 'mongoose';

export async function dbConnect() {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        return conn;
    } catch (error) {
        console.error('DB connection error:', error);
        process.exit(1);
    }
}
