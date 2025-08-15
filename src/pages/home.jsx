/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import "./home.css";
import netflix from "../assets/logo.png";
import search from "../assets/search_icon.svg";
import notification from "../assets/bell_icon.svg";
import profile from "../assets/profile_img.png";
import caret from "../assets/caret_icon.svg";
import herotitle from "../assets/hero_title.png";
import play from "../assets/play_icon.png";
import moreinfo from "../assets/info_icon.png";
import '../assets/cards/Cards_data';
import facebook from "../assets/facebook_icon.png";
import instagram from "../assets/instagram_icon.png";
import twitter from "../assets/twitter_icon.png";
import youtube from "../assets/youtube_icon.png";
import {Button,Dialog,DialogHeader,DialogBody,DialogFooter,} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Home = () => {
    
    let [categories]=useState(["now_playing","popular","top_rated","upcoming"]);
    let [data1,setdata1]=useState();
    let [data2,setdata2]=useState();
    let [data3,setdata3]=useState()
    let [data4,setdata4]=useState()
 const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjA2MDc0NWY3Y2ZhMDUyYjE5MmQ0NmI1OTRkMTQxMiIsIm5iZiI6MTc1NTA3NzYzOC41NzksInN1YiI6IjY4OWM1YzA2YmEwNTMwMzZhNjZkNzkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tIO1eXGrobcRWYKtNVYxODMtepsa93TjXDdQ7ICttPM'
  }
};

