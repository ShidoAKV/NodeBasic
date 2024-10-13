import express from 'express';
import User from '../Models/person.js'; 

const router = express.Router();

router.post('/',async(req,res)=>{
  try {
       const data=req.body;
       const response=await User(data);
       const savedrespnse=await response.save();
       console.log("data sended successfully");
  
       res.status(200).json(data);
      
  } catch (error) {
     res.status(500).send({message:"internal server error"});
  }
   

})

router.get('/',async(req,res)=>{
  try {
     const data=await User.find();
     console.log(" all data retrieve successfully");
     
      res.status(200).send(data);
      
  } catch (error) {
     res.status(500).send({message:"internal server error"});
  }
   

})
router.get('/:worktype', async (req, res) => {
    try {
        const worktype = req.params.worktype;
        console.log("Received worktype: ", worktype);

        if (worktype === 'chef' || worktype === 'waiter') {
            const response = await User.find({work:worktype});
            if (response.length === 0) {
                res.status(404).json({ message: "No users found with that work type" });
            } else {
                console.log("Response fetche{ work: worktype }d");
                res.status(200).json(response);
            }
        } else {
            res.status(404).json({ message: "Invalid work type" });
        }
    } catch (error) {
        console.error("Error fetching data", error);
        res.status(500).json({ message: "Internal server error", error });
    }
});



router.put('/:id', async (req, res) => {
  try {
    const personid = req.params.id;
    const updatedpersondata = await User.findById(personid);

    if (!updatedpersondata) {
      return res.status(404).json({ message: "Person not found" });
    }
    //  res.status(200).send(req.body);
    const response = await User.findByIdAndUpdate(req.params.id,req.body, {
      new: true,
      runValidators: true,
    });

    console.log("Data updated");
     res.status(200).json(response);
  } 
  catch (error) {
    console.error("Error updating data", error);
    res.status(500).json({ message: "Internal server error", error });
  }
});



router.delete('/:id', async (req, res) => {
  try {
    const personid = req.params.id; 
    const response = await User.findById(personid);
    
    if (!response) {
      return res.status(404).json({ message: "Person not found" });
    }

    await response.deleteOne();
    
    console.log("Data deleted successfully");
    res.status(200).json({ message: "Person deleted successfully" });
  } catch (error) {
    console.error("Error deleting data", error); 
    res.status(500).json({ message: "Internal server error", error });
  }
});






export default router;
