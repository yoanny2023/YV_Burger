import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 2000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
  try {
    res.render("main.ejs");
  } catch (error) {
    console.error("Error:"+error.message);
    res.status(404).send("error",error.message)
  }

});

app.get("/menu",(req,res)=>{
  try {
    res.render("menu.ejs"); 
  } catch (error) {
    console.error("Error:"+error.message);
    res.status(404).send("error",error.message)
  }  

}); 
 
app.listen(port,()=>{
console.log(`Listening on port ${port}`);
});