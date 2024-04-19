import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log('Connected to database ');
} catch (error) {
    console.log(error);
}