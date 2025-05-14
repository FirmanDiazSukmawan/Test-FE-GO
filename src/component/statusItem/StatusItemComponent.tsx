
import { getTypeTextColor } from "@/utils/CardStyles";
import { statIcons } from "@/utils/iconStat";
import { StatItem } from "@/utils/type/pokemon";




const StatusItemComponent: React.FC<StatItem> = ({ stat, base_stat,type }) => {
  const Icon = statIcons?.[stat?.name];


  
    return (
      <div className="flex items-center gap-2 w-full">
        {Icon && <Icon className={`text-xl text-gray-900  ${getTypeTextColor(type)}} `} />}
        <span className=" flex flex-row justify-between w-full">
          <h3 className={`capitalize  text-gray-900`}>{stat?.name?.replace("-", " ")} :</h3>
         <span className="font-semibold">{base_stat}</span>
        </span>
      </div>
    );
  };


  export default StatusItemComponent;
