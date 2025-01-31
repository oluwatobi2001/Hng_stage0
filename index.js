const express  =  require('express');
const app= express();


const cors = require('cors') ;
const bodyParser = require('body-parser') 

const dotenv = require('dotenv'); 



dotenv.config();
app.use(express.json());
app.use(cors());


const time = new  Date().toISOString();


 app.use(bodyParser.json());
 app.use("/", (req, res) => {

     res.status(200).json({
        "email": "tobilyn77@gmail.com",
        "current_datetime" : time,
        "github_url": "<https://github.com/oluwatobi2001/Hng_stage0>"
     })
 })


 app.listen(process.env.PORT  || 5000, ()=> {
    console.log("tobi is king");
})
