import express from "express";

const app = express();

app.use(express.json());

app.use("/",routes)

const server = app.listen(process.env.PORT,()=>{
    console.log(`app listening at ${process.env.PORT}`);
})

process.on("unhandledRejection",(err)=>{
    console.log(`--error:${err.message}`);
    console.log("closing down server due to unhandled rejection");
    server.close(()=>{
        process.exit(1);
    })
})