import Skeleton from "../skeleton";

type Props = {
  loading: boolean;
};

const CardPokemonSkeleton = ({ loading }: Props) => {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center gap-2 bg-gradient-to-br animate-pulse">
      
        <div className="relative lg:w-[100px] md:w-[120px] w-[120px] lg:h-[100px] md:h-[120px] h-[120px]">
          <Skeleton className="w-full h-full rounded" />
        </div>
        
       
        <div className="w-32 h-6 bg-gray-300 rounded-md mb-2" />

       
        <div className="w-full mb-2">
          <div className="flex flex-col items-start gap-2">
            <Skeleton className="w-32 h-3 bg-gray-300 rounded-md" />
            <Skeleton className="w-28 h-3 bg-gray-300 rounded-md" />
            <Skeleton className="w-24 h-3 bg-gray-300 rounded-md" />
            <Skeleton className="w-24 h-3 bg-gray-300 rounded-md" />
            <Skeleton className="w-24 h-3 bg-gray-300 rounded-md" />
            <Skeleton className="w-24 h-3 bg-gray-300 rounded-md" />
            <Skeleton className="w-24 h-3 bg-gray-300 rounded-md" />
          
          </div>
        </div>
        <Skeleton className="w-24 h-6 bg-gray-300 rounded-md" />
      </div>
    );
  }

  return null; 
};

export default CardPokemonSkeleton;
