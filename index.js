const express=require('express')
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    console.log("Welcome to the Express.js Server!");
    res.end("Welcome to the Express.js Server!")
});
app.get('/about',(req,res)=>{
    console.log("This is a simple web server built using Express.js.");
    res.end("This is a simple web server built using Express.js.")
});
app.get('/contact',(req,res,next)=>{
    //console.log("This is a simple web server built using Express.js.");
    //res.end("This is a simple web server built using Express.js.")
   try{
    res.json({
       
        "email": "student@example.com",
        "phone": "123-456-7890"
    })
   }  catch(err){
    next(err);
   }


});

app.get('/random',(req,res)=>{
    const random=Math.floor(Math.random()*100)+1;
    console.log(`random number ${random}`);
    res.end(`random number ${random}`);
});
app.use((res,req,next) =>{
    res.status(404).json({error:'Not found'})
    });
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})