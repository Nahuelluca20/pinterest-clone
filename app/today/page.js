"use client";
import Image from "next/image";
import {Grid, Heading, Stack, Text, Link} from "@chakra-ui/react";
import NextLink from "next/link";

import TodayCard from "../components/TodayCard";
import TodayCard3img from "../components/TodayCard3img";
import Check from "../assets/check.png";
import ButtonHovered from "../components/ButtonHovered";

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
        <Stack
          alignItems={"center"}
          color={"#111"}
          justifyContent={"center"}
          py={"60px"}
          spacing={0}
          width={"100%"}
        >
          <Image alt={"todat"} height={30} src={Check} width={30} />
          <Text fontSize={"16px"} fontWeight={400} pt={20}>
            ¡Es todo por hoy!
          </Text>
          <Text fontSize={"20px"} fontWeight={600} pt={20}>
            Vuelve mañana para encontrar más inspiración
          </Text>
          <Link as={NextLink} href="/" pt={30} style={{textDecoration: "none"}}>
            <ButtonHovered
              bgColor={"#efefef"}
              bgColorHover={"#e2e2e2"}
              text={"Ir al feed de inicio"}
            />
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Today;
