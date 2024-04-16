import { Character } from "./charactersType"

export type LocationsType = {
      id: number,
      name: string,
      type: string,
      dimension: string,
      residents: Character[]
      url: string,
      created: string | Date
      
}