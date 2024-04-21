import { FC } from 'react';
import type { cardPostLocationProps } from './type';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { styled, createTheme } from "@mui/material/styles";

import style from "./style.module.scss";
import { ThemeProvider } from '@emotion/react';

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
    }
   
  },
});

const CardPostLocation: FC<cardPostLocationProps> = ({ name, type }) => {


  
  return (
    <ThemeProvider  theme={theme}>
      <Card sx={{ minWidth: 240, padding: "38px 16px", height:"100%" }}>
      <CardContentNoPadding  className={style.inner}>
        <Typography variant='h3' className={style.title}>
          {name}
        </Typography>
        <Typography variant='body1' className={style.text} >
          {type}
        </Typography>
      </CardContentNoPadding>
      </Card>
    </ThemeProvider>
   
  );
}

export default CardPostLocation;