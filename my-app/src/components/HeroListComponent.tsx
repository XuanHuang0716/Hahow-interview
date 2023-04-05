import React , {useState , useMemo ,useEffect} from "react";
//material ui import
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
//api import
import { GetHeroResponseData , getHeroes } from  "api/api"; 


interface CustomCardProps {
  imgPath: string;
  name: string;
  buttonAction: () => void;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CustomHeroCard = ({ imgPath, name, buttonAction }: CustomCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={buttonAction}>
        <CardMedia component="img" height="140" image={imgPath} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const CustomCardwithStyle = styled(CustomHeroCard)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

const HeroCardList = () => {
  const [heroList, setHeroList] = useState<GetHeroResponseData>();

  useEffect(()=>{
    getHeroes().then((res)=>{
      console.log('res',res);
      setHeroList(res);
    })
  },[])


  return (
    <Grid container spacing={1}>
      <Grid md={2} />
      <Grid md={2}>
        <Item>xs=3</Item>
      </Grid>
      <Grid md={2}>
        <Item>xs=3</Item>
      </Grid>
      <Grid md={2}>
        <Item>xs=3</Item>
      </Grid>
      <Grid md={2}>
        <Item>xs=3</Item>
      </Grid>
      <Grid md={2} />
    </Grid>
  );
};

export default HeroCardList;
