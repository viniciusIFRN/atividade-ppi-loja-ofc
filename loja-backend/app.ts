import express, { type Express, type Request, type Response } 
from 'express';
import { produtos } from './produtos.ts';
import cors from 'cors'
const app: Express = express();

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.redirect("/produtos");
});

/** Obtém a lista de todos os produtos */
app.get('/produtos', (req: Request, res: Response) => {
  res.json(produtos);
})

/** Devolve um produto específico dado o seu id */
app.get('/produtos/:id', (req: Request, res: Response) => {
    const id = +req.params.id 
    const prod = produtos.filter(p => p.id === id)
    res.json(prod[0])
})

app.listen(3000, () => {
    console.log('Back-end ok!')
});