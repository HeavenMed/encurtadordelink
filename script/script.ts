import express , {Request , Response} from "express"
import { URLController } from "../URLController/urlcontrol"


const api = express()
api.use(express.json)

const urlcontroller = new URLController()
api.post("/shorten" , urlcontroller.shorten)

api.get('/test' , (req: Request , res: Response) => {
    res.json( {success : true})
})







api.listen( 5000, ()=> console.log("Express iniciado"))