
import express from 'express';
import db from './MongoDB/index.js'
import User from './Models/person.js';
import bodyParser from 'body-parser';
import MenuItem from './Models/Menu.js';
const app = express();

// middleware
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send("Hello");
// });
// app.get('/about', (req, res) => {
//   res.send("About");
// });

// app.post('/person', async (req, res) => {

//   try {
//      const datafromfrontend=req.body;
//      // create a new person
//     //  const newUser=new User();
//     //  newUser.name=data.name;
//     //  newUser.age=data.age;
//     //  newUser.salary=data.salary;
//     //  newUser.email=data.email;
//     //  newUser.address=data.address;
  
//       const newUser=new User(datafromfrontend);

//       const saveduser=await newUser.save()
//       console.log("data saved");
//       res.status(200).json(saveduser)
    
//   } catch (error) {
//      console.log("internel server error");
//      res.status(500).send("Internal server error",error)
    
//   }
// });

// app.get('/revive',async (req,res)=>{
//     try {
//        const data=await User.find();
//        console.log("data retrieve successfully");
//        res.status(200).json(data)
       
//     } catch (error) {
//       console.log("internel server error");
//       res.status(500).send("Internal server error",error)
//     }
// })


// app.post('/menu',async( req,res)=>{
      
//  try {
//    const Menudata=req.body;
//    const MenuItemdata=await MenuItem(Menudata);
//    const savedMenudata=await MenuItemdata.save();
//    console.log("data saved successfully");
//    res.status(200).json(savedMenudata);
   
//  } catch (error) {
//    console.log("Internel Server error");
//     res.status(500).send(error)
   
//  }
// }

// )


// app.get('/getmenu',async(req,res)=>{
//    try {
//      const data=await MenuItem.find();
//      res.status(200).json(data)
//    } catch (error) {
//     console.log("Internel server error");
//     res.status(500).send({error})
    
//    }

// })

// parametrised Api call
// app.get('/person/:worktype',async(req,res)=>{
//   try {
//     const worktype=req.params.worktype;
    
//     if(worktype=='chef'||worktype=='waiter'){
//        const response=await User.find({work:worktype});
//        console.log("response fetched");
//        res.status(200).json(response)
//     }else{
//         res.status(404).json("Invalid work type")
//     }
  
//   } catch (error) {
//        console.log(error);
//        res.status(500).json("internal server error")
//   }
// })

 import router from './Routes/person_routes.js';
app.use('/person', router);






app.listen(5000, () => {
  console.log("Server running on port 5000");
});
