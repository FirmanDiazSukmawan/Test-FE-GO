import React from "react";
import { typeItem } from "@/utils/type/pokemon"; 
import { typeIcons } from "@/utils/iconStat";
import {  getTypeTextColor } from "@/utils/CardStyles";

const TypeItemComponent:React.FC<{ types: typeItem[] }> = ({ types }) => {
  return (
    <div className="flex justify-end">
      <span className="capitalize font-semibold flex flex-row">
        {types?.map((item, index) => {
          const Icon = typeIcons[item.type.name];
         
        const textColorIcon = getTypeTextColor(item?.type?.name)
          return (
            <span key={index} className="flex items-center gap-1">
              {Icon && <Icon className={`text-xl ${textColorIcon}`} />}
             
            </span>
          );
        })}
      </span>
    </div>
  );
};

export default TypeItemComponent;
