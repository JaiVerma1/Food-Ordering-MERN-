const mongoose =require("mongoose")

const mongodbUrl="mongodb+srv://jaivermabtech2021:pTL19C7Ohl0g7uJY@cluster0.o2xlt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectDB(){

    return mongoose.connect(mongodbUrl);
}

module.exports=connectDB;