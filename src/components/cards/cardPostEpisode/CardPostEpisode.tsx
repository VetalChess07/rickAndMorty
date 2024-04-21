import {FC} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { ThemeProvider } from '@emotion/react';
import { styled, createTheme } from "@mui/material/styles";

import type { CardPostEpisodeProps } from './type';



const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

const theme = createTheme({
  typography: {
    h3: {
      fontSize: 20,
      fontWeight: 500,
      fontFamily:"Roboto-Medium",
    },
    body1:{
      fontSize: "14px",
      fontFamily:"Roboto-Medium",
      lineHeight:"21px",
      letterSpacing:.25
    },
    body2:{
      fontSize: "14px",
      fontFamily:"Roboto-Medium",
      lineHeight:"21px",
      letterSpacing:.25,
      fontWeight:700
    }
   
  },
});



const CardPostEpisode:FC<CardPostEpisodeProps> = ({name, airDate, episode}) => {
  return (
   <ThemeProvider  theme={theme}>
   <Card sx={{ minWidth: 240, maxHeight: 128, padding: "38px 16px", height:"100%" }}>
   <CardContentNoPadding >
     <Typography variant='h3' >
       {name}
     </Typography>
     <Typography variant='body1' >
       {String(airDate)}
     </Typography>
     <Typography variant='body2' >
       {episode}
     </Typography>
   </CardContentNoPadding>
   </Card>
 </ThemeProvider>
  )
}

export default CardPostEpisode
