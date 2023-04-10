import { Footer } from "@/components/Footer";
import { Movie } from "@/typesApp";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsSkipBackwardBtn } from "react-icons/bs";


function FilmDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [film, setFilm] = useState<Movie>();
  const baseUrl = process.env.NODE_ENV === "production"
  ? `https://next-tsx-cinema.vercel.app/api/${id}`
  : `http://localhost:3000/api/${id}`;

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/${id}`)
        .then((response) => response.json())
        .then((data) => setFilm(data))
        .catch((error) => console.log(error));
    }
  }, [id]);

  if (!film) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-screen grid content-between">
      <Footer>
        <div className="hero h-96 w-full flex " style={{}}>
          <img src={film.image1} alt={film.name} className="h-96" />

          <div className="hero-overlay bg-opacity-60 w-fit text-center text-neutral-content h-96 ">
            <div className="h-96 flex flex-col">
                <h1 className="mb-1 pt-3 text-5xl font-bold">{film.name}&nbsp;<span className="text-2xl">({film.year})</span></h1>
                <div className="divider"></div> 
                <p className="mx-5 text-left">{film.description}</p>
                <div className="divider"></div> 
                <p className="fixed left-72 bottom-44">{film.type === "film" ? "Película" : "Serie"}</p>
                <Link href={"/"} className="fixed right-3 bottom-44"><button className="px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white text-4xl  rounded-lg shadow-md ">
                 <BsSkipBackwardBtn/>
                </button></Link>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default FilmDetails;

// <div className='grid h-screen'>
// <Footer>
// <div className='grid'>
//   <h1>{film.name}</h1>
//   <img src={film.image1} alt={film.name} className='h-40' />
//   <p>{film.year}</p>
//   <p>{film.type === 'film' ? 'Película' : 'Serie'}</p>
//   <p>{film.description}</p>
// </div>
// </Footer>
// </div>
