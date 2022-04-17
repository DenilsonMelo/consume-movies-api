import React from 'react';
import { useParams } from 'react-router-dom';

function Details(){
  const { id } = useParams();
  
  return(
    <h1>Detalhes</h1>
  );
}

export default Details;