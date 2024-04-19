import NotFound from "./page/notFound/NotFound";
import Characters from "./page/characters/Characters";
import CharacterInfo from "./page/characterInfo/CharacterInfo";
import Locations from "./page/locations/Locations";
import LocationsInfo from "./page/locationsInfo/LocationsInfo";
import Episodes from "./page/episodes/Episodes";
import EpisodeInfo from "./page/episodeInfo/EpisodeInfo";

export const publickRoutes = [
  {
    path: "/",
    element: Characters,
  },
  {
    path: "/characters/:id",
    element: CharacterInfo,
  },
  {
   path: "/locations",
   element: Locations,
 },
 {
  path: "/locations/:id",
  element: LocationsInfo,
},
  {
    path: "/episodes",
    element: Episodes,
  }, {
    path: "/episodes/:id",
    element: EpisodeInfo,
  },
  {
    path: "*",
    element: NotFound,
  },
];

export const headerNavRoutes = [
  {
    path: "/",
    text: "Characters",
  },
  {
   path: "/locations",
   text: "Locations",
 },
  {
    path: "/episodes",
    text: "Episodes",
  },
]
export const arrRoutesisGoBackDisabled = [
  '/', '/locations', '/episodes'
] 
