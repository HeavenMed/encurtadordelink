import shortid from 'shortid'
import { Request, response, Response } from 'express'
import {config} from '../config/Constants'



export class URLController {
    public async shorten( req:Request , res:Response): Promise<void> {
        // ver se a url já não existe
        // criar o HASH para a url

        const { originURL} = req.body;
        const hash = shortid.generate()
        const shortURL = `${config.API_URL}/${hash}`
        // salvar a url no banco
        // retornar a url que salvamos
        response.json({ originURL, hash , shortURL})
    }
}