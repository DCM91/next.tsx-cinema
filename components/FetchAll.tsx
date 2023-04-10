/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useFetch } from "../utils/useFetch";
import { Movie } from "@/typesApp";
import { RiFilmFill } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
import Link from "next/link";
import AddFilm from "./AddFilm";




export default function Films() {
  const { data, loading, error } = useFetch("http://localhost:3000/api/all");
  const films = data.allFilms;
  
  if (loading || data.length === 0) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div
    className=""
 
    >
      <div>
        <h1 className="flex text-5xl w-100 my-2 py-2 px-2 font-bold bg-gradient-to-r from-red-500 to-yellow-500 text-white"><RiFilmFill className="text-black p-1 mr-4 text-6xl -rotate-45 -backdrop-hue-rotate-30" />Filmoteca</h1>
       

        {/* COMPONENTE FILTROOOOOOOOOOOOOOO */}
        <AddFilm />



      </div>


    <div className="flex flex-wrap place-content-center p-2">
      {films.map((film: Movie) => (
        <div
          key={film.id}
          className="card w-100 h-80 card-side m-1 mt-2  bg-gray-900 shadow-md glass "
        >
          {" "}
  
          <figure className=" w-40 h-full ">
            <img 
            src={film.image1} 
            alt={film.name} 
            className="h-full"
            

            />
          </figure>


          <div className="block justify-between">
            <div className="card-title w-40 p-4 text-center" >
              <h2 className="w-full" >{film.name}</h2>{" "}
            </div>
          
            <div className="grid w-full h-30 pt-5 p-2  place-content-start" >
              <div className="badge badge-error p-1 text-black font-bold">{film.type}</div> <br/>
              <div className="badge badge-error p-1 text-black font-bold">año {film.year}</div> 
            </div>
            <div className="grid w-100 mt-8 place-content-end pr-3 ">
            <Link href={`/films/${film.id}`}>
              <button className="btn text-2xl text-black font-extrabold bg-yellow-400 transition duration-500 hover:bg-yellow-600 ">+ INFO</button>
            </Link>
            </div>
            <div className="grid w-full place-content-end p-2">
            {film.favorite ? <button className="mt-12 mr-2 content-end badge bg-red-700 hover:scale-125"><MdFavorite/></button > : <button  className="mt-12 mr-2 content-end badge hover:scale-125"><MdFavorite/></button >}
            </div>


          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
