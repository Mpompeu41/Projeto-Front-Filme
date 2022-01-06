import "./Filme.scss";
import axios from "axios";
import { setFilme, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Filme() {
  const [setFilm] = useState({});

  const { id } = useParams();
  const [setFilme] = useState({
      title: "",
      year: "",
      cover: "",
      resume: "",
      cast: "",
      genres: "",
  })
  useEffect(()=>{
      getFilme();
  })
  
  const getFilme = async () => {
      const request = await axios.get(`/movie/findUnique/${id}`);
      const filme = await request.id;
      setFilme(filme)
  }
  

}













// import { useState } from 'react/cjs/react.development';
// import './Filme.scss';

// export default function Filme() {
  
//   const [filme, setFilme] = useState({});

//   return (
//     <div className='filme'>
//       <h2>{filme.scientificName}</h2>
//       <img src={filme.imageUrl} alt={filme.commonName} />
//       <h3>{filme.commonName}</h3>
//       <p>{filme.description}</p>
//     </div>
//   )
// }