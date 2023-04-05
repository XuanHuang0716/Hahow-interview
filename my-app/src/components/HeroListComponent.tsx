import React, { useState, useMemo, useEffect } from "react";
// router import
import { useNavigate } from "react-router-dom";
//material ui import
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
//api import
import { GetHeroResponseData, getHeroes } from "api/api";

interface CustomCardProps {
  imgPath: string;
  name: string;
  buttonAction: () => void;
}

interface HeroCardListProps {
  id: number;
}

interface StyledGridProps {
    elementId: number;
  }

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

const HeroCardList = ({ id }: HeroCardListProps) => {
  const [heroList, setHeroList] = useState<GetHeroResponseData>();
  //   let { heroId } = useParams()
  const [selectedHero, setSelectedHero] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    getHeroes().then((res) => {
      setHeroList(res);
    });
  }, []);

  const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  }));

  const StyledGrid = styled(Grid)<StyledGridProps>`
    margin: 16px;
    border: ${(props) =>
      props.elementId === selectedHero && "10px solid #FF0000"};
  `;

  const CustomCardwithStyle = styled(CustomHeroCard)(({ theme }) => ({
    margin: theme.spacing(1),
    textAlign: "center",
  }));

  const clickCardAction = (id: number) => {
    setSelectedHero(id);
    navigate(`/heroes/${id}`);
  };

  const heroListMemo = useMemo(
    () => (
      <StyledBox>
        {heroList &&
          heroList?.map((hero) => {
            const { id, name, image } = hero;
            return (
              <StyledGrid elementId={id} md={3} key={id}>
                <CustomCardwithStyle
                  imgPath={image}
                  name={name}
                  buttonAction={() => clickCardAction(id)}
                />
              </StyledGrid>
            );
          })}
      </StyledBox>
    ),
    [StyledGrid, heroList]
  );

  return <>{heroListMemo}</>;
};

export default HeroCardList;
