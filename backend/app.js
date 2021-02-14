const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerJSDoc=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');


const MemeRoute = require('./routes/meme');

const app = express();


const swaggerOptions={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Crio Xmeme Mini Project',
            version:'1.0.0',
            description:'Xmeme apis For crio mini project',
            contact:{
                name:'Snehasish Dhar',
                email:'dsnehasish74@gmail.com'
            },
            servers:["http://localhost:8000"]
        }
    },
    apis:["app.js","./routes/meme.js"]
}


const swaggerDocs=swaggerJSDoc(swaggerOptions);
app.use('/swagger-ui',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

//Database Connection
mongoose.connect('mongodb://localhost:27017/xmeme',
 {useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true}).then(()=>{
      console.log("DB CONNECTED");
  }).catch((err)=>{
      console.log(err);
  })


//Middle Wears
app.use(bodyParser.json());
app.use(cors());
//Routes
app.use("/",MemeRoute);

//Port
const port = 8000;
//Starting the Server
app.listen(port,()=>{
    console.log(`The app is running at port ${port}`);
});