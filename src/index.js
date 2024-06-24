const {PORT, PUBLIC_PATH}=require("./config/env")

const {startServer}=require("./server/server")

const main=()=>{
    startServer({PORT, PUBLIC_PATH})
}

(()=>{
    main()
})()