const {app}= require(".");
const connectDB = require("./config/db");

const PORT=5454

app.listen(PORT,async()=>{
        await connectDB()

        console.log("server is running on port 5454",PORT);
}
)