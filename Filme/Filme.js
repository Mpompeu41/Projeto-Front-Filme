import "./Filme.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({
      title: "",
      year: "",
      cover: "",
      resume: "",
      cast: "",
      genres: "",
  });

  const getFilme = async () => {
    const request = await axios.get(`/movie/findUnique/${id}`);
    const filme = request.data;
    setFilme({...filme});
};

  useEffect(()=>{
      getFilme();
  });
  return(
      <>
      <h1>{filme.title}</h1>
      <span>{filme.year}</span>
      <p>{filme.resume}</p>
      </>
  );
}
