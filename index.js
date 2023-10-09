/*const { MongoClient } = require('mongodb');
const password = encodeURIComponent('aarti@123'); // URL encode the password
const url = `mongodb+srv://artikabra001:${password}@atlascluster.ycv2xua.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

async function getdata() {
  try {
    let result = await client.connect();
    let db = result.db("e-comm");
    let collection = db.collection("products");
    let response = await collection.find({}).toArray();
    console.log(response);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await client.close();
  }
}

getdata();


const mongoose = require('mongoose');
const express = require ('express');
const { Db } = require('mongodb');
const app=express()
const url = 'mongodb+srv://artikabra001:1234567890@atlascluster.ycv2xua.mongodb.net/e-comm?retryWrites=true&w=majority';
const main = async() =>{
  await mongoose.connect(url,
  {
    useNewUrlParser: true,
   
    useUnifiedTopology: true,
  
  })
  
  const ProductSchema = new mongoose.Schema({name:String,price:Number});
const ProductsModel = mongoose.model('products',ProductSchema);
  let data=new ProductsModel({name:"m48",price:3456,brand:"samsung"});
let result =await data.save();
console.log(result);
}


/*const saveInDb = async() =>{
   const Products = mongoose.model('products',ProductSchema);
  const ProductSchema = new mongoose.Schema({name:String,price:Number});
 
  let data=new Products({
    name:"M48",
    price:3456,
    brand:"samsung"
  });
const result =await data.save();
console.log(result);

}



const updateInDb = async() =>{

  const ProductSchema = new mongoose.Schema({name:String,price:Number});;
  const products = mongoose.model('products',ProductSchema);
  let data=await products.updateOne(
    {name:"M40" },
    {
      $set:{price:4567}
    }
     )
     console.log(data);
}

updateInDb();*/



const express = require('express');
require('./config');
const Product =require('./product');
const product = require('./product');
const app = express();


app.use(express.json());
app.post("/create",async(req,resp)=>{
let data=new product(req.body);
const result =await data.save()
  resp.send(result);
});


app.get("/list",async (req,resp)=>{
  let data =await Product.find();
  resp.send(data);
})

app.listen(5000)

app.delete("/delete/:id",async(req,resp)=>{
console.log(req.params)
resp.send("done");}

)

//yha se karna hai 

app.put("/update/:_id",async(req,resp)=>{
  console.log(req.params)
  let data =await Product.updateOne(
      req.params,{
        $set :req.body
      }
      
  );
  resp.send("done");
    })
