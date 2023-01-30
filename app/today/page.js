"use client";
import {Grid, Heading, Stack} from "@chakra-ui/react";

import TodayCard from "../components/TodayCard";
import TodayCard3img from "../components/TodayCard3img";

import data from "./TodaCardData";

function Today() {
  const cardData = data;

  return (
    <Stack alignItems={"center"} width={"100%"}>
      <Stack mt={"20px"} spacing={0} textAlign={"center"} width={"865px"}>
        <Heading color={"#111"} fontSize={"20px"} fontWeight={400} mb={0}>
          29 de enero de 2023
        </Heading>
        <Heading color={"#111"} fontSize={"36px"} fontWeight={500} pt={6}>
          Sigue inspirándote
        </Heading>
        <Grid
          flexWrap={"wrap"}
          gap={"16px"}
          justifyContent={"center"}
          pt={30}
          templateColumns="repeat(2, 408px)"
        >
          {cardData.map((item) => {
            if (item.oneImgDesign) {
              return (
                <TodayCard
                  key={item.title}
                  img1={item.img1}
                  img2={item.img2}
                  img3={item.img3}
                  oneImgDesign={item.oneImgDesign}
                  title={item.title}
                  upTitle={item.title}
                />
              );
            } else {
              return (
                <TodayCard3img
                  key={item.title}
                  img1={item.img1}
                  img2={item.img2}
                  img3={item.img3}
                  oneImgDesign={item.oneImgDesign}
                  title={item.title}
                  upTitle={item.title}
                />
              );
            }
          })}
        </Grid>
      </Stack>
    </Stack>
  );
}

export default Today;
