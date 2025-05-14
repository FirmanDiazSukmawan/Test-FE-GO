import { IconType } from "react-icons";
import {
  GiHeartPlus,
  GiBroadsword,
  GiShield,
  GiMagicSwirl,
  GiArmorVest,
  GiWingfoot,
  GiFire,
  GiWaterSplash,
  GiElectric,
  GiRock,
  GiGrass,
  GiFist,
  GiPoison,
  GiGhost,
  GiFairyWand,
  GiSteelClaws,
  GiIceBolt,
  GiEvilMinion,
  GiStarsStack,
  GiFlyingTarget,
} from "react-icons/gi";
import { FaDragon, FaBrain, FaQuestion } from "react-icons/fa"; 
import { IoMdBug, IoMdCloudyNight } from "react-icons/io";



const statIcons: Record<string, IconType> = {
  hp: GiHeartPlus,
  attack: GiBroadsword,
  defense: GiShield,
  "special-attack": GiMagicSwirl,
  "special-defense": GiArmorVest,
  speed: GiWingfoot,
};

const typeIcons: Record<string, IconType> = {
    normal: GiShield, 
    fighting: GiFist,
    flying: GiFlyingTarget,
    poison: GiPoison,
    ground: IoMdCloudyNight, 
    rock: GiRock, 
    bug: IoMdBug, 
    ghost: GiGhost,
    steel: GiSteelClaws,
    fire: GiFire, 
    water: GiWaterSplash, 
    grass: GiGrass, 
    electric: GiElectric,
    psychic: FaBrain, 
    ice: GiIceBolt,
    dragon: FaDragon,
    dark: GiEvilMinion,
    fairy: GiFairyWand,
    stellar: GiStarsStack,
    unknown: FaQuestion,
  };

export { statIcons, typeIcons };
