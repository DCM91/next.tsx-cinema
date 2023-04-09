import { Footer } from "@/components/Footer";
import { Movie } from "@/typesApp";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function FilmDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [film, setFilm] = useState<Movie>();

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
        <div className="hero w-full flex " style={{}}>
          <img src={film.image1} alt={film.name} className="h-96" />

          <div className="hero-overlay bg-opacity-60 w-fit text-center text-neutral-content h-96  p-4">
            <div className="h-96 flex flex-col">
                <h1 className="mb-5 text-5xl font-bold">{film.name}</h1>
                <p className="mb-5">{film.description}</p>
                <p>{film.year}</p>
                <p>{film.type === "film" ? "Película" : "Serie"}</p>

                <Link href={"/"} className="w-full flex justify-end"><button className="btn btn-primary ">
                Back
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
