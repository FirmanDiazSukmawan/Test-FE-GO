"use client"
import CardPokemon from "@/component/card/cardPokemon";
import axiosInstance from "@/utils/axios/axios";
import { NamedAPIResource, PokemonListItem } from "@/utils/type/pokemon";
import { useEffect, useState } from "react";





export default function Home() {
  const [pokemonData,setPokemonData]= useState<PokemonListItem[]>([])

  const getData = async () => {
    try {
      const res = await axiosInstance.get('pokemon',{
        params:{
          limit:12,
          offset:0
        }
      });
      const list = res?.data?.results;
  
     
      const detailResponses = await Promise.all(
        list.map((pokemon:NamedAPIResource) => axiosInstance.get(pokemon.url))
      );
  
      const combinedData = list?.map((pokemon:NamedAPIResource, index: number) => {
       
        return {
          ...pokemon,
          detail: detailResponses[index].data,
        };
      });
      
  
      setPokemonData(combinedData)
      return combinedData;
  
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  console.log(pokemonData)

  

  useEffect(()=>{
  getData()
  },[])

  


  return (
    <div className="flex flex-col min-h-screen p-4 items-center justify-center ">
      <h3 className="text-2xl font-semibold mb-8">Pokemon List</h3>

      <div className="grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 gap-6 w-full">
       {pokemonData?.length > 0 ? pokemonData?.map((item,index)=>{
        
      
        return(
       <CardPokemon key={index} item={item}/>
        )}): <div> NO DATA</div>}
      </div>
    </div>
  );
}
