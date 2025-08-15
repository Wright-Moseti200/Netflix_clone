import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Video = () => {
    const { videoid } = useParams();
    const [videoData, setVideoData] = useState(null);
    const [movieDetails, setMovieDetails] = useState(null);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjA2MDc0NWY3Y2ZhMDUyYjE5MmQ0NmI1OTRkMTQxMiIsIm5iZiI6MTc1NTA3NzYzOC41NzksInN1YiI6IjY4OWM1YzA2YmEwNTMwMzZhNjZkNzkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tIO1eXGrobcRWYKtNVYxODMtepsa93TjXDdQ7ICttPM'
        }
    };

    useEffect(() => {
        // Fetch movie videos
        fetch(`https://api.themoviedb.org/3/movie/${videoid}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(data => {
                const trailer = data.results.find(video => video.type === "Trailer") || data.results[0];
                setVideoData(trailer);
            })
            .catch(err => console.error(err));

        // Fetch movie details
        fetch(`https://api.themoviedb.org/3/movie/${videoid}?language=en-US`, options)
            .then(res => res.json())
            .then(data => setMovieDetails(data))
            .catch(err => console.error(err));
    }, [videoid]);

    if (!videoData || !movieDetails) return <div>Loading...</div>;

    return (
        <div className='min-h-screen bg-black text-white'>
            <div className='container mx-auto p-4'>
                <h1 className='text-3xl font-bold mb-4'>{movieDetails.title}</h1>
                <div className='aspect-w-16 aspect-h-9 mb-4'>
                    <iframe
                        src={`https://www.youtube.com/embed/${videoData.key}`}
                        title={videoData.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className='w-full h-[600px]'
                    />
                </div>
                <div className='space-y-4'>
                    <p className='text-lg'>{movieDetails.overview}</p>
                    <div className='flex gap-4 text-sm'>
                        <span>Release Date: {movieDetails.release_date}</span>
                        <span>Rating: {movieDetails.vote_average.toFixed(1)}/10</span>
                        <span>Runtime: {movieDetails.runtime} mins</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Video;