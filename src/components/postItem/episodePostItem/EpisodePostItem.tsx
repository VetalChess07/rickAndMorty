import {FC} from 'react'

import type { EpisodePostItemProps } from './type'
import CardPostEpisode from 'src/ui/cards/cardPostEpisode/CardPostEpisode'

const EpisodePostItem:FC<EpisodePostItemProps> = ({name, airDate, episode}) => {
  return (
   <CardPostEpisode name={name} airDate={airDate} episode={episode} />
  )
}

export default EpisodePostItem
