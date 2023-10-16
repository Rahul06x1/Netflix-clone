import React, { useEffect, useState } from 'react'
import { imageUrl,API_KEY } from '../../constants/constants'
import axios from '../../axios'
import YouTube from 'react-youtube'
import './RowPost.css'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
      axios.get(props.url).then((response)=>{
        setMovies(response.data.results)
        console.log(response.data.results)
      }).catch(err=>{
        // alert('Network Error')
      })
    }, [])
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }
    const movieHandle = (id) => {
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        if(response.data.results.length !== 0){
          setUrlId(response.data.results[0])
        }else{
          console.log('No Trailers Available')
        }
      })
    }
  
  return (
    <div className='row'>
        <h1>{props.title}</h1>
        <div className="posters">
          {movies.map((movie)=>
            <img onClick={()=>movieHandle(movie.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="posters" />
          )
          }           
        </div>
        {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost