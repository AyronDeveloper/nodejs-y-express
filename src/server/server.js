const express=require("express")
const { request } = require("http")
const path=require("path")

const  startServer=(options)=>{
    const { PORT, PUBLIC_PATH="public"}=options

    const app=express(9)

    app.use(express.static(PUBLIC_PATH))
    app.get("*",(req,res)=>{
        const indexPath=path.join(__dirname + `../../../${PUBLIC_PATH}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(PORT,()=>{
        console.log(`Puerto: ${PORT}`)
    })
}

module.exports={
    startServer
}