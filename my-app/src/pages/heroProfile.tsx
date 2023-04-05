import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// material ui import
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

//component import
import HeroCardList from "components/HeroListComponent";
//api
import { GetHeroProfileResponseData, getHeroProfile , updateHeroProfile } from "api/api";
import { Button, Typography } from "@mui/material";

const HeroProfile = () => {

  const [heroStr, setHeroStr] = useState<number>(0);
  const [heroAgi, setHeroAgi] = useState<number>(0);
  const [heroInt, setHeroInt] = useState<number>(0);
  const [heroLuk, setHeroLuk] = useState<number>(0);
  const [heroTotalAbilities, setHeroTotalAbilities] = useState<number>(0);
  const navigate = useNavigate();

  let { heroId } = useParams();
  useEffect(() => {
    if (heroId === undefined) return;
    getHeroProfile(heroId).then((res) => {
      setHeroStr(res.str);
      setHeroAgi(res.agi);
      setHeroInt(res.int);
      setHeroLuk(res.luk);
      setHeroTotalAbilities(res.str + res.agi + res.int + res.luk);
    });
  }, [heroId]);

  const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    display: "flex",
    border: "1px solid black",
    backgroundColor: "white",
    height: "400px",
    marginLeft: "25%",
    marginRight: "25%",
    flexDirection: "column",
  }));

  const StyledInnerBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
  }));

  const StyledAbilitiesBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
    display: "inline-flex",
    flexDirection: "row",
    gap: theme.spacing(2),
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    width: theme.spacing(10),
    height: theme.spacing(4),
  }));

  const StyleIconButton = styled(IconButton)(({ theme }) => ({
    padding: theme.spacing(0),
  }));

  const onClickEvent = (element: string, isAdd: boolean) => {
    if (
      isAdd &&
      heroTotalAbilities - heroStr - heroAgi - heroInt - heroLuk === 0
    ) {
      return (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            You have already used all your points.
          </Alert>
        </Stack>
      );
    }

    if (
      isAdd &&
      heroTotalAbilities - heroStr - heroAgi - heroInt - heroLuk > 0
    ) {
      switch (element) {
        case "str":
          setHeroStr(heroStr + 1);
          break;
        case "agi":
          setHeroAgi(heroAgi + 1);
          break;
        case "int":
          setHeroInt(heroInt + 1);
          break;
        case "luk":
          setHeroLuk(heroLuk + 1);
          break;
      }
    } else {
      switch (element) {
        case "str":
          if (heroStr === 0) {
            return (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="warning">
                  <AlertTitle>Warning</AlertTitle>
                  You don't have any str points left
                </Alert>
              </Stack>
            );
          } else {
            setHeroStr(heroStr - 1);
          }
          break;
        case "agi":
          if (heroAgi === 0) {
            return (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="warning">
                  <AlertTitle>Warning</AlertTitle>
                  You don't have any agi points left
                </Alert>
              </Stack>
            );
          } else {
            setHeroAgi(heroAgi - 1);
          }
          break;
        case "int":
          if (heroInt === 0) {
            return (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="warning">
                  <AlertTitle>Warning</AlertTitle>
                  You don't have any int points left
                </Alert>
              </Stack>
            );
          } else {
            setHeroInt(heroInt - 1);
          }
          break;
        case "luk":
          if (heroLuk === 0) {
            return (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="warning">
                  <AlertTitle>Warning</AlertTitle>
                  You don't have any luk points left
                </Alert>
              </Stack>
            );
          } else {
            setHeroLuk(heroLuk - 1);
          }
          break;
      }
    }
  };

  const saveHeroAbility = () => {

    if(heroTotalAbilities - heroStr - heroAgi - heroInt - heroLuk !== 0) return;

    const patchBody = {
        str: heroStr,
        agi: heroAgi,
        int: heroInt,
        luk: heroLuk,
    }
    if(heroId === undefined) return;
    updateHeroProfile(heroId, patchBody).then((res) => {
        navigate(0);
    })   
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeroCardList id={Number(heroId)} />
      <StyledBox>
        <StyledInnerBox>
          <Typography fontSize={30}>Hero Abilities</Typography>
        </StyledInnerBox>
        <StyledInnerBox>
          <StyledAbilitiesBox>
            <Typography>str : </Typography>
            <StyleIconButton onClick={() => onClickEvent("str", false)}>
              <RemoveCircle />
            </StyleIconButton>
            <Typography>{heroStr}</Typography>
            <StyleIconButton onClick={() => onClickEvent("str", true)}>
              <AddCircle />
            </StyleIconButton>
          </StyledAbilitiesBox>
        </StyledInnerBox>
        <StyledInnerBox>
          <StyledAbilitiesBox>
            <Typography>int : </Typography>
            <StyleIconButton onClick={() => onClickEvent("int", false)}>
              <RemoveCircle />
            </StyleIconButton>
            <Typography>{heroInt}</Typography>
            <StyleIconButton onClick={() => onClickEvent("int", true)}>
              <AddCircle />
            </StyleIconButton>
          </StyledAbilitiesBox>
        </StyledInnerBox>
        <StyledInnerBox>
          <StyledAbilitiesBox>
            <Typography>agi : </Typography>
            <StyleIconButton onClick={() => onClickEvent("agi", false)}>
              <RemoveCircle />
            </StyleIconButton>
            <Typography>{heroAgi}</Typography>
            <StyleIconButton onClick={() => onClickEvent("agi", true)}>
              <AddCircle />
            </StyleIconButton>
          </StyledAbilitiesBox>
        </StyledInnerBox>
        <StyledInnerBox>
          <StyledAbilitiesBox>
            <Typography>luk : </Typography>
            <StyleIconButton onClick={() => onClickEvent("luk", false)}>
              <RemoveCircle />
            </StyleIconButton>
            <Typography>{heroLuk}</Typography>
            <StyleIconButton onClick={() => onClickEvent("luk", true)}>
              <AddCircle />
            </StyleIconButton>
          </StyledAbilitiesBox>
        </StyledInnerBox>
        <StyledInnerBox>
          <StyledAbilitiesBox>
            <Typography fontSize={20}>
              unused abilities :{" "}
              {heroTotalAbilities - heroStr - heroAgi - heroInt - heroLuk}
            </Typography>
            <StyledButton variant="contained" onClick={saveHeroAbility}>
              Save
            </StyledButton>
          </StyledAbilitiesBox>
        </StyledInnerBox>
      </StyledBox>
    </Box>
  );
};

export default HeroProfile;
