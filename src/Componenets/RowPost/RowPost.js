import React ,{useEffect,useState} from "react";
import "./RowPost.css";
 import {imgUrl,API_key} from "../../constatnts/constants"
import axios from "../../axios"
import YouTube from "react-youtube";

function RowPost(props) {

  const [movies,setMovies] =useState([])
  const [urlId,seturlId] =useState("")

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data.results);      
  
        setMovies(response.data.results);  
    
    }).catch(err=>{
      // alert("network issue")
    })

  })

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) =>{
    console.log(id); 
    axios.get(`movie/${id}/videos?api_key=${API_key}&language=en-US`).then(response=>{
      console.log(response.data);
      if(response.data.results.length!==0){
        seturlId(response.data);
 
      }else{
        console.log("trailer not available");
      }
    })

  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie)=>
          <img
          onClick={()=>handleMovie(movie.id)}

          className={ props.isSmall ? "small-poster" :"poster"}
          src={`${imgUrl+movie.backdrop_path}`}
          alt="nothing"
        />
        )}
      </div>
     { urlId  && <YouTube  videoId={urlId.key} opts={opts} />}

    </div>
  );
}

export default RowPost;
