import Image from 'next/image';
import React from 'react'

const getMovie = async (id) => {
    const apiKey = process.env.API_KEY
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${apiKey}`
            },
        })
    return await res.json();
}


async function page({ params }) {
    const id = params.id;
    const movieDetail = await getMovie(id);
    console.log(movieDetail, "movie detail")

    return (
        <div className='relative p-7 h-screen'>
            <Image style={{ objectFit: 'cover' }} alt='' fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} />
            <div className='absolute'>
                <div className='text-4xl font-bold my-3'>{movieDetail?.title}</div>
                <div className='w-1/2'>{movieDetail?.overview}</div>
                <div className='my-3'>
                    {movieDetail?.release_date} - {movieDetail?.vote_average}
                </div>
                <div className='my-2 border w-32 p-2 rounded-md text-center text-lg cursor-pointer hover:bg-white hover:text-black'>Trail</div>
            </div>
        </div>
    )
}

export default page