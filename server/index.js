const express= require('express')
const app=express();
const bodyParser=require("body-parser")
const mysql=require("mysql")
//install cors
const cors=require("cors")

const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"hope356",
    database:"movies_details"
})
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

app.get('/api/reviews',(req,res)=>{
    const selectQuery="SELECT * FROM movie_info";
    db.query(selectQuery,(err,result)=>{
      res.send(result);
    })
})

app.post('/api/postreview',(req,res)=>{
    const movieName=req.body.movieName;
    const movieReview=req.body.movieReview;
   const InstSql="INSERT INTO movie_info (movie_name,movie_review) VALUES (?,?)"
    db.query(InstSql,[movieName,movieReview],(err,result)=>{
       
//res.send("data inserted")
console.log(result)
    })

})
app.listen(3000)