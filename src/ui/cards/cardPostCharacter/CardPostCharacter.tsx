import {FC} from 'react'
import Card from '@mui/material/Card';
import { useMediaQuery } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardPostCharacterProps } from './type';

const CardPostCharacter:FC<CardPostCharacterProps> = ({image, title, text}) => {
  const isSmallScreen = useMediaQuery('(max-width:360px)');
  const cardHeight = isSmallScreen ? 232: 168;
  const cardWidth = isSmallScreen ? 312: 240;


   return (
      <Card  sx={{height: "100%", boxShadow: '1px 2px 2px rgba(0,0,0,.14)',  }}>
        <CardMedia
         height={cardHeight}
         width={cardWidth}
          image={image}
          alt={title}
          component="img"
        />
        <CardContent sx={{ textAlign: 'left', padding:"12px 16px !important",paddingBottom: "10px" }}>
          <Typography component="h3" sx={{ fontSize: '20px', fontWeight: 'bold', lineHeight: "30px" }}>
           {title}
          </Typography>
          <Typography component="span" sx={{ fontSize: '14px', fontWeight: 400,
           color: "rgba(0,0,0,.6)", lineHeight: "21px" }} >
           {text}
          </Typography>
        </CardContent>
       
      
      </Card>
    );
}

export default CardPostCharacter
