import Characters from "./page/characters/Characters";
import Locations from "./page/locations/Locations";
import Episodes from "./page/episodes/Episodes";
import NotFound from "./page/notFound/NotFound";

export const publickRoutes = [
  {
    path: "/",
    element: Characters,
  },
  {
   path: "/locations",
   element: Locations,
 },
  {
    path: "/episodes",
    element: Episodes,
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
