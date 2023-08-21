import React from 'react'
import Movies from '../ui/Movies';

async function Home({ searchParams }) {
  const apiKey = process.env.API_KEY;

  const res = await fetch(`https://api.themoviedb.org/3/movie/${searchParams.genre ? searchParams.genre : "top_rated"}?language=en-US`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      next: { revalidate: 10000 }
    })

  const data = await res.json();

  console.log(data, "data")
  return (
    <div className='flex flex-wrap items-center gap-3 justify-center'>
      {
        data?.results?.map((dt, i) => (
          <Movies key={i} dt={dt} />
        ))
      }
    </div>
  )
}

export default Home