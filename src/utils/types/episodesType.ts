import type { Character } from "./charactersType"

export type Episode = {
   air_date :string
   characters:Character[]
   created: Date | string
   episode:string
   id: number
   name: string 
   url: string
}