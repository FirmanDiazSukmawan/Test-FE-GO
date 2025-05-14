import { getTypeBackground, getTypeTextColor } from '@/utils/CardStyles'
import Image from 'next/image'
import React from 'react'
import StatusItemComponent from '../statusItem/StatusItemComponent'
import TypeItemComponent from '../typeItem/TypeItemComponent'
import { PokemonListItem } from '@/utils/type/pokemon'

type Props = {
    item:PokemonListItem
}

const CardPokemon = ({item}: Props) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 flex flex-col items-center gap-2 bg-gradient-to-br ${getTypeBackground(item?.detail?.types?.[0]?.type?.name)} rounded-2xl shadow-xl border-[4px] border-gray-300 flex flex-col justify-between p-3`}>
    <div className="relative lg:w-[100px] md:w-[120px] w-[120px] lg:h-[100px] md:h-[120px] h-[120px]">
      <Image
      src={item?.detail?.sprites?.front_default as string}
      alt={`image of ${item?.name}`}
      fill
      sizes="100%" 
      priority
      className="object-cover rounded"
      />
  </div>
      <h2 className={`text-lg font-bold  capitalize ${getTypeTextColor(item?.detail?.types?.[0]?.type?.name)} `}>{item?.name}</h2>
      <div className="text-sm text-gray-700 w-full mb-2">
      <div className={`text-gray-800 ${getTypeTextColor(item?.detail?.types?.[0]?.type?.name)}} flex flex-col items-start gap-1 `}>
    {item?.detail?.stats?.map((statItem, index) => (
   <StatusItemComponent key={index} base_stat={statItem?.base_stat} effort={statItem?.effort} stat={statItem?.stat} type={item?.detail?.types?.[0]?.type?.name} />
      ))}
  </div>
          <TypeItemComponent types={item?.detail?.types}/>
    </div>
     
    </div>
  )
}

export default CardPokemon