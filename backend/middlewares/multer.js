import multer from "multer"

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public")
    },
    filename:(req,file,cb)=>{
       cb(null,filename.originalname)
    }
})

const upload=multer({storage})

export default upload