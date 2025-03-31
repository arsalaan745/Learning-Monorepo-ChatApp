import express from "express"

const app = express();

app.get("/signup", (req, res)=>{
    res.send("Hello World");
})

app.get("/signin", (req, res)=>{
    res.send("Hello World");
})


app.get("/chat", (req, res)=>{
    res.send("Hii leo");
})

app.listen(3001, () => {
    console.log(`Server running on port 3001`);
});