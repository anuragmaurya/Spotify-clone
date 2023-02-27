import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsFillPlayFill } from 'react-icons/bs';

const Library = () => {

  const [artist, setArtist] = useState([]);

  const music = async () => {
    try {
      await axios.get(`https://ws.audioscrobbler.com/2.0/?method=library.getartists&api_key=8c8275daad2b3b4e4f052e2738b1c80f&user=joanofarctan&format=json`)
        // await axios.get(`https://api.deezer.com/track/3135556`)
        .then((res) => {
          setArtist(res.data.artists.artist);
          console.log(res)
        })

    }
    catch (error) {
      console.log(error)
    }
  }

  // Spotify API


  //{ const ACCESS_TOKEN = 'BQDBPWsCaOLXPd4xACar6AnckrnQB7reBg1CXAGMrOOJZoBQQxCnzq5EGcrSKki3SmsIkeV3HLZwPkDUhH7L1u0VrZo7BiNJbqeRKfWaXgK5mZlycQB_2kKQ4-lBbHmg5_Lim66OXPAw2kd7xQFcItbOaCh9Ai4B3qTXLIiO3DiRvD1WTQaEy92D1FCNvCXshaSyPCKmzkqbALk64O3HUw_C';

  // const headers = {
  //   'Authorization': `Bearer ${ACCESS_TOKEN}`
  // };

  // axios.get('https://api.spotify.com/v1/me', { headers })
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });}

  useEffect(() => {
    music()

  }, [])

  return (


    <div className='bg-neutral-900/[0.98] h-[100%] text-2xl pl-8 -mt-10 pr-8'>
      <div className='flex pt-20 justify-between'>
        <a href='' className='  font-bold text-white hover:underline'>Focus</a>
        <a href='' className=' flex items-center text-gray-400 text-sm font-semibold hover:underline'>Show all</a>
      </div>
      <div className=' grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 mr-4 gap-4 pt-8 items-stretch'>
        {
          artist.map((res, index) => {
            const { image, name, mbid, url } = res;
            return (
              <div className='overflow overflow-x-hidden' key={index}>
                <a href={url}>
                  <div className='pb-5 max-w-[48] flex-none object-contain bg-black/[0.25] rounded-lg shadow-md pt-4 pl-4 pr-4 hover:bg-zinc-800 transition duration-200 ease-in-out hover:delay-200 relative' >
                    <div className='flex justify-center'>
                      <img src={image[2]['#text']} alt="" className=' rounded-md' />
                      <div className='absolute flex justify-end items-end pr-8 pb-[4.8rem] inset-0 opacity-0 hover:opacity-100'>
                        <button className='flex  bg-green-500 h-12 w-12 rounded-full items-center justify-center transition ease-in-out duration-1000 hover:delay-500'>
                          <BsFillPlayFill className='text-3xl' />
                        </button>
                      </div>
                    </div>
                    <div className='text-white text-base font-semibold pt-2'>{name}</div>
                    <p className='text-white text-xs'>A very similar song</p>

                  </div>
                </a>


              </div>
            )
          })
        }
      </div >
    </div >
  );
};

export default Library;