useEffect(
    ()=>{
 fetch(`https://api.themoviedb.org/3/movie/${categories[0]}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setdata1(res.results));  
    
 fetch(`https://api.themoviedb.org/3/movie/${categories[1]}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setdata2(res.results));
    
  fetch(`https://api.themoviedb.org/3/movie/${categories[2]}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setdata3(res.results)
);
    
 fetch(`https://api.themoviedb.org/3/movie/${categories[3]}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setdata4(res.results));
}
,[categories]);
function update (){
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjA2MDc0NWY3Y2ZhMDUyYjE5MmQ0NmI1OTRkMTQxMiIsIm5iZiI6MTc1NTA3NzYzOC41NzksInN1YiI6IjY4OWM1YzA2YmEwNTMwMzZhNjZkNzkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tIO1eXGrobcRWYKtNVYxODMtepsa93TjXDdQ7ICttPM'
  }
};

fetch('https://api.themoviedb.org/3/movie/279/videos?language=en-US', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
}
update();
  return (
    <div className='h-screen'>
    <div class='background h-screen'>
        <nav className='flex flex-row h-18 justify-between items-center'>
            <div className='flex flex-row w-220 justify-around h-8 items-center'>
            <img src={netflix} className='h-8' alt='netflix-logo'/>
            <p>Home</p>
            <p>Tv Shows</p>
            <p>Movies</p>
            <p>News&Popular</p>
            <p>My list</p>
            <p>Browse by languages</p>
            </div>
            <div className='flex flex-row items-center justify-around w-50'>
                <img className='h-5' src={search}/>
                <p>Children</p>
                <img className='h-5' src={notification}/>
                <img src={profile}/>
                <img src={caret}/>
            </div>
        </nav>
        <div className='hero-title flex flex-col h-3/4 justify-center w-1/2 items-center'>
        <img src={herotitle} className='h-70 w-140'/>
        <br/>
        <p className='w-140'>Discovering his ties to a secret ancient order, a young man living in mordern
        istanbul embarks on a quest to save the city from an immortal enemy
        </p>
        <br/>
        <div className='flex flex-row w-140 gap-10 '>
            <button className='flex justify-center w-30 items-center gap-3 text-black rounded-lg bg-white p-3'><img className='h-6' src={play}/>Play</button>
            <button className='flex justify-center items-center gap-3 bg-neutral-400 rounded-lg p-3'><img className='h-6' src={moreinfo}/>More info</button>
        </div>
        </div>
    </div>
    <div className='space-y-8'>
        <div className='pl-4'>
            <h1 className='text-xl font-bold mb-4'>Now Playing</h1>
            <div className='flex overflow-x-auto gap-4 pb-4 hide-scrollbar'>
                {data1?.map((movie) => (
    <Link to={`/video/${movie.id}`} key={movie.id}>
        <div 
            className='flex-shrink-0 h-[135px] w-[250px] rounded-sm cursor-pointer hover:scale-105 transition-transform duration-300'
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className='h-full w-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-3'>
                <p className='text-white text-sm font-semibold'>{movie.title}</p>
            </div>
        </div>
    </Link>
))}
            </div>
        </div>

        <div className='pl-4'>
            <h1 className='text-xl font-bold mb-4'>Popular Movies</h1>
            <div className='flex overflow-x-auto gap-4 pb-4 hide-scrollbar'>
                {data2?.map((movie) => (
    <Link to={`/video/${movie.id}`} key={movie.id}>
        <div 
            className='flex-shrink-0 h-[135px] w-[250px] rounded-sm cursor-pointer hover:scale-105 transition-transform duration-300'
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className='h-full w-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-3'>
                <p className='text-white text-sm font-semibold'>{movie.title}</p>
            </div>
        </div>
    </Link>
))}
            </div>
        </div>

        <div className='pl-4'>
            <h1 className='text-xl font-bold mb-4'>Top Rated</h1>
            <div className='flex overflow-x-auto gap-4 pb-4 hide-scrollbar'>
                {data3?.map((movie) => (
    <Link to={`/video/${movie.id}`} key={movie.id}>
        <div 
            className='flex-shrink-0 h-[135px] w-[250px] rounded-sm cursor-pointer hover:scale-105 transition-transform duration-300'
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className='h-full w-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-3'>
                <p className='text-white text-sm font-semibold'>{movie.title}</p>
            </div>
        </div>
    </Link>
))}
            </div>
        </div>

        <div className='pl-4'>
            <h1 className='text-xl font-bold mb-4'>Upcoming Movies</h1>
            <div className='flex overflow-x-auto gap-4 pb-4 hide-scrollbar'>
                {data4?.map((movie) => (
    <Link to={`/video/${movie.id}`} key={movie.id}>
        <div 
            className='flex-shrink-0 h-[135px] w-[250px] rounded-sm cursor-pointer hover:scale-105 transition-transform duration-300'
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className='h-full w-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-3'>
                <p className='text-white text-sm font-semibold'>{movie.title}</p>
            </div>
        </div>
    </Link>
))}
            </div>
        </div>
    </div>
    <footer className='bg-black text-gray-200 py-8 px-4 mt-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Social Media Icons */}
        <div className='flex gap-4 mb-6'>
          <a href="#" className='hover:opacity-80'>
            <img src={facebook} alt="Facebook" className='h-8 w-8' />
          </a>
          <a href="#" className='hover:opacity-80'>
            <img src={instagram} alt="Instagram" className='h-8 w-8' />
          </a>
          <a href="#" className='hover:opacity-80'>
            <img src={twitter} alt="Twitter" className='h-8 w-8' />
          </a>
          <a href="#" className='hover:opacity-80'>
            <img src={youtube} alt="YouTube" className='h-8 w-8' />
          </a>
        </div>

        <div className='grid grid-cols-4 gap-6 mb-8'>
          <div>
            <ul className='space-y-2 text-sm'>
              <li><a href="#" className='hover:text-white'>Audio Description</a></li>
              <li><a href="#" className='hover:text-white'>Investor Relations</a></li>
              <li><a href="#" className='hover:text-white'>Legal Notices</a></li>
            </ul>
          </div>
          <div>
            <ul className='space-y-2 text-sm'>
              <li><a href="#" className='hover:text-white'>Help Center</a></li>
              <li><a href="#" className='hover:text-white'>Jobs</a></li>
              <li><a href="#" className='hover:text-white'>Cookie Preferences</a></li>
            </ul>
          </div>
          <div>
            <ul className='space-y-2 text-sm'>
              <li><a href="#" className='hover:text-white'>Gift Cards</a></li>
              <li><a href="#" className='hover:text-white'>Terms of Use</a></li>
              <li><a href="#" className='hover:text-white'>Corporate Information</a></li>
            </ul>
          </div>
          <div>
            <ul className='space-y-2 text-sm'>
              <li><a href="#" className='hover:text-white'>Media Center</a></li>
              <li><a href="#" className='hover:text-white'>Privacy</a></li>
              <li><a href="#" className='hover:text-white'>Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className='text-sm'>
          <button className='border border-gray-200 px-4 py-2 mb-8 hover:text-white hover:border-white'>
            Service Code
          </button>
          <p className='text-gray-200'>&copy; 1997-{new Date().getFullYear()} Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Home