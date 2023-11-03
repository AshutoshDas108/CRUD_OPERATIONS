const mongoose = require('mongoose')

async function connectDb (){
    return (mongoose.connect("mongodb+srv://ashutosh2003:UnVec3mkiquLObfb@userdb.g7tayag.mongodb.net/")
    .then(
         () => console.log("MONGODB CONNECTED")
    )
    )
}

module.exports = connectDb
