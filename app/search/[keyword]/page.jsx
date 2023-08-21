import React from 'react'
import Movies from '../../../ui/Movies';

async function Page({ params }) {
    const keyword = params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&language=en-US`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`
            },
        })

    const data = await res.json();

    console.log(data?.results.length, "data")
    return (
        <div>
            {
                data?.results?.length ?
                    <div className='flex flex-wrap items-center gap-3 justify-center'>
                        {
                            data?.results?.map((dt, i) => (
                                <Movies key={i} dt={dt} />
                            ))
                        }
                    </div> :
                    <div>Aranılan Movie Bulunamadı!!!</div>
            }
        </div>
    )
}

export default Page