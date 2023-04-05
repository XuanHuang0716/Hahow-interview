import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ImgMediaCardProps {
    imgPath: string;
    name: string;
    description: string;
    buttonName: string;
    buttonAction: () => void;
  }


const ImgMediaCard = ({imgPath, name, description,buttonName,buttonAction}: ImgMediaCardProps) => {
    return (
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="500"
            image={imgPath}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions style={{display:'flex',justifyContent:'center'}}>
            <Button onClick={buttonAction} size="large">{buttonName}</Button>
          </CardActions>
        </Card>
      );
}    

export default ImgMediaCard;