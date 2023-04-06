// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {films} from '../api/data/data'



export default function manejador(req: NextApiRequest, res: NextApiResponse) {
  
  switch (req.method) {
    case "GET":
      res.status(200).json({allFilms: films});

      break;

    case "PATCH":
      // Nuestra lógica de código para el método PATCH...
      break;

      case "DELETE":
        const id = parseInt(req.query.id as string, 10);
        const film = films.find((film) => film.id === id);
      
        if (!film) {
          return res.status(404).send("Not found");
        }
      
        const index = films.findIndex((film) => film.id === id);
        films.splice(index, 1);
        res.status(200).send({ message: "Deleted" });
        break;
      



    default:
      res.status(405).json({
        mensaje: `El método HTTP ${req.method} no esta disponible en esta ruta`,
      });
      break;
  }
}