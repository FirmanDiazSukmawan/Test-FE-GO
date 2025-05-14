"use client"
import PaginationButtons from "@/component/button/PaginationButtons";
import CardPokemon from "@/component/card/cardPokemon";
import PokemonLoader from "@/component/loading/BootsplashLoader/pokemonLoader";
import CardPokemonSkeleton from "@/component/loading/cardSkeleton/cardPokemonSkeleton";
import axiosInstance from "@/utils/axios/axios";
import { NamedAPIResource, PokemonListItem } from "@/utils/type/pokemon";
import { useEffect, useState } from "react";





export default function Home() {
  const [pokemonData,setPokemonData]= useState<PokemonListItem[]>([])
  const [offset, setOffset] = useState<number>(0);
  const limit = 12;
  const [loading,setLoading] = useState<boolean>(false)
  const [hasFetched, setHasFetched] = useState<boolean>(false);

  const getData = async (offsetValue:number) => {
    setLoading(true)
    setHasFetched(false);
    try {
      const res = await axiosInstance.get('pokemon',{
        params:{
          limit:limit,
          offset: offsetValue,
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
      setLoading(false)
      setHasFetched(true);
      return combinedData;
  
    } catch (error) {
      console.error(error);
      setLoading(false)
      setHasFetched(true);
      return [];
    }
  };

  useEffect(() => {
    getData(offset);
  }, [offset]);
  

  const handleNext = () => {
    if(!loading){
    setOffset(prev => prev + limit);
  }
  };

  const handlePrev = () => {
    if (offset > 0 && !loading) {
      setOffset(prev => prev - limit);
    }
  };

  


  return (
    <div className="flex flex-col min-h-screen p-4 items-center justify-center bg-gray-950 ">
       <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="relative inline-block">
          <PokemonLoader />
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4 animate-pulse">
            Pokémon Universe
          </h1>
        </div>
        <p className="text-xl text-gray-600 mb-6">
          Discover and explore your favorite Pokémon
        </p>
        <div className="flex justify-center">
          <div className="w-24 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 gap-6 w-full">
      {loading ? (
        
          Array.from({ length: 12 }).map((_, index) => (
            <CardPokemonSkeleton key={index} loading={loading} />
          ))
        ) : hasFetched && pokemonData?.length === 0 ? (
          <div>No Data</div>
        ) : (
          pokemonData?.map((item, index) => (
            <CardPokemon key={index} item={item} />
          ))
        )}
      </div>

      <PaginationButtons
        handlePrev={handlePrev}
        handleNext={handleNext}
        loading={loading}
        offset={offset}
      />
    </div>
  );
}
