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
      fetch(baseUrl)
        .then((response) => response.json())
        .then((data) => setFilm(data))
        .catch((error) => console.log(error));
    }
  }, [id]);

  if (!film) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{height:'100%', display: 'flex', justifyContent:'space-between', background: "#1C1C1C" }}>
      <Footer>
        <div className="hero h-fit py-6 w-full flex flex-wrap" style={{}}>
          <img src={film.image1} alt={film.name} className="h-96 w-1/3" />

          <div className="hero-overlay bg-opacity-60 grid  w-2/3 text-center text-neutral-content h-fit">
            <div className="h-96 flex flex-col flex-wrap">
                <h1 className="pt-2 text-5xl font-bold py-2">{film.name}&nbsp;<span className="text-2xl">({film.year})</span></h1>
                <p className="mx-4 text-left h-44 pt-3 overflow-y-hidden">{film.description}</p>
                <p className="static text-start px-3 pt-5">{film.type === "film" ? "Película" : "Serie"}</p>
                <Link href={"/"} className="px-3 py-1 static text-end"><button className="px-3 bg-orange-500 hover:bg-orange-600 text-white text-4xl  rounded-lg shadow-md ">
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
