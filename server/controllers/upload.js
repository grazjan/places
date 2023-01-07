import multer from 'multer'
import * as path from 'path'

const uploadStorage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './upload')
    },
    filename: (req, res, cb)  => {
        console.log(res);
        cb(null, Date.now()+  path.extname(res.originalname))
    } 
})
export const upload = multer({storage: uploadStorage})

export const uploadFile = async (req, res) => {
    try {
        res.status(200).json(req.file)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}