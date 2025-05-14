import { getTypeBackground, getTypeTextColor } from '@/utils/CardStyles'
import Image from 'next/image'
import React from 'react'
import StatusItemComponent from '../statusItem/StatusItemComponent'
import TypeItemComponent from '../typeItem/TypeItemComponent'
import { PokemonListItem } from '@/utils/type/pokemon'
import { motion } from 'framer-motion'

type Props = {
    item: PokemonListItem
}

const CardPokemon = ({ item }: Props) => {
  
    const cardVariants = {
        initial: { scale: 1 },
        hover: { 
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
        },
        tap: { scale: 0.98 }
    }

    return (
        <motion.div
            className={`bg-white rounded-lg shadow-md p-4 flex flex-col items-center gap-2 bg-gradient-to-br ${getTypeBackground(item?.detail?.types?.[0]?.type?.name)} rounded-2xl shadow-xl border-[4px] border-gray-300 flex flex-col justify-between p-3 cursor-pointer`}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 10
            }}
        >
           <motion.div 
    className="relative lg:w-[100px] md:w-[120px] w-[120px] lg:h-[100px] md:h-[120px] h-[120px]"
    initial="initial"
    whileHover="hover"
    whileTap="tap"
    variants={{
        initial: { 
            scale: 1,
            rotate: 0,
            y: 0
        },
        hover: { 
            scale: 1.1,
            rotate: [0, 5, -5, 0],
            y: -10,
            transition: {
                rotate: {
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut"
                },
                scale: {
                    type: "spring",
                    stiffness: 500,
                    damping: 10
                }
            }
        },
        tap: { 
            scale: 0.95,
            rotate: 0
        }
    }}
    transition={{ 
        type: "spring", 
        stiffness: 400,
        damping: 10
    }}
>
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
            delay: 0.2,
            duration: 0.5,
            ease: "backOut"
        }}
    >
        <Image
            src={item?.detail?.sprites?.front_default as string}
            alt={`image of ${item?.name}`}
            fill
            sizes="100%"
            priority
            className="object-cover rounded drop-shadow-lg"
        />
    </motion.div>
    
    {item?.detail?.sprites?.front_default && (
        <motion.div
            className="absolute -bottom-2 -right-2 w-6 h-6 opacity-70"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
                scale: [0, 1, 1, 0],
                rotate: 360,
                opacity: [0, 0.7, 0.7, 0]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
            }}
        >
            <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="white"/>
                <circle cx="12" cy="12" r="10" stroke="red" strokeWidth="2"/>
                <path d="M12 2V22" stroke="black" strokeWidth="2"/>
                <circle cx="12" cy="12" r="3" fill="white" stroke="black" strokeWidth="2"/>
            </svg>
        </motion.div>
    )}
</motion.div>
            
            <motion.h2 
                className={`text-lg font-bold capitalize ${getTypeTextColor(item?.detail?.types?.[0]?.type?.name)} bg-clip-text animate-pulse`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500 }}
            >
                {item?.name}
            </motion.h2>
            
            <div className="text-sm text-gray-700 w-full mb-2">
                <div className={`text-gray-800 ${getTypeTextColor(item?.detail?.types?.[0]?.type?.name)}} flex flex-col items-start gap-1`}>
                    {item?.detail?.stats?.map((statItem, index) => (
                        <StatusItemComponent 
                            key={index} 
                            base_stat={statItem?.base_stat} 
                            effort={statItem?.effort} 
                            stat={statItem?.stat} 
                            type={item?.detail?.types?.[0]?.type?.name} 
                        />
                    ))}
                </div>
                <TypeItemComponent types={item?.detail?.types}/>
            </div>
        </motion.div>
    )
}

export default CardPokemon