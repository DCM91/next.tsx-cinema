import { Footer } from '@/components/Footer';
import { Movie } from '@/typesApp';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
    <div className='grid h-screen'>
    <Footer>
    <div className='grid'>
      <h1>{film.name}</h1>
      <img src={film.image1} alt={film.name} className='h-40' />
      <p>{film.year}</p>
      <p>{film.type === 'film' ? 'Película' : 'Serie'}</p>
      <p>{film.description}</p>
    </div>
    </Footer>
    </div>

  );
}

export default FilmDetails;
