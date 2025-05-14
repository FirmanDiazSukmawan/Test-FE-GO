import { typeBackgrounds, typeTextColors } from "@/component/color";

export const getTypeBackground = (type?: string): string => {
    if (!type) return "from-gray-200 via-white to-white";
    return typeBackgrounds[type.toLowerCase()] || "from-gray-200 via-white to-white";
  };

  export const getTypeTextColor = (type?: string): string => {
    if (!type) return "text-gray-700";
    return typeTextColors[type.toLowerCase()] || "text-gray-700";
  };