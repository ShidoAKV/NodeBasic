
// modules
// {var fs=require('fs')
// var os=require('os')

// var user=os.userInfo();
// console.log(user.username);


// fs.appendFile('file.txt',"hello new file/n",()=>{
//     console.log("created");
// });
// }

// var _=require('lodash')

// var data=["person","abhishek",1,2,3];

// var filter=_.uniq(data);
// console.log(filter);


const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.send("hello world ndwjenfwjenfkw")
})
app.get('/about',(req,res)=>{
    res.send("hello ")
})

app.listen(4000,()=>{
    console.log('listening on port 4000');
})








