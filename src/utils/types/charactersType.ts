enum CharacterStatus {
   Alive = "Alive",
   Dead = "Dead",
   Unknown = "unknown"
}

enum CharacterGender {
   Female = "Female",
   Male = "Male",
   Genderless = "Genderless",
   Unknown = "unknown"
}

export interface Character {
   id: number;
   name: string;
   status: CharacterStatus;
   species: string;
   type: string;
   gender: CharacterGender;
   origin: {
       name: string;
       url: string;
   };
   location: {
       name: string;
       url: string;
   };
   image: string;
   episode: string[];
   url: string;
   created: string;
}
