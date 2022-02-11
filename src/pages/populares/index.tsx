/* eslint-disable @next/next/link-passhref */
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Populares da semana | Rocket NFTs</title>
      </Head>
      <Heading
        as="h1"
        fontSize="4xl"
        fontWeight="bold"
        color="red.500"
        textAlign="center"
        p="20"        
      >
        Populares{" "}
        <Text ml="2" color="gray.100">
          da semana
        </Text>
      </Heading>
      <Flex
        w="100%"
        maxW={1280}
        d="flex"
        px={["4", "4", "8"]}
        py={["4", "4", "8"]}
        mx="auto"
        justifyContent="center"
        height="100vh"
        alignItems="center"
      >
        <Stack spacing="4" mt="8">
          <Box>
            <Heading as="h2" fontSize="2xl" fontWeight="medium">
              Astronauta 1
            </Heading>
            <Text
              as="span"
              fontSize={["sm", "md"]}
              fontWeight="light"
              color="gray.500"
            >
              Artista 1{" "}
              <Text
                as="span"
                fontSize={["sm", "md"]}
                fontWeight="light"
                color="red.500"
              >
                1.50 RKT
              </Text>
            </Text>
            <Img src="./images/Gallery/galeria-1.svg" />
          </Box>
          <Stack spacing="4" mt="8">
            <Heading as="h2" fontSize="2xl" fontWeight="medium">
              Astronauta 2
            </Heading>
            <Text
              as="span"
              fontSize={["sm", "md"]}
              fontWeight="light"
              color="gray.500"
            >
              Artista 2{" "}
              <Text
                as="span"
                fontSize={["sm", "md"]}
                fontWeight="light"
                color="red.500"
              >
                3.75 RKT
              </Text>
            </Text>
            <Img src="./images/Gallery/galeria-2.svg" />
          </Stack>
        </Stack>
        <Divider
          orientation="vertical"
          bg="gray.200"
          borderRadius="0"
          border="1px solid"
          borderColor="gray.500"
          ml="4"
          mr="4"
        />
        <Stack spacing="4" mt="8">
          <Box>
            <Heading as="h2" fontSize="2xl" fontWeight="medium">
              Astronauta 3
            </Heading>
            <Text
              as="span"
              fontSize={["sm", "md"]}
              fontWeight="light"
              color="gray.500"
            >
              Artista 3{" "}
              <Text
                as="span"
                fontSize={["sm", "md"]}
                fontWeight="light"
                color="red.500"
              >
                2.0 RKT
              </Text>
            </Text>
            <Img src="./images/Gallery/galeria-3.svg" />
          </Box>
          <Stack spacing="4" mt="8">
            <Heading as="h2" fontSize="2xl" fontWeight="medium">
              Astronauta 4
            </Heading>
            <Text
              as="span"
              fontSize={["sm", "md"]}
              fontWeight="light"
              color="gray.500"
            >
              Artista 4{" "}
              <Text
                as="span"
                fontSize={["sm", "md"]}
                fontWeight="light"
                color="red.500"
              >
                4.30 RKT
              </Text>
            </Text>
            <Img src="./images/Gallery/galeria-4.svg" />
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
