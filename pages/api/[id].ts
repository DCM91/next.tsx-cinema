// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {films} from './data/data'


export default function manejador(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const index = films.findIndex((item) => item.id === parseInt(id as string));

  switch (req.method) {
    case "GET":
      if (id === "all"){
      res.status(200).json({allFilms: films});
      return;
      } if (index !== -1) {
        res.status(200).send(films[index]);
      } else {
        res.status(404).json({ message: `Item with ID ${id} not found` });
      }
      break;
    case "POST":
      const newFilm = req.body;
      if (id === "post"){
      newFilm.id = films[films.length - 1].id + 1;
      newFilm.favorite = false;
      films.push(newFilm);
      res.status(201).redirect("/")
      
    };
      break;
      case "PATCH":
        if (index === -1) {
          return res.status(404).json("Not found");
        } else {
          const updatedFilm = { 
            ...films[index],
            favorite: !films[index].favorite,
            ...req.body
          };
          films[index] = updatedFilm;
          res.status(200).json({ message: "Film updated", film: updatedFilm });
          res.redirect("/");          
        }
        break;
    case 'DELETE':
      if (index !== -1) {
        films.splice(index, 1);
        res.status(202).send('Deleted!');
      } else {
        res.status(404).json({ message: `Item with ID ${id} not found` });
      }
      break;

    default:
      res.status(405).json({
        mensaje: `El método HTTP ${req.method} no esta disponible en esta ruta`,
      });
      break;
  }
}
