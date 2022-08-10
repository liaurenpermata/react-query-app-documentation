import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query'


const fetchPlanets = async () => {
    const res = await fetch('https://swapi.dev/api/people/')
    return res.json();
}

const getPlanets = async(id) => {
    try {
        const url = `https://swapi.dev/api/films/${id}`;
        const response = await axios.get(url);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const Planet = () => {

    // const result = useQuery(['planets'], () => fetchPlanets, {
    //     initialData: [],
    // }); 


    const {data, error} = useQuery("planets", () => getPlanets(1))

    console.log(data);
    console.log("inierror", error);

  return (
    <div>Planet</div>
  )
}

export default Planet